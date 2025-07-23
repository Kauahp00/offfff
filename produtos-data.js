// produtos-data.js

const produtos = {
    // CAMISAS BRASILEIRAS
    palmeiras: {
      nome: "Camisa Palmeiras 2024",
      descricao: "Camisa oficial do Palmeiras, modelo atual da temporada.",
      preco: "R$ 119,99",
      imagem: "BRASIL/palmeiras.png",
      sugestoes: ["SP", "SCCP", "SANTOS"]
    },
    SP: {
      nome: "Camisa São Paulo 2024",
      descricao: "Camisa oficial do São Paulo, design moderno e tradicional.",
      preco: "R$ 119,99",
      imagem: "BRASIL/Sp.jpg",
      sugestoes: ["SCCP", "palmeiras", "FLA"]
    },
    SCCP: {
      nome: "Camisa Corinthians 2024",
      descricao: "Camisa oficial do Corinthians, mantendo as cores tradicionais.",
      preco: "R$ 119,99",
      imagem: "BRASIL/SCCP.jpg",
      sugestoes: ["SP", "VASCO", "palmeiras"]
    },
    SANTOS: {
      nome: "Camisa Santos 2024",
      descricao: "Camisa oficial do Santos, com o clássico design branco.",
      preco: "R$ 119,99",
      imagem: "BRASIL/santos.jpeg",
      sugestoes: ["palmeiras", "SP", "FLA"]
    },
    FLA: {
      nome: "Camisa Flamengo 2024",
      descricao: "Camisa oficial do Flamengo, com as cores rubro-negras.",
      preco: "R$ 119,99",
      imagem: "BRASIL/flamengo.jpeg",
      sugestoes: ["VASCO", "SANTOS", "SP"]
    },
    VASCO: {
      nome: "Camisa Vasco 2024",
      descricao: "Camisa oficial do Vasco, com a tradicional faixa diagonal.",
      preco: "R$ 119,99",
      imagem: "BRASIL/vasco.jpg",
      sugestoes: ["FLA", "SCCP", "SP"]
    },

    // EUROPEUS
    BARCELONA: {
      nome: "Camisa Barcelona 23/24",
      descricao: "Camisa oficial do Barcelona, temporada 2023/2024.",
      preco: "R$ 119,99",
      imagem: "EUROPA/barcelona.jpeg",
      sugestoes: ["REAL", "CITY", "BAYERN"]
    },
    REAL: {
      nome: "Camisa Real Madrid 2024",
      descricao: "Camisa oficial do Real Madrid, design clássico e elegante.",
      preco: "R$ 119,99",
      imagem: "EUROPA/realMadrid.jpg",
      sugestoes: ["BARCELONA", "CHELSEA", "BAYERN"]
    },
    CITY: {
      nome: "Camisa Manchester City 2024",
      descricao: "Camisa oficial do Manchester City, modelo atual.",
      preco: "R$ 119,99",
      imagem: "EUROPA/city.jpeg",
      sugestoes: ["CHELSEA", "REAL", "BARCELONA"]
    },
    BAYERN: {
      nome: "Camisa Bayern 2024",
      descricao: "Camisa oficial do Bayern de Munique, cores tradicionais.",
      preco: "R$ 119,99",
      imagem: "EUROPA/bayern.jpeg",
      sugestoes: ["REAL", "CITY", "BARCELONA"]
    },
    CHELSEA: {
      nome: "Camisa Chelsea 2024",
      descricao: "Camisa oficial do Chelsea, design azul característico.",
      preco: "R$ 119,99",
      imagem: "EUROPA/chelsea.jpg",
      sugestoes: ["CITY", "REAL", "BARCELONA"]
    },

    // SELEÇÕES
    Brasil: {
      nome: "Camisa Brasil 2024",
      descricao: "Camisa oficial da Seleção Brasileira, amarela canarinho.",
      preco: "R$ 149,99",
      imagem: "BRASIL/brasil.jpeg",
      sugestoes: ["Argentina", "França", "Portugal"]
    },
    Portugal: {
      nome: "Camisa Portugal 2024",
      descricao: "Camisa oficial da Seleção Portuguesa, vermelha e verde.",
      preco: "R$ 149,99",
      imagem: "SELECAO/Portugal.jpeg",
      sugestoes: ["Brasil", "Espanha", "França"]
    },
    Espanha: {
      nome: "Camisa Espanha 2024",
      descricao: "Camisa oficial da Seleção Espanhola, vermelha e amarela.",
      preco: "R$ 149,99",
      imagem: "SELECAO/espanha.jpeg",
      sugestoes: ["Portugal", "Alemanha", "França"]
    },
    Alemanha: {
      nome: "Camisa Alemanha 2024",
      descricao: "Camisa oficial da Seleção Alemã, branca e preta.",
      preco: "R$ 149,99",
      imagem: "SELECAO/alemanha.jpeg",
      sugestoes: ["França", "Inglaterra", "Espanha"]
    },
    Inglaterra: {
      nome: "Camisa Inglaterra 2024",
      descricao: "Camisa oficial da Seleção Inglesa, branca e azul.",
      preco: "R$ 149,99",
      imagem: "SELECAO/inglaterra.jpeg",
      sugestoes: ["Alemanha", "França", "Portugal"]
    },
    França: {
      nome: "Camisa França 2024",
      descricao: "Camisa oficial da Seleção Francesa, azul-marinho.",
      preco: "R$ 149,99",
      imagem: "SELECAO/franca.jpeg",
      sugestoes: ["Brasil", "Portugal", "Inglaterra"]
    },

    // RETRÔ
    MILAN: {
      nome: "Camisa Retrô Milan 1990",
      descricao: "Camisa clássica do Milan, edição retrô dos anos 90.",
      preco: "R$ 159,99",
      imagem: "RETRO/RetroMilan.jpg",
      sugestoes: ["Ajax", "Brasilretro", "HOLANDA"]
    },
    palmeiras2: {
      nome: "Camisa Retrô Palmeiras 1993",
      descricao: "Camisa histórica do Palmeiras, modelo anos 90.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroPalmeiras.jpg",
      sugestoes: ["SCCP2", "Santos2", "SP2"]
    },
    SCCP2: {
      nome: "Camisa Retrô Corinthians 1990",
      descricao: "Camisa vintage do Corinthians, estilo anos 90.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroCorinthians.jpeg",
      sugestoes: ["palmeiras2", "SP2", "Santos2"]
    },
    HOLANDA: {
      nome: "Camisa Retrô Holanda 1988",
      descricao: "Camisa icônica da Seleção Holandesa, edição retrô.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroHolanda.jpg",
      sugestoes: ["MILAN", "Ajax", "Brasilretro"]
    },
    Ajax: {
      nome: "Camisa Retrô Ajax 1995",
      descricao: "Camisa histórica do Ajax, modelo dos anos 90.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroAjax1995.jpg",
      sugestoes: ["MILAN", "HOLANDA", "Brasilretro"]
    },
    Brasilretro: {
      nome: "Camisa Retrô Brasil 2002",
      descricao: "Camisa da Seleção Brasileira, pentacampeã mundial.",
      preco: "R$ 179,99",
      imagem: "RETRO/retroBrasil2002.jpg",
      sugestoes: ["France", "HOLANDA", "Ajax"]
    },
    SP2: {
      nome: "Camisa Retrô São Paulo 2006",
      descricao: "Camisa comemorativa do São Paulo, tricampeão mundial.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroSP2006.jpg",
      sugestoes: ["SCCP2", "palmeiras2", "Santos2"]
    },
    Santos2: {
      nome: "Camisa Retrô Santos 1998",
      descricao: "Camisa vintage do Santos, homenagem aos anos 90.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroSantos98.jpg",
      sugestoes: ["palmeiras2", "SCCP2", "SP2"]
    },
    France: {
      nome: "Camisa Retrô França 2014",
      descricao: "Camisa retrô da Seleção Francesa, modelo 2014.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroFrance2014.jpeg",
      sugestoes: ["Brasilretro", "HOLANDA", "Ajax"]
    }
};
