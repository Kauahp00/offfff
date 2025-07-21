const urlParams = new URLSearchParams(window.location.search);
const produtoId = urlParams.get("id");
const produto = produtos[produtoId];

const imgEl = document.getElementById("imgProduto");
const tituloEl = document.getElementById("tituloProduto");
const descricaoEl = document.getElementById("descricaoProduto");
const precoEl = document.getElementById("precoProduto");
const whatsEl = document.getElementById("whatsLink");
const btnFavoritar = document.getElementById("btnFavoritar");
const carrossel = document.getElementById("carrosselSugestoes");
const selectTamanho = document.getElementById("selectTamanho");

let favoritos = JSON.parse(localStorage.getItem("favoritosOFF11"));
if (!Array.isArray(favoritos)) {
  favoritos = [];
}

function favoritoExiste(id, tamanho) {
  return favoritos.some(f => f.idProduto === id && f.tamanho === tamanho);
}

function atualizarFavoritarBtn() {
  const tamanho = selectTamanho.value;
  if (favoritoExiste(produtoId, tamanho)) {
    btnFavoritar.textContent = "❤️ Favoritado";
  } else {
    btnFavoritar.textContent = "🤍 Favoritar";
  }
}

function adicionarFavorito() {
  const tamanho = selectTamanho.value;

  if (favoritoExiste(produtoId, tamanho)) {
    favoritos = favoritos.filter(f => !(f.idProduto === produtoId && f.tamanho === tamanho));
  } else {
    favoritos.push({ idProduto: produtoId, tamanho: tamanho });
  }

  localStorage.setItem("favoritosOFF11", JSON.stringify(favoritos));
  atualizarFavoritarBtn();
  atualizarPainelFavoritos();
}

function carregarSugestoes() {
  if (!produto.sugestoes) return;
  carrossel.innerHTML = "";

  produto.sugestoes.forEach(id => {
    const sugestao = produtos[id];
    if (!sugestao) return;

    const div = document.createElement("div");
    div.style.minWidth = "160px";
    div.style.border = "1px solid #ccc";
    div.style.borderRadius = "16px";
    div.style.overflow = "hidden";
    div.style.background = "#fff";
    div.style.boxShadow = "0 2px 6px rgba(0,0,0,0.07)";
    div.style.transition = "transform 0.2s ease";
    div.style.cursor = "pointer";

    div.onmouseenter = () => div.style.transform = "scale(1.05)";
    div.onmouseleave = () => div.style.transform = "scale(1)";

    div.innerHTML = `
      <a href="produto.html?id=${id}" style="text-decoration: none; color: inherit;">
        <img src="${sugestao.imagem}" alt="${sugestao.nome}" style="width: 100%; height: auto;">
        <div style="padding: 10px;">
          <strong style="font-size: 14px;">${sugestao.nome}</strong>
          <p style="font-size: 13px; color: #555;">${sugestao.preco}</p>
        </div>
      </a>
    `;

    carrossel.appendChild(div);
  });
}

function abrirFavoritos() {
  atualizarPainelFavoritos();
  document.getElementById("painelFavoritos").style.right = "0";
}

function fecharFavoritos() {
  document.getElementById("painelFavoritos").style.right = "-400px";
}

function atualizarPainelFavoritos() {
  const lista = document.getElementById("listaFavoritos");
  const totalSpan = document.getElementById("totalFavoritos");
  lista.innerHTML = "";

  let total = 0;

  favoritos.forEach(fav => {
    const p = produtos[fav.idProduto];
    if (!p) return;

    const item = document.createElement("div");
    item.style.marginBottom = "12px";
    item.style.borderBottom = "1px solid #eee";
    item.style.paddingBottom = "8px";
    item.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${p.imagem}" alt="${p.nome}" style="width: 40px; height: auto; border-radius: 6px;">
        <div style="flex-grow:1;">
          <div style="font-size: 14px; font-weight: 600;">${p.nome}</div>
          <div style="font-size: 13px; color: #28207B; font-weight: bold;">${p.preco}</div>
          <div style="font-size: 12px; color: #666;">Tamanho: <strong>${fav.tamanho}</strong></div>
        </div>
        <button onclick="removerFavorito('${fav.idProduto}', '${fav.tamanho}')" style="background:none; border:none; color:red; cursor:pointer; font-size: 18px; font-weight: bold;">✕</button>
      </div>
    `;
    lista.appendChild(item);

    const precoNum = parseFloat(p.preco.replace("R$", "").replace(",", "."));
    total += precoNum;
  });

  totalSpan.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
  gerarLinkWhatsAppFinal();
}

function removerFavorito(id, tamanho) {
  favoritos = favoritos.filter(f => !(f.idProduto === id && f.tamanho === tamanho));
  localStorage.setItem("favoritosOFF11", JSON.stringify(favoritos));
  atualizarPainelFavoritos();
  atualizarFavoritarBtn();
}

function gerarLinkWhatsAppFinal() {
    let mensagem = "Olá! Tenho interesse nas seguintes camisas:\n\n";
    let total = 0;
  
    favoritos.forEach((fav, i) => {
      const p = produtos[fav.idProduto];
      if (!p) return;
  
      const precoNum = parseFloat(p.preco.replace("R$", "").replace(",", "."));
      total += precoNum;
  
      mensagem += `${i + 1}. ${p.nome}\n`;
      mensagem += `   • Tamanho: ${fav.tamanho}\n`;
      mensagem += `   • Preço: ${p.preco}\n\n`;
    });
  
    mensagem += `🧾 Total da compra: R$ ${total.toFixed(2).replace(".", ",")}\n\n`;
    mensagem += "Aguardo o atendimento. Obrigado!";
  
    const numero = "15996128644"; // <- seu número com DDD
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  
    document.getElementById("whatsLinkFinal").href = link;
  }

selectTamanho.addEventListener("change", atualizarFavoritarBtn);

if (produto) {
  imgEl.src = produto.imagem;
  tituloEl.textContent = produto.nome;
  descricaoEl.textContent = produto.descricao;
  precoEl.textContent = produto.preco;
  whatsEl.href = `https://wa.me/15996128644?text=Olá, quero comprar a ${encodeURIComponent(produto.nome)} por ${encodeURIComponent(produto.preco)} (Tamanho: ${selectTamanho.value})`;

  atualizarFavoritarBtn();
  carregarSugestoes();
} else {
  document.querySelector("main").innerHTML = "<h2>Produto não encontrado</h2><p>Volte à loja e escolha outro item.</p>";
}

