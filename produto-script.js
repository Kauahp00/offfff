// =============================================
// CONFIGURAÇÕES GLOBAIS E DADOS INICIAIS
// =============================================

// Dados do produto atual (apenas na página de produto)
const urlParams = new URLSearchParams(window.location.search);
const produtoId = urlParams.get("id");
const produto = produtos[produtoId];

// Elementos DOM (alguns só existem em produto.html)
const imgEl = document.getElementById("imgProduto");
const tituloEl = document.getElementById("tituloProduto");
const descricaoEl = document.getElementById("descricaoProduto");
const precoEl = document.getElementById("precoProduto");
const whatsEl = document.getElementById("whatsLink");
const btnFavoritar = document.getElementById("btnFavoritar");
const carrossel = document.getElementById("carrosselSugestoes");
const selectTamanho = document.getElementById("selectTamanho");

// Carrinho/Favoritos (funciona em ambas as páginas)
let favoritos = JSON.parse(localStorage.getItem("favoritosOFF11")) || [];
let descontoAtual = 0;

// Cupons válidos (com desconto percentual)
const cuponsValidos = {
  "OFF11": 0.10,
  "TIKTOK27": 20,// 10% de desconto
  
};

// =============================================
// FUNÇÕES PRINCIPAIS (CARRINHO E CUPOM)
// =============================================

// Função para aplicar cupom de desconto
function aplicarCupom() {
  const input = document.getElementById("inputCupom");
  const msg = document.getElementById("msgCupom");
  const cupom = input.value.trim().toUpperCase();

  if (cuponsValidos[cupom]) {
    descontoAtual = cuponsValidos[cupom];
    msg.style.color = "green";
    msg.textContent = `✅ Cupom aplicado (${descontoAtual * 100}% OFF)`;
    
    // Mostra o desconto por 5 segundos
    setTimeout(() => {
      msg.textContent = "";
    }, 5000);
  } else {
    descontoAtual = 0;
    msg.style.color = "red";
    msg.textContent = "❌ Cupom inválido ou expirado";
  }

  // Atualiza o carrinho se estiver aberto
  if (typeof atualizarPainelFavoritos === 'function') {
    atualizarPainelFavoritos();
  }
}

// Verifica se um produto já está no carrinho
function favoritoExiste(id, tamanho) {
  return favoritos.some(f => f.idProduto === id && f.tamanho === tamanho);
}

// Atualiza o texto do botão de adicionar/remover
function atualizarFavoritarBtn() {
  if (!btnFavoritar) return;
  
  const tamanho = selectTamanho.value;
  btnFavoritar.textContent = favoritoExiste(produtoId, tamanho) 
    ? "❌ Remover do carrinho" 
    : "🛒 Adicionar ao carrinho";
}

// Adiciona/remove produto do carrinho
function adicionarFavorito() {
  const tamanho = selectTamanho.value;
  
  if (favoritoExiste(produtoId, tamanho)) {
    favoritos = favoritos.filter(f => !(f.idProduto === produtoId && f.tamanho === tamanho));
  } else {
    favoritos.push({ 
      idProduto: produtoId, 
      tamanho: tamanho,
      dataAdicao: new Date().toISOString() 
    });
  }
  
  localStorage.setItem("favoritosOFF11", JSON.stringify(favoritos));
  atualizarFavoritarBtn();
  atualizarPainelFavoritos();
  
  // Feedback visual
  if (btnFavoritar) {
    btnFavoritar.textContent = favoritoExiste(produtoId, tamanho) 
      ? "✔️ Adicionado!" 
      : "❌ Removido!";
    setTimeout(atualizarFavoritarBtn, 1500);
  }
}

// Remove item específico do carrinho
function removerFavorito(id, tamanho) {
  favoritos = favoritos.filter(f => !(f.idProduto === id && f.tamanho === tamanho));
  localStorage.setItem("favoritosOFF11", JSON.stringify(favoritos));
  atualizarPainelFavoritos();
  if (produtoId) atualizarFavoritarBtn();
}

// =============================================
// FUNÇÕES DE ATUALIZAÇÃO DA INTERFACE
// =============================================

function atualizarPainelFavoritos() {
    const lista = document.getElementById("listaFavoritos");
    const totalSpan = document.getElementById("totalFavoritos");
    
    if (!lista || !totalSpan) return;
    
    lista.innerHTML = "";
    let total = 0;
  
    favoritos.forEach(fav => {
      const p = produtos[fav.idProduto];
      if (!p) return;
  
      const precoNum = parseFloat(p.preco.replace("R$", "").replace(",", "."));
      total += precoNum;
  
      const item = document.createElement("div");
      item.style.marginBottom = "12px";
      item.style.paddingBottom = "8px";
      item.style.borderBottom = "1px solid #eee";
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${p.imagem}" alt="${p.nome}" 
               style="width: 50px; height: 50px; object-fit: contain; border-radius: 4px; border: 1px solid #ddd;">
          <div style="flex-grow:1;">
            <div style="font-size: 14px; font-weight: 600;">${p.nome}</div>
            <div style="font-size: 13px; color: #28207B; font-weight: bold;">${p.preco}</div>
            <div style="font-size: 12px; color: #666;">Tamanho: <strong>${fav.tamanho}</strong></div>
          </div>
          <button onclick="removerFavorito('${fav.idProduto}', '${fav.tamanho}')" 
                  style="background:none; border:none; color:red; cursor:pointer; font-size: 18px; font-weight: bold;">✕</button>
        </div>
      `;
      lista.appendChild(item);
    });
  
    // Restante da função permanece igual
    const totalComDesconto = total * (1 - descontoAtual);
    totalSpan.innerHTML = `
      ${descontoAtual > 0 ? `<span style="text-decoration: line-through; opacity: 0.6; margin-right: 8px;">
        R$ ${total.toFixed(2).replace(".", ",")}
      </span>` : ''}
      <span>R$ ${totalComDesconto.toFixed(2).replace(".", ",")}</span>
    `;
  
    gerarLinkWhatsAppFinal(totalComDesconto);
  }

// Gera link para WhatsApp com os itens do carrinho
function gerarLinkWhatsAppFinal(totalComDesconto) {
  const linkEl = document.getElementById("whatsLinkFinal");
  if (!linkEl) return;

  let mensagem = "📋 *Pedido via Carrinho* 📋\n\n";
  mensagem += "Itens selecionados:\n\n";

  favoritos.forEach((fav, i) => {
    const p = produtos[fav.idProduto];
    if (!p) return;
    mensagem += `➡️ *${p.nome}* (Tamanho: ${fav.tamanho})\n`;
    mensagem += `   💵 ${p.preco}\n\n`;
  });

  mensagem += "------------------------\n";
  mensagem += `💰 *Total: R$ ${totalComDesconto.toFixed(2).replace(".", ",")}*\n`;
  if (descontoAtual > 0) {
    mensagem += `(Desconto de ${descontoAtual * 100}% aplicado)\n`;
  }
  mensagem += "\nPor favor, confirme disponibilidade e formas de pagamento.";

  const numero = "5515996128644"; // Substitua pelo seu número
  linkEl.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

// =============================================
// FUNÇÕES ESPECÍFICAS DA PÁGINA DE PRODUTO
// =============================================

// Carrega sugestões de produtos relacionados
function carregarSugestoes() {
  if (!carrossel || !produto?.sugestoes) return;

  carrossel.innerHTML = "";
  produto.sugestoes.forEach(id => {
    const p = produtos[id];
    if (!p) return;

    const item = document.createElement("div");
    item.className = "sugestao-item";
    item.innerHTML = `
      <a href="produto.html?id=${id}">
        <img src="${p.imagem}" alt="${p.nome}">
        <div class="sugestao-info">
          <strong>${p.nome}</strong>
          <span>${p.preco}</span>
        </div>
      </a>
    `;
    carrossel.appendChild(item);
  });
}

// =============================================
// CONTROLE DO PAINEL DO CARRINHO
// =============================================

function abrirFavoritos() {
  atualizarPainelFavoritos();
  document.getElementById("painelFavoritos").style.right = "0";
  document.body.style.overflow = "hidden"; // Bloqueia scroll da página
}

function fecharFavoritos() {
  document.getElementById("painelFavoritos").style.right = "-400px";
  document.body.style.overflow = "auto"; // Libera scroll da página
}

// =============================================
// INICIALIZAÇÃO DA PÁGINA
// =============================================

document.addEventListener('DOMContentLoaded', function() {
  // Configura o cupom (funciona em ambas as páginas)
  const btnCupom = document.getElementById("btnAplicarCupom");
  if (btnCupom) {
    btnCupom.addEventListener('click', aplicarCupom);
    
    // Permite aplicar cupom com Enter
    const inputCupom = document.getElementById("inputCupom");
    if (inputCupom) {
      inputCupom.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') aplicarCupom();
      });
    }
  }

  // Configurações específicas da página de produto
  if (produto) {
    // Preenche dados do produto
    imgEl.src = produto.imagem;
    tituloEl.textContent = produto.nome;
    descricaoEl.textContent = produto.descricao || "Camisa oficial de alta qualidade";
    precoEl.textContent = produto.preco;

    // Link para WhatsApp do produto individual
    whatsEl.href = `https://wa.me/5515996128644?text=${encodeURIComponent(
      `Olá, gostaria de tirar algumas dúvidas sobre o produto: ${produto.nome} (${produto.preco})\nTamanho: ${selectTamanho.value}\n\nPode me ajudar?`
    )}`;

    // Atualiza botão do carrinho
    atualizarFavoritarBtn();

    // Carrega sugestões
    carregarSugestoes();

    // Atualiza link do WhatsApp quando muda o tamanho
    selectTamanho.addEventListener("change", function() {
      whatsEl.href = `https://wa.me/5515996128644?text=${encodeURIComponent(
        `Olá, quero comprar: ${produto.nome} (${produto.preco})\nTamanho: ${this.value}\n\nPoderia me informar sobre pagamento e entrega?`
      )}`;
      atualizarFavoritarBtn();
    });
  } else if (window.location.pathname.includes("produto.html")) {
    // Página de produto mas ID inválido
    document.querySelector("main").innerHTML = `
      <div class="produto-container" style="text-align: center;">
        <h2>Produto não encontrado</h2>
        <p>O produto solicitado não está disponível.</p>
        <button class="btn" onclick="window.location.href='index.html'">Voltar à loja</button>
      </div>
    `;
  }
});

// Permite fechar o carrinho clicando fora
document.addEventListener('click', function(e) {
  const painel = document.getElementById("painelFavoritos");
  if (painel && !painel.contains(e.target)) {
    const btnCarrinho = document.getElementById("btnFavoritos") || 
                       document.getElementById("btnFlutuanteCarrinho");
    if (btnCarrinho && !btnCarrinho.contains(e.target)) {
      fecharFavoritos();
}
  }
});
