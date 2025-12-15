// ===================================================================
// 1. LÓGICA DO MAPA (Google Maps API)
// ===================================================================

function initMap() {
    // Coordenadas centrais (Exemplo: Salvador, BA)
    const centro = { lat: -12.9714, lng: -38.5014 }; 
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: centro,
    });

    // Dados dos locais dos SAFs
    const saflocais = [
        { 
            nome: "Fazenda Lapão", 
            lat: -10.9700, 
            lng: -41.7600, 
            info: "Família Silva: 5.000m² de SAF. Sequestro de 10t de CO2/ano.",
            tipo: "Mamona e Mandioca"
        },
        { 
            nome: "Comunidade Camaçari", 
            lat: -12.6900, 
            lng: -38.3200, 
            info: "Família Oliveira: 10.000m² de SAF. Biodiversidade em alta.",
            tipo: "Cacau, Banana e Mamona"
        },
        // Você deve ter 19 SAFs no total!
    ];

    // Criação dos marcadores e InfoWindows
    saflocais.forEach(local => {
        const infowindow = new google.maps.InfoWindow({
            content: `<h3>${local.nome}</h3>
                      <p><strong>Tipo:</strong> ${local.tipo}</p>
                      <p>${local.info}</p>`
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
// 2. LÓGICA DA CALCULADORA
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
    event.preventDefault(); // Impede que o link vá para o topo da página
    
    // Mostra o formulário de pedido
    document.getElementById('formulario-pedido').style.display = 'block';
    
    // Esconde o link "Fazer novo pedido"
    document.getElementById('btn-novo-pedido').style.display = 'none';

    // Se houver uma mensagem de sucesso, garante que ela esteja escondida
    document.getElementById('mensagem-sucesso').style.display = 'none';
}

/**
 * Simula o envio do orçamento: esconde o formulário e exibe a mensagem de sucesso.
 */
function enviarOrçamento(event) {
    event.preventDefault(); // Impede o envio real do formulário (que recarregaria a página)

    const form = document.getElementById('formulario-pedido');
    
    // Validação básica (verifica se os campos obrigatórios foram preenchidos)
    if (form.checkValidity()) {
        // 1. Esconde o formulário
        form.style.display = 'none';

        // 2. Esconde o pedido existente (para focar no novo pedido)
        document.getElementById('pedido-existente').style.display = 'none';

        // 3. Mostra a mensagem de sucesso
        document.getElementById('mensagem-sucesso').style.display = 'block';

        // Opcional: Limpar o formulário para o próximo uso
        form.reset();
        
    } else {
        // Se a validação do HTML falhar (campos vazios)
        // O navegador já dispara a mensagem de erro padrão
    }
}