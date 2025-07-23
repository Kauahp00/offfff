// produtos-data.js

const produtos = {
    // CAMISAS BRASILEIRAS
    palmeiras: {
      nome: "Camisa Palmeiras 2024",
      descricao: "Camisa oficial do Palmeiras com escudo bordado e tecido dryfit.",
      preco: "R$ 119,99",
      imagem: "BRASIL/palmeiras.png",
      sugestoes: ["SP", "SCCP", "SANTOS"]
    },
    SP: {
      nome: "Camisa São Paulo 2024",
      descricao: "Modelo oficial do São Paulo com acabamento premium.",
      preco: "R$ 119,99",
      imagem: "BRASIL/Sp.jpg",
      sugestoes: ["SCCP", "palmeiras", "FLA"]
    },
    SCCP: {
      nome: "Camisa Corinthians 2024",
      descricao: "Design moderno do Timão com escudo emborrachado.",
      preco: "R$ 119,99",
      imagem: "BRASIL/SCCP.jpg",
      sugestoes: ["SP", "VASCO", "palmeiras"]
    },
    SANTOS: {
      nome: "Camisa Santos 2024",
      descricao: "Camisa branca clássica com gola diferenciada.",
      preco: "R$ 119,99",
      imagem: "BRASIL/santos.jpeg",
      sugestoes: ["palmeiras", "SP", "FLA"]
    },
    FLA: {
      nome: "Camisa Flamengo 2024",
      descricao: "Flamengo rubro-negro com tecido respirável.",
      preco: "R$ 119,99",
      imagem: "BRASIL/flamengo.jpeg",
      sugestoes: ["VASCO", "SANTOS", "SP"]
    },
    VASCO: {
      nome: "Camisa Vasco 2024",
      descricao: "Modelo oficial do Vasco com faixa diagonal clássica.",
      preco: "R$ 119,99",
      imagem: "BRASIL/vasco.jpg",
      sugestoes: ["FLA", "SCCP", "SP"]
    },

    // EUROPEUS
    BARCELONA: {
      nome: "Camisa Barcelona 23/24",
      descricao: "Uniforme azul-grená da temporada europeia.",
      preco: "R$ 119,99",
      imagem: "EUROPA/barcelona.jpeg",
      sugestoes: ["REAL", "CITY", "BAYERN"]
    },
    REAL: {
      nome: "Camisa Real Madrid 2024",
      descricao: "Modelo branco elegante com detalhes dourados.",
      preco: "R$ 119,99",
      imagem: "EUROPA/realMadrid.jpg",
      sugestoes: ["BARCELONA", "CHELSEA", "BAYERN"]
    },
    CITY: {
      nome: "Camisa Manchester City 2024",
      descricao: "Celeste com detalhes em branco. Alta performance.",
      preco: "R$ 119,99",
      imagem: "EUROPA/city.jpeg",
      sugestoes: ["CHELSEA", "REAL", "BARCELONA"]
    },
    BAYERN: {
      nome: "Camisa Bayern 2024",
      descricao: "Vermelha com patrocínios e escudo bordado.",
      preco: "R$ 119,99",
      imagem: "EUROPA/bayern.jpeg",
      sugestoes: ["REAL", "CITY", "BARCELONA"]
    },
    CHELSEA: {
      nome: "Camisa Chelsea 2024",
      descricao: "Modelo azul intenso da Premier League.",
      preco: "R$ 119,99",
      imagem: "EUROPA/chelsea.jpg",
      sugestoes: ["CITY", "REAL", "BARCELONA"]
    },

    // SELEÇÕES
    Brasil: {
      nome: "Camisa Brasil 2024",
      descricao: "Camisa canarinho oficial da seleção brasileira.",
      preco: "R$ 149,99",
      imagem: "BRASIL/brasil.jpeg",
      sugestoes: ["Argentina", "França", "Portugal"]
    },
    Portugal: {
      nome: "Camisa Portugal 2024",
      descricao: "Vermelha com detalhes em verde, modelo oficial.",
      preco: "R$ 149,99",
      imagem: "SELECAO/Portugal.jpeg",
      sugestoes: ["Brasil", "Espanha", "França"]
    },
    Espanha: {
      nome: "Camisa Espanha 2024",
      descricao: "Vermelha com detalhes em amarelo, edição especial.",
      preco: "R$ 149,99",
      imagem: "SELECAO/espanha.jpeg",
      sugestoes: ["Portugal", "Alemanha", "França"]
    },
    Alemanha: {
      nome: "Camisa Alemanha 2024",
      descricao: "Branca com detalhes em preto, modelo de torcedor.",
      preco: "R$ 149,99",
      imagem: "SELECAO/alemanha.jpeg",
      sugestoes: ["França", "Inglaterra", "Espanha"]
    },
    Inglaterra: {
      nome: "Camisa Inglaterra 2024",
      descricao: "Branca com detalhes em azul, gola polo.",
      preco: "R$ 149,99",
      imagem: "SELECAO/inglaterra.jpeg",
      sugestoes: ["Alemanha", "França", "Portugal"]
    },
    França: {
      nome: "Camisa França 2024",
      descricao: "Azul-marinho com detalhes em dourado.",
      preco: "R$ 149,99",
      imagem: "SELECAO/franca.jpeg",
      sugestoes: ["Brasil", "Portugal", "Inglaterra"]
    },

    // RETRÔ
    MILAN: {
      nome: "Camisa Retrô Milan 1990",
      descricao: "Camisa histórica do Milan em edição retrô.",
      preco: "R$ 159,99",
      imagem: "RETRO/RetroMilan.jpg",
      sugestoes: ["Ajax", "Brasilretro", "HOLANDA"]
    },
    palmeiras2: {
      nome: "Camisa Retrô Palmeiras 1993",
      descricao: "Camisa vintage do Verdão, edição especial.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroPalmeiras.jpg",
      sugestoes: ["SCCP2", "Santos2", "SP2"]
    },
    SCCP2: {
      nome: "Camisa Retrô Corinthians 1990",
      descricao: "Modelo retrô com gola polo e escudo antigo.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroCorinthians.jpeg",
      sugestoes: ["palmeiras2", "SP2", "Santos2"]
    },
    HOLANDA: {
      nome: "Camisa Retrô Holanda 1988",
      descricao: "Icônica camisa laranja da seleção holandesa.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroHolanda.jpg",
      sugestoes: ["MILAN", "Ajax", "Brasilretro"]
    },
    Ajax: {
      nome: "Camisa Retrô Ajax 1995",
      descricao: "Camisa branca com faixa vermelha, time histórico.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroAjax1995.jpg",
      sugestoes: ["MILAN", "HOLANDA", "Brasilretro"]
    },
    Brasilretro: {
      nome: "Camisa Retrô Brasil 2002",
      descricao: "Camisa da conquista do pentacampeonato mundial.",
      preco: "R$ 179,99",
      imagem: "RETRO/retroBrasil2002.jpg",
      sugestoes: ["France", "HOLANDA", "Ajax"]
    },
    SP2: {
      nome: "Camisa Retrô São Paulo 2006",
      descricao: "Modelo comemorativo do tricampeonato mundial.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroSP2006.jpg",
      sugestoes: ["SCCP2", "palmeiras2", "Santos2"]
    },
    Santos2: {
      nome: "Camisa Retrô Santos 1998",
      descricao: "Homenagem aos anos de ouro do clube.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroSantos98.jpg",
      sugestoes: ["palmeiras2", "SCCP2", "SP2"]
    },
    France: {
      nome: "Camisa Retrô França 2014",
      descricao: "Modelo azul da seleção francesa, edição limitada.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroFrance2014.jpeg",
      sugestoes: ["Brasilretro", "HOLANDA", "Ajax"]
    }
};
