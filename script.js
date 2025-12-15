// ===================================================================
// 1. LÓGICA DO MAPA (Google Maps API)
// ===================================================================

function initMap() {
    // Coordenadas centrais (Exemplo: Centro aproximado das localizações)
    const centro = { lat: -12.30, lng: -38.50 }; 
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9, // Ajustado para zoom maior para ver as marcações
        center: centro,
    });

    // Dados dos locais dos SAFs (SAF Lapão corrigido)
    const saflocais = [
        // --- CORDOARIA ---
        { 
            nome: "Cordaria - Darlu", 
            lat: -12.799459, 
            lng: -38.304533, 
            info: "Tamanho: 200 m²",
            tipo: "Misto (Detalhes não fornecidos)"
        },
        { 
            nome: "Cordaria - Bispo", 
            lat: -12.7599453, 
            lng: -38.3074372, 
            info: "Tamanho: 300 m²",
            tipo: "Misto (Detalhes não fornecidos)"
        },
        { 
            nome: "Cordaria - Jamile", 
            lat: -12.8089731, 
            lng: -38.3133169, 
            info: "Tamanho: 300 m²",
            tipo: "Misto (Detalhes não fornecidos)"
        },
        { 
            nome: "Cordaria - Jace", 
            lat: -12.8126054, 
            lng: -38.3141604, 
            info: "Tamanho: 300 m²",
            tipo: "Misto (Detalhes não fornecidos)"
        },
        { 
            nome: "Cordaria - Angelica", 
            lat: -12.8116041, 
            lng: -38.3147002, 
            info: "Tamanho: 300 m²",
            tipo: "Misto (Detalhes não fornecidos)"
        },
        { 
            nome: "Cordaria - Manoel", 
            lat: -12.8108194, 
            lng: -38.3147016, 
            info: "Tamanho: 600 m²",
            tipo: "Goiaba, Caju, Manga, Acerola, Pitaiá, Mamão, Mandioca, Urucum, Cacau, Abacaxi, Jaca e Graviola"
        },
        { 
            nome: "Cordaria - Constancia", 
            lat: -12.8105692, 
            lng: -38.3237224, 
            info: "Tamanho: 400 m²",
            tipo: "Misto (Detalhes não fornecidos)"
        },
        { 
            nome: "Cordaria - Barbara", 
            lat: -12.8106174, 
            lng: -38.3134437, 
            info: "Tamanho: 400 m²",
            tipo: "Misto (Detalhes não fornecidos)"
        },
        { 
            nome: "Cordaria - Deny", 
            lat: -12.8106148, 
            lng: -38.3182000, 
            info: "Tamanho: 300 m²",
            tipo: "Misto (Detalhes não fornecidos)"
        },
        { 
            nome: "Cordaria - Livia", 
            lat: -12.8247802, 
            lng: -38.3143078, 
            info: "Tamanho: 300 m²",
            tipo: "Misto (Detalhes não fornecidos)"
        },
        { 
            nome: "Cordaria - Juse", 
            lat: -12.8021446, 
            lng: -38.3111278, 
            info: "Tamanho: 300 m²",
            tipo: "Misto (Detalhes não fornecidos)"
        },

        // --- CATUZINHO ---
        { 
            nome: "Catuzinho - Simone", 
            lat: -12.0478003, 
            lng: -38.4333150, 
            info: "Tamanho: 400 m²",
            tipo: "Cajueiro, Graviola, Goiaba, Laranja, Bananeira, Feijão de Porco e Mamona"
        },
        { 
            nome: "Catuzinho - Cosme", 
            lat: -12.0462710, 
            lng: -38.4324518, 
            info: "Tamanho: 400 m²",
            tipo: "Cajueiro, Mangueira, Graviola, Bananeira, Eucalipto, Maracandã, Feijão de Porco, Maracuja, Acerola, Abacaxi e Goiaba"
        },
        { 
            nome: "Catuzinho - Damião", 
            lat: -12.0465150, 
            lng: -38.4325958, 
            info: "Tamanho: 500 m²",
            tipo: "Misto (Detalhes não fornecidos)"
        },
        { 
            nome: "Catuzinho - Welves", 
            lat: -12.0453708, 
            lng: -38.4326767, 
            info: "Tamanho: 400 m²",
            tipo: "Limão, Graviola, Goiaba, Laranja, Bananeira, Feijão de Porco e Mamona"
        },
        { 
            nome: "Catuzinho - Marilene", 
            lat: -12.0459990, 
            lng: -38.4316231, 
            info: "Tamanho: 400 m²",
            tipo: "Manga, abacate, sapota, mamona, feijão de porco, laranja e coqueiro"
        },
        { 
            nome: "Catuzinho - Nailana", 
            lat: -12.0477707, 
            lng: -38.4340731, 
            info: "Tamanho: 300 m²",
            tipo: "Misto (Detalhes não fornecidos)"
        },

        // --- TOP VERDE ---
        { 
            nome: "Top Verde - Ana Cristina", 
            lat: -12.3215555, 
            lng: -38.4348731, 
            info: "Tamanho: 600 m²",
            tipo: "Bananeira, Goiaba, Manga, Ciriguela, Caju, Abacate, Atemoiá, Coqueiro, Urucum, Feijão andu, Mamona e Feijão de porco"
        },
        { 
            nome: "Top Verde - Jose Miranda", 
            lat: -12.3124802, 
            lng: -38.4094758, 
            info: "Tamanho: 400 m²",
            tipo: "Laranja, Goiaba, Acerola, Abacate, Feijão de porco e Margaridão"
        },
        
        // --- SAF LAPÃO (Corrigido) ---
        // Guardião: (Vazio para mostrar apenas "SAF Lapão" no título)
        // Espécies: "Misto" para que o campo não apareça.
        {
            nome: "Lapão - ",
            lat: -11.519167, // Convertido de 11º31'09.0"S
            lng: -41.851250, // Convertido de 41º51'04.5"W
            info: "Tamanho: 10000 m²", // 1 hectare
            tipo: "Misto (Detalhes não fornecidos)" 
        }
    ];

    // Criação dos marcadores e InfoWindows
    saflocais.forEach(local => {
        // Extrai Guardião e Comunidade do nome (ex: "Cordaria - Darlu")
        const parts = local.nome.split(' - ');
        const comunidade = parts[0];
        
        // Garante que o guardião seja uma string vazia se não existir na entrada
        const guardiao = parts.length > 1 ? parts[1].trim() : '';
        
        let especiesHtml = '';
        
        if (local.tipo !== "Misto (Detalhes não fornecidos)") {
            const especiePrincipal = "Mamona";
            
            // 1. Divide a string de espécies em um array
            let especiesArray = local.tipo.split(',').map(s => s.trim());
            
            // 2. Procura e remove a Mamona da lista (se existir)
            const mamonaIndex = especiesArray.findIndex(
                especie => especie.toLowerCase().includes(especiePrincipal.toLowerCase())
            );

            if (mamonaIndex !== -1) {
                // Remove a Mamona da posição atual
                const mamona = especiesArray.splice(mamonaIndex, 1)[0];
                
                // 3. Adiciona a Mamona no começo do array
                especiesArray.unshift(mamona);
            }
            
            // 4. Recria a string de espécies formatada
            const especiesFormatadas = especiesArray.join(', ');
            
            // Monta o HTML com as espécies formatadas
            especiesHtml = `<p><strong>- Espécies plantadas:</strong> ${especiesFormatadas}</p>`;
        }
        
        // Montagem final do InfoWindow no formato solicitado
        const infowindow = new google.maps.InfoWindow({
            // Se guardiao estiver vazio, o título será apenas "SAF Lapão" (SAF )
            content: `<h3>SAF ${guardiao}</h3>
                      <p><strong>- Comunidade:</strong> ${comunidade}</p>
                      <p><strong>- Área:</strong> ${local.info.replace('Tamanho: ', '')}</p>
                      ${especiesHtml}`
        });

        const marker = new google.maps.Marker({
            position: { lat: local.lat, lng: local.lng },
            map: map,
            title: local.nome,
        });

        // Adiciona um listener para abrir a InfoWindow ao clicar
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    });
}

// ===================================================================
// 2. LÓGICA DA CALCULADORA (Sem alterações)
// ===================================================================

function calcularArea() {
    // Constantes de conversão (Valores fictícios/exemplo)
    const AREA_POR_LITRO = 5; // m² necessários para produzir 1 litro de óleo
    const CO2_POR_M2 = 0.02; // tCO2e sequestrado por m² por ano
    const CARRO_CO2_POR_MES = 0.005; // Estimativa de tCO2e de um carro/mês

    // Leitura do input
    const litrosInput = document.getElementById('litros');
    const litros = parseInt(litrosInput.value);

    if (isNaN(litros) || litros < 100) {
        alert("Por favor, insira uma quantidade válida (mínimo 100 litros).");
        return;
    }

    // Cálculos
    const areaNecessaria = litros * AREA_POR_LITRO;
    const co2Sequestrado = areaNecessaria * CO2_POR_M2;
    const carrosCompensados = Math.round(co2Sequestrado / CARRO_CO2_POR_MES);

    // Atualiza o HTML
    document.getElementById('litros-output').textContent = litros.toLocaleString('pt-BR');
    document.getElementById('area-output').textContent = areaNecessaria.toLocaleString('pt-BR');
    document.getElementById('carbono-output').textContent = carrosCompensados.toLocaleString('pt-BR');
}

// Inicializa a calculadora ao carregar a página com o valor padrão
document.addEventListener('DOMContentLoaded', calcularArea);


// ===================================================================
// 3. LÓGICA DO FORMULÁRIO DE PEDIDOS 
// ===================================================================

/**
 * Mostra o formulário de novo pedido e esconde o link.
 */
function mostrarFormulario(event) {
    event.preventDefault(); 
    
    document.getElementById('formulario-pedido').style.display = 'block';
    document.getElementById('btn-novo-pedido').style.display = 'none';
    document.getElementById('mensagem-sucesso').style.display = 'none';
}

/**
 * Simula o envio do orçamento: limpa o formulário e exibe a mensagem de sucesso.
 */
function enviarOrçamento(event) {
    event.preventDefault(); // Impede o envio real do formulário
    
    const form = document.getElementById('formulario-pedido');
    
    // Verifica se a validação do HTML foi bem-sucedida
    if (form.checkValidity()) {
        
        // 1. Esconde o formulário
        form.style.display = 'none';

        // 2. Esconde o pedido existente (se estiver visível)
        document.getElementById('pedido-existente').style.display = 'none'; 

        // 3. Limpa o formulário (faz os campos preenchidos sumirem)
        form.reset(); 
        
        // 4. Mostra a mensagem de sucesso
        document.getElementById('mensagem-sucesso').style.display = 'block';
        
    } else {
        // Se a validação do HTML falhar (campos obrigatórios vazios),
        // o navegador já deve mostrar a mensagem de erro padrão.
        form.reportValidity(); // Força a exibição da mensagem de erro de validação
    }
}