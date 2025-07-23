// Certifique-se de que o arquivo produtos-data.js seja carregado ANTES deste script.
// Ex: <script src="produtos-data.js"></script>
//     <script src="index-script.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const suggestionsContainer = document.getElementById('suggestionsContainer');

    // Função para exibir sugestões enquanto o usuário digita
    function showSuggestions() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        suggestionsContainer.innerHTML = ''; // Limpa sugestões anteriores

        if (searchTerm.length < 2) { // Começa a sugerir a partir de 2 caracteres
            suggestionsContainer.style.display = 'none';
            return;
        }

        const matchingProducts = [];
        for (const key in produtos) {
            if (produtos.hasOwnProperty(key)) {
                const product = produtos[key];
                // Filtra produtos cujo nome inclui o termo de busca
                if (product.nome.toLowerCase().includes(searchTerm)) {
                    matchingProducts.push({ id: key, nome: product.nome });
                }
            }
        }

        if (matchingProducts.length > 0) {
            suggestionsContainer.style.display = 'block';
            matchingProducts.forEach(p => {
                const suggestionItem = document.createElement('div');
                suggestionItem.className = 'suggestion-item';
                suggestionItem.textContent = p.nome;
                suggestionItem.dataset.productId = p.id; // Armazena o ID do produto no elemento

                // Adiciona evento de clique para redirecionar ao selecionar uma sugestão
                suggestionItem.addEventListener('click', () => {
                    window.location.href = `produto.html?id=${p.id}`;
                    searchInput.value = p.nome; // Preenche o input com o nome completo
                    suggestionsContainer.style.display = 'none'; // Esconde as sugestões
                });
                suggestionsContainer.appendChild(suggestionItem);
            });
        } else {
            suggestionsContainer.style.display = 'none';
        }
    }

    // Função para redirecionar ao clicar no botão "Buscar"
    function performSearchAndRedirect() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        if (searchTerm === '') {
            alert('Por favor, digite o nome da camisa que deseja pesquisar.');
            return;
        }

        let foundProductId = null;

        // Procura por uma correspondência exata ou a mais próxima
        for (const key in produtos) {
            if (produtos.hasOwnProperty(key)) {
                const product = produtos[key];
                if (product.nome.toLowerCase() === searchTerm) { // Correspondência exata primeiro
                    foundProductId = key;
                    break;
                }
                // Se não for exato, mas incluir o termo, guarda como possível
                if (!foundProductId && product.nome.toLowerCase().includes(searchTerm)) {
                    foundProductId = key;
                }
            }
        }

        if (foundProductId) {
            window.location.href = `produto.html?id=${foundProductId}`;
        } else {
            alert(`"${searchInput.value}" não foi encontrado. Por favor, verifique o nome e tente novamente.`);
        }
        suggestionsContainer.style.display = 'none'; // Esconde as sugestões após a busca
    }

    // Adiciona event listeners
    searchInput.addEventListener('input', showSuggestions); // Chama showSuggestions a cada digitação
    searchButton.addEventListener('click', performSearchAndRedirect); // Chama a função de redirecionamento no clique do botão

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearchAndRedirect();
        }
    });

    // Esconde as sugestões se o usuário clicar fora do campo de busca ou das sugestões
    document.addEventListener('click', (event) => {
        if (!searchContainer.contains(event.target)) { // Assumindo que searchContainer é o pai do input e suggestions
            suggestionsContainer.style.display = 'none';
        }
    });
});
