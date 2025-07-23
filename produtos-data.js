const produtos = {
  // CAMISAS BRASILEIRAS (15)
  palmeiras: {
    nome: "Camisa Palmeiras 2025",
    descricao: "Camisa oficial do Palmeiras, modelo atual da temporada.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289138/palmeiras_pfjaae.jpg",
    sugestoes: ["SP", "SCCP", "SANTOS"]
  },
  SP: {
    nome: "Camisa São Paulo 2025",
    descricao: "Camisa oficial do São Paulo, design moderno e tradicional.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289138/Sp_eclzoo.jpg",
    sugestoes: ["SCCP", "palmeiras", "FLA"]
  },
  SCCP: {
    nome: "Camisa Corinthians 2025",
    descricao: "Camisa oficial do Corinthians, mantendo as cores tradicionais.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289137/SCCP_arwpqh.jpg",
    sugestoes: ["SP", "VASCO", "palmeiras"]
  },
  SANTOS: {
    nome: "Camisa Santos 2025",
    descricao: "Camisa oficial do Santos, com o clássico design branco.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289136/santos_pnh2to.jpg",
    sugestoes: ["palmeiras", "SP", "FLA"]
  },
  FLA: {
    nome: "Camisa Flamengo 2025",
    descricao: "Camisa oficial do Flamengo, com as cores rubro-negras.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289134/flamengo_cbytim.jpg",
    sugestoes: ["VASCO", "SANTOS", "SP"]
  },
  VASCO: {
    nome: "Camisa Vasco 2025",
    descricao: "Camisa oficial do Vasco, com a tradicional faixa diagonal.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289135/vasco_fyleso.jpg",
    sugestoes: ["FLA", "SCCP", "SP"]
  },
  FLUMINENSE: {
    nome: "Camisa Fluminense 2025",
    descricao: "Camisa oficial do Fluminense, tradicional e elegante.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289135/fluminense_ah9w54.jpg",
    sugestoes: ["VASCO", "FLA", "SANTOS"]
  },
  BOTAGOFO: {
    nome: "Camisa Botafogo 2025",
    descricao: "Camisa oficial do Botafogo, preto e branco clássicos.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289133/botafogo_n8hruw.jpg",
    sugestoes: ["FLUMINENSE", "VASCO", "CRUZEIRO"]
  },
  CRUZEIRO: {
    nome: "Camisa Cruzeiro 2025",
    descricao: "Camisa oficial do Cruzeiro, azul e branco tradicionais.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289133/cruzeiro_ytemjl.jpg",
    sugestoes: ["BOTAGOFO", "GREMIO", "ATLETICO-MG"]
  },
  "ATLETICO-MG": {
    nome: "Camisa Atlético Mineiro 2025",
    descricao: "Camisa oficial do Atlético Mineiro, listras pretas e brancas.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289132/atletico_MG_qmncpn.jpg",
    sugestoes: ["CRUZEIRO", "GREMIO", "INTERNACIONAL"]
  },
  INTERNACIONAL: {
    nome: "Camisa Internacional 2025",
    descricao: "Camisa oficial do Internacional, vermelha vibrante.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289131/inter_zchcqx.jpg",
    sugestoes: ["GREMIO", "ATLETICO-MG", "CRUZEIRO"]
  },
  GREMIO: {
    nome: "Camisa Grêmio 2025",
    descricao: "Camisa oficial do Grêmio, azul, preto e branco.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289130/gremio_ehjpbm.jpg",
    sugestoes: ["INTERNACIONAL", "CRUZEIRO", "ATLETICO-MG"]
  },
  BAHIA: {
    nome: "Camisa Bahia 2025",
    descricao: "Camisa oficial do Bahia, cores azul, vermelho e branco.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289128/bahia_wjggyh.jpg",
    sugestoes: ["FORTALEZA", "CUIABA", "FLUMINENSE"]
  },
  FORTALEZA: {
    nome: "Camisa Fortaleza 2025",
    descricao: "Camisa oficial do Fortaleza, design moderno e cores fortes.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289128/fortaleza_ntqkbw.jpg",
    sugestoes: ["BAHIA", "CUIABA", "VASCO"]
  },
  CUIABA: {
    nome: "Camisa Cuiabá 2025",
    descricao: "Camisa oficial do Cuiabá, cores vivas e design atual.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753289127/cuiaba_ui9voh.png",
    sugestoes: ["FORTALEZA", "BAHIA", "VASCO"]
  },

  // EUROPEUS (10)
  BARCELONA: {
    nome: "Camisa Barcelona 23/24",
    descricao: "Camisa oficial do Barcelona, temporada 2023/2025.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288739/barcelona_gmhawc.jpg",
    sugestoes: ["REAL", "CITY", "BAYERN"]
  },
  REAL: {
    nome: "Camisa Real Madrid 2025",
    descricao: "Camisa oficial do Real Madrid, design clássico e elegante.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288739/realMadrid_nvpfhr.jpg",
    sugestoes: ["BARCELONA", "CHELSEA", "BAYERN"]
  },
  CITY: {
    nome: "Camisa Manchester City 2025",
    descricao: "Camisa oficial do Manchester City, modelo atual.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288737/city_tjmcgc.jpg",
    sugestoes: ["CHELSEA", "REAL", "BARCELONA"]
  },
  BAYERN: {
    nome: "Camisa Bayern 2025",
    descricao: "Camisa oficial do Bayern de Munique, cores tradicionais.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288735/bayern_lghzsh.jpg",
    sugestoes: ["REAL", "CITY", "BARCELONA"]
  },
  CHELSEA: {
    nome: "Camisa Chelsea 2025",
    descricao: "Camisa oficial do Chelsea, design azul característico.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288736/chelsea_wrx9tc.jpg",
    sugestoes: ["CITY", "REAL", "BARCELONA"]
  },
  PSG: {
    nome: "Camisa PSG 2025",
    descricao: "Camisa oficial do PSG, modelo atual.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288738/psg_cesm65.jpg",
    sugestoes: ["CHELSEA", "BAYERN", "REAL"]
  },
  UNITED: {
    nome: "Camisa Manchester United 2025",
    descricao: "Camisa oficial do Manchester United, tradicional.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288735/united_pffodu.jpg",
    sugestoes: ["ARSENAL", "BAYERN", "CHELSEA"]
  },
  ARSENAL: {
    nome: "Camisa Arsenal 2025",
    descricao: "Camisa oficial do Arsenal, vermelho vivo.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288735/arsenal_lujwbk.jpg",
    sugestoes: ["UNITED", "CHELSEA", "BAYERN"]
  },
  INTER: {
    nome: "Camisa Inter de Milão 2025",
    descricao: "Camisa oficial do Inter de Milão, design clássico.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288734/inter_de_milao_j51gao.jpg",
    sugestoes: ["MILAN", "BAYERN", "CHELSEA"]
  },
  MILAN: {
    nome: "Camisa Milan 2025",
    descricao: "Camisa oficial do Milan, tradicional vermelho e preto.",
    preco: "R$ 129,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288732/milan_rdakqp.jpg",
    sugestoes: ["INTER", "BAYERN", "REAL"]
  },

  // SELEÇÃO (6)
  Brasil: {
    nome: "Camisa Brasil 2025",
    descricao: "Camisa oficial da Seleção Brasileira, amarela canarinho.",
    preco: "R$ 139,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288554/brasil.jpeg",
    sugestoes: ["Portugal", "Espanha", "França"]
  },
  Portugal: {
    nome: "Camisa Portugal 2025",
    descricao: "Camisa oficial da Seleção Portuguesa, vermelha e verde.",
    preco: "R$ 139,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288554/Portugal_arfeiw.jpg",
    sugestoes: ["Brasil", "Espanha", "França"]
  },
  Espanha: {
    nome: "Camisa Espanha 2025",
    descricao: "Camisa oficial da Seleção Espanhola, vermelha e amarela.",
    preco: "R$ 139,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288554/espanha_z5aoge.jpg",
    sugestoes: ["Portugal", "Alemanha", "França"]
  },
  Alemanha: {
    nome: "Camisa Alemanha 2025",
    descricao: "Camisa oficial da Seleção Alemã, branca e preta.",
    preco: "R$ 139,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288556/alemanha_ulriev.jpg",
    sugestoes: ["França", "Inglaterra", "Espanha"]
  },
  Inglaterra: {
    nome: "Camisa Inglaterra 2025",
    descricao: "Camisa oficial da Seleção Inglesa, branca e azul.",
    preco: "R$ 139,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288555/inglaterra_zkb3jp.jpg",
    sugestoes: ["Alemanha", "França", "Portugal"]
  },
  França: {
    nome: "Camisa França 2025",
    descricao: "Camisa oficial da Seleção Francesa, azul-marinho.",
    preco: "R$ 139,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753288554/franca_njda6o.jpg",
    sugestoes: ["Brasil", "Portugal", "Inglaterra"]
  },

  // RETRÔ (9)
  MILAN: {
    nome: "Camisa Retrô Milan 1990",
    descricao: "Camisa clássica do Milan, edição retrô dos anos 90.",
    preco: "R$ 159,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753286384/RetroMilan_h66bow.jpg",
    sugestoes: ["Ajax", "Brasilretro", "HOLANDA"]
  },
  palmeiras2: {
    nome: "Camisa Retrô Palmeiras 1993",
    descricao: "Camisa histórica do Palmeiras, modelo anos 90.",
    preco: "R$ 159,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753286384/retroPalmeiras_l9mpku.jpg",
    sugestoes: ["SCCP2", "Santos2", "SP2"]
  },
  SCCP2: {
    nome: "Camisa Retrô Corinthians 1990",
    descricao: "Camisa vintage do Corinthians, estilo anos 90.",
    preco: "R$ 159,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753286382/retroCorinthians_nyoqcp.jpg",
    sugestoes: ["palmeiras2", "SP2", "Santos2"]
  },
  HOLANDA: {
    nome: "Camisa Retrô Holanda 1988",
    descricao: "Camisa icônica da Seleção Holandesa, edição retrô.",
    preco: "R$ 159,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753286381/retroHolanda_oua9iq.jpg",
    sugestoes: ["MILAN", "Ajax", "Brasilretro"]
  },
  Ajax: {
    nome: "Camisa Retrô Ajax 1995",
    descricao: "Camisa histórica do Ajax, modelo dos anos 90.",
    preco: "R$ 159,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753286380/retroAjax1995_h9ecap.jpg",
    sugestoes: ["MILAN", "HOLANDA", "Brasilretro"]
  },
  Brasilretro: {
    nome: "Camisa Retrô Brasil 2002",
    descricao: "Camisa da Seleção Brasileira, pentacampeã mundial.",
    preco: "R$ 159,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753286382/retroBrasil2002_igunk3.jpg",
    sugestoes: ["France", "HOLANDA", "Ajax"]
  },
  SP2: {
    nome: "Camisa Retrô São Paulo 2006",
    descricao: "Camisa comemorativa do São Paulo, tricampeão mundial.",
    preco: "R$ 159,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753286382/retroSP2006_cxwyb2.jpg",
    sugestoes: ["SCCP2", "palmeiras2", "Santos2"]
  },
  Santos2: {
    nome: "Camisa Retrô Santos 1998",
    descricao: "Camisa vintage do Santos, homenagem aos anos 90.",
    preco: "R$ 159,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753286380/retroSantos98_lobpzl.jpg",
    sugestoes: ["palmeiras2", "SCCP2", "SP2"]
  },
  France: {
    nome: "Camisa Retrô França 2014",
    descricao: "Camisa retrô da Seleção Francesa, modelo 2014.",
    preco: "R$ 159,99",
    imagem: "https://res.cloudinary.com/dguyvksoz/image/upload/v1753286383/retroFrance2014_qq3zwh.jpg",
    sugestoes: ["Brasilretro", "HOLANDA", "Ajax"]
  }
};
