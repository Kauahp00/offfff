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
  
    // RETRÔ
    MILAN: {
      nome: "Camisa Retrô Milan",
      descricao: "Camisa histórica do Milan em edição retrô.",
      preco: "R$ 159,99",
      imagem: "RETRO/RetroMilan.jpg",
      sugestoes: ["palmeiras2", "SCCP2", "HOLANDA"]
    },
    palmeiras2: {
      nome: "Camisa Retrô Palmeiras",
      descricao: "Camisa vintage do Verdão, edição especial.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroPalmeiras.jpg",
      sugestoes: ["Milan", "SCCP2", "HOLANDA"]
    },
    SCCP2: {
      nome: "Camisa Retrô Corinthians",
      descricao: "Modelo retrô com gola polo e escudo antigo.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroCorinthians.jpeg",
      sugestoes: ["Milan", "palmeiras2", "HOLANDA"]
    },
    HOLANDA: {
      nome: "Camisa Retrô Holanda",
      descricao: "Icônica camisa laranja da seleção holandesa.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroHolanda.jpg",
      sugestoes: ["Milan", "SCCP2", "palmeiras2"]
    },
  
    // OUTROS
    BOCA: {
      nome: "Camisa Boca Juniors",
      descricao: "Azul e amarela retrô com gola especial.",
      preco: "R$ 159,99",
      imagem: "OUTROS/boca.jpeg",
      sugestoes: ["RIVER", "PENAROL", "MEXICO"]
    },
    RIVER: {
      nome: "Camisa River Plate",
      descricao: "Faixa diagonal vermelha. Tradição sul-americana.",
      preco: "R$ 159,99",
      imagem: "OUTROS/river.jpg",
      sugestoes: ["BOCA", "PENAROL", "MEXICO"]
    },
    PENAROL: {
      nome: "Camisa Peñarol",
      descricao: "Listrada preta e amarela com design clássico.",
      preco: "R$ 159,99",
      imagem: "OUTROS/penarol.jpeg",
      sugestoes: ["BOCA", "RIVER", "MEXICO"]
    },
    MEXICO: {
      nome: "Camisa Seleção México",
      descricao: "Verde com detalhes modernos, edição limitada.",
      preco: "R$ 159,99",
      imagem: "OUTROS/mexico.jpg",
      sugestoes: ["BOCA", "RIVER", "PENAROL"]
    }
  };
  