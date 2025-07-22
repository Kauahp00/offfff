// produtos-data.js

const produtos = {
    // CAMISAS BRASILEIRAS
    palmeiras: {
      nome: "Camisa Palmeiras 2025",
      descricao: "Camisa oficial do Palmeiras com escudo bordado e tecido dryfit.",
      preco: "R$ 119,99",
      imagem: "BRASIL/palmeiras.png",
      sugestoes: ["SP", "SCCP", "SANTOS"]
    },
    SP: {
      nome: "Camisa São Paulo 2025",
      descricao: "Modelo oficial do São Paulo com acabamento premium.",
      preco: "R$ 119,99",
      imagem: "BRASIL/Sp.jpg",
      sugestoes: ["SCCP", "palmeiras", "FLA"]
    },
    SCCP: {
      nome: "Camisa Corinthians 2025",
      descricao: "Design moderno do Timão com escudo emborrachado.",
      preco: "R$ 119,99",
      imagem: "BRASIL/SCCP.jpg",
      sugestoes: ["SP", "VASCO", "palmeiras"]
    },
    SANTOS: {
      nome: "Camisa Santos 2025",
      descricao: "Camisa branca clássica com gola diferenciada.",
      preco: "R$ 119,99",
      imagem: "BRASIL/santos.jpeg",
      sugestoes: ["palmeiras", "SP", "FLA"]
    },
    FLA: {
      nome: "Camisa Flamengo 2025",
      descricao: "Flamengo rubro-negro com tecido respirável.",
      preco: "R$ 119,99",
      imagem: "BRASIL/flamengo.jpeg",
      sugestoes: ["VASCO", "SANTOS", "SP"]
    },
    VASCO: {
      nome: "Camisa Vasco 2025",
      descricao: "Modelo oficial do Vasco com faixa diagonal clássica.",
      preco: "R$ 119,99",
      imagem: "BRASIL/vasco.jpg",
      sugestoes: ["FLA", "SCCP", "SP"]
    },
    CUIABA: {
      nome: "Camisa Cuiabá 2025",
      descricao: "Camisa verde e amarela do Dourado, edição especial.",
      preco: "R$ 119,99",
      imagem: "BRASIL/cuiaba.jpg",
      sugestoes: ["FORTALEZA", "BAHIA", "INTER"]
    },
    FORTALEZA: {
      nome: "Camisa Fortaleza 2025",
      descricao: "Modelo tricolor do Leão do Pici com tecnologia dryfit.",
      preco: "R$ 119,99",
      imagem: "BRASIL/fortaleza.jpg",
      sugestoes: ["CUIABA", "BAHIA", "CRUZEIRO"]
    },
    BAHIA: {
      nome: "Camisa Bahia 2025",
      descricao: "Tricolor baiano com detalhes em azul, branco e vermelho.",
      preco: "R$ 119,99",
      imagem: "BRASIL/bahia.jpg",
      sugestoes: ["FORTALEZA", "GREMIO", "INTER"]
    },
    INTER: {
      nome: "Camisa Internacional 2025",
      descricao: "Vermelha com listras verticais finas em branco.",
      preco: "R$ 119,99",
      imagem: "BRASIL/internacional.jpg",
      sugestoes: ["GREMIO", "ATLETICO-MG", "CRUZEIRO"]
    },
    GREMI: {
      nome: "Camisa Grêmio 2025",
      descricao: "Azul, preta e branca com detalhes em listras horizontais.",
      preco: "R$ 119,99",
      imagem: "BRASIL/gremio.jpg",
      sugestoes: ["INTER", "FLUMINENSE", "ATLETICO-MG"]
    },
    CRUZEIRO: {
      nome: "Camisa Cruzeiro 2025",
      descricao: "Azul celeste com detalhes em branco, modelo premium.",
      preco: "R$ 119,99",
      imagem: "BRASIL/cruzeiro.jpg",
      sugestoes: ["ATLETICO-MG", "INTER", "FORTALEZA"]
    },
    "ATLETICO-MG": {
      nome: "Camisa Atlético Mineiro 2025",
      descricao: "Listrada em preto e branco com escudo bordado.",
      preco: "R$ 119,99",
      imagem: "BRASIL/atletico-mg.jpg",
      sugestoes: ["CRUZEIRO", "INTER", "FLUMINENSE"]
    },
    FLUMINENSE: {
      nome: "Camisa Fluminense 2025",
      descricao: "Tricolor grená, verde e branca com gola polo.",
      preco: "R$ 119,99",
      imagem: "BRASIL/fluminense.jpg",
      sugestoes: ["FLA", "BOTAFOGO", "GREMI"]
    },
    BOTAFOGO: {
      nome: "Camisa Botafogo 2025",
      descricao: "Listrada em preto e branco com detalhes em dourado.",
      preco: "R$ 119,99",
      imagem: "BRASIL/botafogo.jpg",
      sugestoes: ["FLUMINENSE", "FLA", "VASCO"]
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
      nome: "Camisa Real Madrid 2025",
      descricao: "Modelo branco elegante com detalhes dourados.",
      preco: "R$ 119,99",
      imagem: "EUROPA/realMadrid.jpg",
      sugestoes: ["BARCELONA", "CHELSEA", "BAYERN"]
    },
    CITY: {
      nome: "Camisa Manchester City 2025",
      descricao: "Celeste com detalhes em branco. Alta performance.",
      preco: "R$ 119,99",
      imagem: "EUROPA/city.jpeg",
      sugestoes: ["CHELSEA", "REAL", "BARCELONA"]
    },
    BAYERN: {
      nome: "Camisa Bayern 2025",
      descricao: "Vermelha com patrocínios e escudo bordado.",
      preco: "R$ 119,99",
      imagem: "EUROPA/bayern.jpeg",
      sugestoes: ["REAL", "CITY", "BARCELONA"]
    },
    CHELSEA: {
      nome: "Camisa Chelsea 2025",
      descricao: "Modelo azul intenso da Premier League.",
      preco: "R$ 119,99",
      imagem: "EUROPA/chelsea.jpg",
      sugestoes: ["CITY", "REAL", "BARCELONA"]
    },
    PSG: {
      nome: "Camisa PSG 2025",
      descricao: "Azul marinho com detalhes em vermelho e branco.",
      preco: "R$ 119,99",
      imagem: "EUROPA/psg.jpg",
      sugestoes: ["MILAN", "INTER-MILAN", "BARCELONA"]
    },
    MILAN: {
      nome: "Camisa Milan 2025",
      descricao: "Listrada em vermelho e preto com detalhes em dourado.",
      preco: "R$ 119,99",
      imagem: "EUROPA/milan.jpg",
      sugestoes: ["INTER-MILAN", "MAN-UTD", "PSG"]
    },
    "INTER-MILAN": {
      nome: "Camisa Inter de Milão 2025",
      descricao: "Listrada em azul e preto com tecnologia dryfit.",
      preco: "R$ 119,99",
      imagem: "EUROPA/inter-milao.jpg",
      sugestoes: ["MILAN", "MAN-UTD", "PSG"]
    },
    "MAN-UTD": {
      nome: "Camisa Manchester United 2025",
      descricao: "Vermelha com detalhes em branco e dourado.",
      preco: "R$ 119,99",
      imagem: "EUROPA/manchester-united.jpg",
      sugestoes: ["CITY", "CHELSEA", "ARSENAL"]
    },
    ARSENAL: {
      nome: "Camisa Arsenal 2025",
      descricao: "Vermelha com mangas brancas e detalhes em dourado.",
      preco: "R$ 119,99",
      imagem: "EUROPA/arsenal.jpg",
      sugestoes: ["MAN-UTD", "CHELSEA", "CITY"]
    },

    // RETRÔ
    "MILAN-RETRO": {
      nome: "Camisa Retrô Milan",
      descricao: "Camisa histórica do Milan em edição retrô.",
      preco: "R$ 159,99",
      imagem: "RETRO/RetroMilan.jpg",
      sugestoes: ["PALMEIRAS-RETRO", "CORINTHIANS-RETRO", "HOLANDA-RETRO"]
    },
    "PALMEIRAS-RETRO": {
      nome: "Camisa Retrô Palmeiras",
      descricao: "Camisa vintage do Verdão, edição especial.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroPalmeiras.jpg",
      sugestoes: ["MILAN-RETRO", "CORINTHIANS-RETRO", "HOLANDA-RETRO"]
    },
    "CORINTHIANS-RETRO": {
      nome: "Camisa Retrô Corinthians",
      descricao: "Modelo retrô com gola polo e escudo antigo.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroCorinthians.jpeg",
      sugestoes: ["MILAN-RETRO", "PALMEIRAS-RETRO", "HOLANDA-RETRO"]
    },
    "HOLANDA-RETRO": {
      nome: "Camisa Retrô Holanda",
      descricao: "Icônica camisa laranja da seleção holandesa.",
      preco: "R$ 159,99",
      imagem: "RETRO/retroHolanda.jpg",
      sugestoes: ["MILAN-RETRO", "CORINTHIANS-RETRO", "PALMEIRAS-RETRO"]
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
