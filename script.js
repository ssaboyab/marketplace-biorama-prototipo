/**
 * ARQUIVO: script.js
 * FUNÇÃO: Define os dados dos Sistemas Agroflorestais (SAFs), inicializa o mapa
 * e controla a Calculadora de Área.
 */

// ===================================================================
// 1. DADOS DOS SAFs (Sistemas Agroflorestais)
//    - ESTE BLOCO FOI GERADO AUTOMATICAMENTE A PARTIR DA SUA TABELA.
// ===================================================================

const safLocations = [
    // ----------------------------------------------------
    // COMUNIDADE CORDUARIA (11 SAFs)
    // ----------------------------------------------------
    {
        name: "SAF Corduaria - Guardião Dadu",
        lat: -12.798456, // Latitude
        lng: -38.304533, // Longitude
        area: 200, // Área em metros quadrados (m²)
        cultura: "Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola",
        ods: "ODS 12 - Consumo e Produção Responsáveis",
        familia: "Comunidade Corduaria",
        coordenador: "Dadu",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Corduaria - Dadu</h3>' +
                 '<p><strong>Área:</strong> 200 m²</p>' +
                 '<p><strong>Culturas:</strong> Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola</p>' +
                 '<p><strong>Comunidade:</strong> Corduaria</p>' +
                 '<p><strong>Guardião:</strong> Dadu</p>' +
                 '</div>'
    },
    {
        name: "SAF Corduaria - Guardião Bispo",
        lat: -12.799945,
        lng: -38.3074372,
        area: 300,
        cultura: "Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola",
        ods: "ODS 12 - Consumo e Produção Responsáveis",
        familia: "Comunidade Corduaria",
        coordenador: "Bispo",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Corduaria - Bispo</h3>' +
                 '<p><strong>Área:</strong> 300 m²</p>' +
                 '<p><strong>Culturas:</strong> Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola</p>' +
                 '<p><strong>Comunidade:</strong> Corduaria</p>' +
                 '<p><strong>Guardião:</strong> Bispo</p>' +
                 '</div>'
    },
    {
        name: "SAF Corduaria - Guardião Jamile",
        lat: -12.8089731,
        lng: -38.3133169,
        area: 300,
        cultura: "Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola",
        ods: "ODS 12 - Consumo e Produção Responsáveis",
        familia: "Comunidade Corduaria",
        coordenador: "Jamile",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Corduaria - Jamile</h3>' +
                 '<p><strong>Área:</strong> 300 m²</p>' +
                 '<p><strong>Culturas:</strong> Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola</p>' +
                 '<p><strong>Comunidade:</strong> Corduaria</p>' +
                 '<p><strong>Guardião:</strong> Jamile</p>' +
                 '</div>'
    },
    {
        name: "SAF Corduaria - Guardião Jace",
        lat: -12.8120054,
        lng: -38.311684,
        area: 300,
        cultura: "Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola",
        ods: "ODS 12 - Consumo e Produção Responsáveis",
        familia: "Comunidade Corduaria",
        coordenador: "Jace",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Corduaria - Jace</h3>' +
                 '<p><strong>Área:</strong> 300 m²</p>' +
                 '<p><strong>Culturas:</strong> Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola</p>' +
                 '<p><strong>Comunidade:</strong> Corduaria</p>' +
                 '<p><strong>Guardião:</strong> Jace</p>' +
                 '</div>'
    },
    {
        name: "SAF Corduaria - Guardião Angélica",
        lat: -12.8116841,
        lng: -38.3147002,
        area: 300,
        cultura: "Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola",
        ods: "ODS 12 - Consumo e Produção Responsáveis",
        familia: "Comunidade Corduaria",
        coordenador: "Angélica",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Corduaria - Angélica</h3>' +
                 '<p><strong>Área:</strong> 300 m²</p>' +
                 '<p><strong>Culturas:</strong> Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola</p>' +
                 '<p><strong>Comunidade:</strong> Corduaria</p>' +
                 '<p><strong>Guardião:</strong> Angélica</p>' +
                 '</div>'
    },
    {
        name: "SAF Corduaria - Guardião Manoel",
        lat: -12.8109944,
        lng: -38.3147016,
        area: 600,
        cultura: "Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola",
        ods: "ODS 12 - Consumo e Produção Responsáveis",
        familia: "Comunidade Corduaria",
        coordenador: "Manoel",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Corduaria - Manoel</h3>' +
                 '<p><strong>Área:</strong> 600 m²</p>' +
                 '<p><strong>Culturas:</strong> Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola</p>' +
                 '<p><strong>Comunidade:</strong> Corduaria</p>' +
                 '<p><strong>Guardião:</strong> Manoel</p>' +
                 '</div>'
    },
    {
        name: "SAF Corduaria - Guardião Constância",
        lat: -12.8226552,
        lng: -38.3237224,
        area: 400,
        cultura: "Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola",
        ods: "ODS 12 - Consumo e Produção Responsáveis",
        familia: "Comunidade Corduaria",
        coordenador: "Constância",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Corduaria - Constância</h3>' +
                 '<p><strong>Área:</strong> 400 m²</p>' +
                 '<p><strong>Culturas:</strong> Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola</p>' +
                 '<p><strong>Comunidade:</strong> Corduaria</p>' +
                 '<p><strong>Guardião:</strong> Constância</p>' +
                 '</div>'
    },
    {
        name: "SAF Corduaria - Guardião Barbara",
        lat: -12.8108174,
        lng: -38.3134437,
        area: 400,
        cultura: "Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola",
        ods: "ODS 12 - Consumo e Produção Responsáveis",
        familia: "Comunidade Corduaria",
        coordenador: "Barbara",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Corduaria - Barbara</h3>' +
                 '<p><strong>Área:</strong> 400 m²</p>' +
                 '<p><strong>Culturas:</strong> Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola</p>' +
                 '<p><strong>Comunidade:</strong> Corduaria</p>' +
                 '<p><strong>Guardião:</strong> Barbara</p>' +
                 '</div>'
    },
    {
        name: "SAF Corduaria - Guardião Deny",
        lat: -12.8116148,
        lng: -38.3182000,
        area: 300,
        cultura: "Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola",
        ods: "ODS 12 - Consumo e Produção Responsáveis",
        familia: "Comunidade Corduaria",
        coordenador: "Deny",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Corduaria - Deny</h3>' +
                 '<p><strong>Área:</strong> 300 m²</p>' +
                 '<p><strong>Culturas:</strong> Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola</p>' +
                 '<p><strong>Comunidade:</strong> Corduaria</p>' +
                 '<p><strong>Guardião:</strong> Deny</p>' +
                 '</div>'
    },
    {
        name: "SAF Corduaria - Guardião Livia",
        lat: -12.8247002,
        lng: -38.3143078,
        area: 300,
        cultura: "Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola",
        ods: "ODS 12 - Consumo e Produção Responsáveis",
        familia: "Comunidade Corduaria",
        coordenador: "Livia",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Corduaria - Livia</h3>' +
                 '<p><strong>Área:</strong> 300 m²</p>' +
                 '<p><strong>Culturas:</strong> Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola</p>' +
                 '<p><strong>Comunidade:</strong> Corduaria</p>' +
                 '<p><strong>Guardião:</strong> Livia</p>' +
                 '</div>'
    },
    {
        name: "SAF Corduaria - Guardião Juse",
        lat: -12.8021445,
        lng: -38.3111278,
        area: 300,
        cultura: "Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola",
        ods: "ODS 12 - Consumo e Produção Responsáveis",
        familia: "Comunidade Corduaria",
        coordenador: "Juse",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Corduaria - Juse</h3>' +
                 '<p><strong>Área:</strong> 300 m²</p>' +
                 '<p><strong>Culturas:</strong> Goiaba, Caju, Manga, Acerola, Pitanga, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola</p>' +
                 '<p><strong>Comunidade:</strong> Corduaria</p>' +
                 '<p><strong>Guardião:</strong> Juse</p>' +
                 '</div>'
    },

    // ----------------------------------------------------
    // COMUNIDADE CATUZINHO (6 SAFs)
    // ----------------------------------------------------
    {
        name: "SAF Catuzinho - Guardião Simone",
        lat: -12.0477203,
        lng: -38.4333150,
        area: 400,
        cultura: "Mamona, Cajueiro, Graviola, Goiaba, Laranja, Bananeira e Feijão de Porco", // Mamona em primeiro
        ods: "ODS 15 - Vida Terrestre (Biodiversidade)",
        familia: "Comunidade Catuzinho",
        coordenador: "Simone",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Catuzinho - Simone</h3>' +
                 '<p><strong>Área:</strong> 400 m²</p>' +
                 '<p><strong>Culturas:</strong> Mamona, Cajueiro, Graviola, Goiaba, Laranja, Bananeira e Feijão de Porco</p>' +
                 '<p><strong>Comunidade:</strong> Catuzinho</p>' +
                 '<p><strong>Guardião:</strong> Simone</p>' +
                 '</div>'
    },
    {
        name: "SAF Catuzinho - Guardião Cosme",
        lat: -12.14462702,
        lng: -38.4324518,
        area: 400,
        cultura: "Mamona, Cajueiro, Mangueira, Graviola, Bananeira, Eucalipto, Maracujá, Feijão de Porco, Acerola, Abacaxi e Goiaba", // Mamona em primeiro
        ods: "ODS 15 - Vida Terrestre (Biodiversidade)",
        familia: "Comunidade Catuzinho",
        coordenador: "Cosme",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Catuzinho - Cosme</h3>' +
                 '<p><strong>Área:</strong> 400 m²</p>' +
                 '<p><strong>Culturas:</strong> Mamona, Cajueiro, Mangueira, Graviola, Bananeira, Eucalipto, Maracujá, Feijão de Porco, Acerola, Abacaxi e Goiaba</p>' +
                 '<p><strong>Comunidade:</strong> Catuzinho</p>' +
                 '<p><strong>Guardião:</strong> Cosme</p>' +
                 '</div>'
    },
    {
        name: "SAF Catuzinho - Guardião Damião",
        lat: -12.0451150,
        lng: -38.4325958,
        area: 500,
        cultura: "Mamona, Limão, Graviola, Goiaba, Laranja, Bananeira e Feijão de Porco", // Mamona em primeiro
        ods: "ODS 15 - Vida Terrestre (Biodiversidade)",
        familia: "Comunidade Catuzinho",
        coordenador: "Damião",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Catuzinho - Damião</h3>' +
                 '<p><strong>Área:</strong> 500 m²</p>' +
                 '<p><strong>Culturas:</strong> Mamona, Limão, Graviola, Goiaba, Laranja, Bananeira e Feijão de Porco</p>' +
                 '<p><strong>Comunidade:</strong> Catuzinho</p>' +
                 '<p><strong>Guardião:</strong> Damião</p>' +
                 '</div>'
    },
    {
        name: "SAF Catuzinho - Guardião Welves",
        lat: -12.0453700,
        lng: -38.4267767,
        area: 400,
        cultura: "Mamona, Limão, Graviola, Goiaba, Laranja, Bananeira e Feijão de Porco", // Mamona em primeiro
        ods: "ODS 15 - Vida Terrestre (Biodiversidade)",
        familia: "Comunidade Catuzinho",
        coordenador: "Welves",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Catuzinho - Welves</h3>' +
                 '<p><strong>Área:</strong> 400 m²</p>' +
                 '<p><strong>Culturas:</strong> Mamona, Limão, Graviola, Goiaba, Laranja, Bananeira e Feijão de Porco</p>' +
                 '<p><strong>Comunidade:</strong> Catuzinho</p>' +
                 '<p><strong>Guardião:</strong> Welves</p>' +
                 '</div>'
    },
    {
        name: "SAF Catuzinho - Guardião Marilene",
        lat: -12.0459950,
        lng: -38.4316231,
        area: 400,
        cultura: "Mamona, Manga, Sapota, Feijão, Laranja e Coqueiro", // Mamona em primeiro
        ods: "ODS 15 - Vida Terrestre (Biodiversidade)",
        familia: "Comunidade Catuzinho",
        coordenador: "Marilene",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Catuzinho - Marilene</h3>' +
                 '<p><strong>Área:</strong> 400 m²</p>' +
                 '<p><strong>Culturas:</strong> Mamona, Manga, Sapota, Feijão, Laranja e Coqueiro</p>' +
                 '<p><strong>Comunidade:</strong> Catuzinho</p>' +
                 '<p><strong>Guardião:</strong> Marilene</p>' +
                 '</div>'
    },
    {
        name: "SAF Catuzinho - Guardião Naihro",
        lat: -12.14777107,
        lng: -38.4340731,
        area: 300,
        cultura: "Mamona, Manga, Sapota, Feijão, Laranja e Coqueiro", // Mamona em primeiro
        ods: "ODS 15 - Vida Terrestre (Biodiversidade)",
        familia: "Comunidade Catuzinho",
        coordenador: "Naihro",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Catuzinho - Naihro</h3>' +
                 '<p><strong>Área:</strong> 300 m²</p>' +
                 '<p><strong>Culturas:</strong> Mamona, Manga, Sapota, Feijão, Laranja e Coqueiro</p>' +
                 '<p><strong>Comunidade:</strong> Catuzinho</p>' +
                 '<p><strong>Guardião:</strong> Naihro</p>' +
                 '</div>'
    },

    // ----------------------------------------------------
    // COMUNIDADE TOP VERDE (2 SAFs)
    // ----------------------------------------------------
    {
        name: "SAF Top Verde - Guardiã Ana Cristina",
        lat: -12.32316562,
        lng: -38.4340731,
        area: 300,
        cultura: "Mamona, Bananeira, Goiaba, Manga, Ciriguela, Caju, Abacate, Atemóia, Coqueiro, Urucum, Feijão Andu e Feijão de Porco", // Mamona em primeiro
        ods: "ODS 8 - Trabalho Decente e Crescimento Econômico",
        familia: "Comunidade Top Verde",
        coordenador: "Ana Cristina",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Top Verde - Ana Cristina</h3>' +
                 '<p><strong>Área:</strong> 300 m²</p>' +
                 '<p><strong>Culturas:</strong> Mamona, Bananeira, Goiaba, Manga, Ciriguela, Caju, Abacate, Atemóia, Coqueiro, Urucum, Feijão Andu e Feijão de Porco</p>' +
                 '<p><strong>Comunidade:</strong> Top Verde</p>' +
                 '<p><strong>Guardiã:</strong> Ana Cristina</p>' +
                 '</div>'
    },
    {
        name: "SAF Top Verde - Guardião Jose Miranda",
        lat: -12.3724002,
        lng: -38.0947578,
        area: 400,
        cultura: "Mamona, Laranja, Goiaba, Acerola, Abacate, Feijão de Porco e Margaridão", // Mamona em primeiro
        ods: "ODS 8 - Trabalho Decente e Crescimento Econômico",
        familia: "Comunidade Top Verde",
        coordenador: "Jose Miranda",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Top Verde - Jose Miranda</h3>' +
                 '<p><strong>Área:</strong> 400 m²</p>' +
                 '<p><strong>Culturas:</strong> Mamona, Laranja, Goiaba, Acerola, Abacate, Feijão de Porco e Margaridão</p>' +
                 '<p><strong>Comunidade:</strong> Top Verde</p>' +
                 '<p><strong>Guardião:</strong> Jose Miranda</p>' +
                 '</div>'
    },
    
    // ----------------------------------------------------
    // COMUNIDADE MUCAMBO (1 SAF)
    // ----------------------------------------------------
    {
        name: "SAF Mucambo - Guardião Samuel",
        lat: -11.6107757,
        lng: -37.8510404,
        area: 300,
        cultura: "Mamona, Manga, Abacate, Ciriguela, Caju, Poncã, Goiaba, Bananeira e Feijão de Porco", // Mamona em primeiro
        ods: "ODS 1 - Erradicação da Pobreza",
        familia: "Comunidade Mucambo",
        coordenador: "Samuel",
        content: '<div class="info-window-saf">' +
                 '<h3 style="color:#006400; margin:0 0 5px 0;">SAF Mucambo - Samuel</h3>' +
                 '<p><strong>Área:</strong> 300 m²</p>' +
                 '<p><strong>Culturas:</strong> Mamona, Manga, Abacate, Ciriguela, Caju, Poncã, Goiaba, Bananeira e Feijão de Porco</p>' +
                 '<p><strong>Comunidade:</strong> Mucambo</p>' +
                 '<p><strong>Guardião:</strong> Samuel</p>' +
                 '</div>'
    },
];

// ===================================================================
// 2. FUNÇÃO PRINCIPAL DO MAPA (Não altere aqui!)
// ===================================================================

function initMap() {
    // 1. Calcula o centro médio para centralizar o mapa
    let totalLat = 0;
    let totalLng = 0;
    safLocations.forEach(loc => {
        totalLat += loc.lat;
        totalLng += loc.lng;
    });

    // Calcula a média das coordenadas para centralizar o mapa na área de atuação
    const centerLat = totalLat / safLocations.length;
    const centerLng = totalLng / safLocations.length;

    // 2. Configura e cria o mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        // Centraliza o mapa na média das localizações
        center: { lat: centerLat, lng: centerLng }, 
        zoom: 9, // Nível de zoom apropriado para a região
        mapTypeId: 'terrain' // Tipo de mapa que destaca relevo/vegetação
    });

    // 3. Cria a janela de informações (balão)
    const infoWindow = new google.maps.InfoWindow();

    // 4. Cria os marcadores (pins) no mapa
    safLocations.forEach(loc => {
        const marker = new google.maps.Marker({
            position: { lat: loc.lat, lng: loc.lng },
            map: map,
            title: loc.name,
            icon: {
                // Pin personalizado para dar um toque agro
                url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', 
                scaledSize: new google.maps.Size(40, 40)
            }
        });

        // Evento que mostra as informações quando o pin é clicado
        marker.addListener("click", () => {
            infoWindow.setContent(loc.content);
            infoWindow.open(map, marker);
        });
    });
}


// ===================================================================
// 3. FUNÇÃO DA CALCULADORA (Não altere aqui!)
// ===================================================================

function calcularArea() {
    // Pega o valor em litros que o usuário digitou
    const litrosInput = document.getElementById('litros');
    let litros = parseFloat(litrosInput.value);

    // Validação básica
    if (isNaN(litros) || litros <= 0) {
        litros = 1000;
        litrosInput.value = 1000;
    }
    
    // FÓRMULA SIMPLIFICADA (Você pode refinar esta lógica depois):
    // Usamos uma conversão fictícia: 1 litro de óleo precisa de 5 m² de área de SAF (exemplo).
    const AREA_POR_LITRO_M2 = 5; 
    const areaNecessaria = litros * AREA_POR_LITRO_M2;

    // CÁLCULO DE IMPACTO AMBIENTAL (Simulação)
    // Sequestro de CO2: 1m² de SAF = 0.02 toneladas de CO2 / ano (exemplo)
    const CO2_POR_M2_TON = 0.02;
    const CARBONO_SEQUESTRADO = areaNecessaria * CO2_POR_M2_TON;

    // Conversão do impacto (1 carro médio = 2.4 toneladas de CO2 / ano, exemplo)
    const CARRO_POR_ANO_CO2 = 2.4;
    const carrosEquivalentes = Math.round((CARBONO_SEQUESTRADO / CARRO_POR_ANO_CO2) * 12); // Multiplicamos por 12 para dar um número mensal mais intuitivo

    // 4. Exibe os resultados na tela
    document.getElementById('litros-output').textContent = litros.toLocaleString('pt-BR');
    document.getElementById('area-output').textContent = areaNecessaria.toLocaleString('pt-BR');
    document.getElementById('carbono-output').textContent = carrosEquivalentes.toLocaleString('pt-BR');
}

// Inicializa a calculadora com o valor padrão quando a página carrega
document.addEventListener('DOMContentLoaded', calcularArea);