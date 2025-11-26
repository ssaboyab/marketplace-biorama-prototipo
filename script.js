// --- 1. Lógica da Calculadora de Área e Carbono ---
function calcularArea() {
    // Pega o valor que o usuário digitou (quantidade de litros)
    const litros = document.getElementById('litros').value;

    // FÓRMULA DE CÁLCULO (5m² por litro é uma estimativa para o protótipo):
    const areaNecessaria = litros * 5; 

    // FÓRMULA DE CARBONO (Estimativa: 20 carros por 1000 litros):
    const carbonoSequestrado = Math.round((litros / 1000) * 20);

    // Atualiza os valores na tela
    document.getElementById('litros-output').textContent = litros;
    document.getElementById('area-output').textContent = areaNecessaria.toLocaleString('pt-BR');
    document.getElementById('carbono-output').textContent = carbonoSequestrado.toLocaleString('pt-BR');
}

// Inicializa a calculadora com o valor padrão ao carregar a página
document.addEventListener('DOMContentLoaded', calcularArea);


// --- 2. Simulação do Mapa e dos Pins (Requer a API do Google no index.html) ---
function initMap() {
    // Coordenadas de exemplo (Inicia no centro do Brasil)
    const centroBrasil = { lat: -15.78, lng: -47.92 }; 

    // Configurações do Mapa
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4, // Nível de zoom para ver o Brasil
        center: centroBrasil,
    });

    // Dados de exemplo dos agricultores (os Pins)
    const agricultores = [
        { 
            nome: "Família Silva", 
            lat: -17.88, lng: -50.92, // Exemplo em Goiás
            tamanho: "1.5 hectares (15.000m²)", 
            culturas: "Mamona (Principal), Mogno (Madeira), Frutas Cítricas (Agrícola)", 
            impacto: "Redução de erosão do solo, 3 ODS vinculados: ODS 1, 12 e 15."
        },
        { 
            nome: "Comunidade Quilombola Aurora", 
            lat: -9.54, lng: -36.56, // Exemplo em Alagoas
            tamanho: "3.2 hectares (32.000m²)", 
            culturas: "Macaúba (Principal), Ipê (Madeira), Açaí (Biodiversidade)", 
            impacto: "Conservação da água, empoderamento social, 5 ODS vinculados."
        }
    ];

    // Cria os Pins (marcadores) no Mapa
    agricultores.forEach(agric => {
        const contentString = `
            <div id="content">
                <h3>${agric.nome}</h3>
                <p><strong>📐 Tamanho:</strong> ${agric.tamanho}</p>
                <p><strong>🌿 Consórcios:</strong> ${agric.culturas}</p>
                <p><strong>🌍 Impacto:</strong> ${agric.impacto}</p>
                <p><strong>👨‍👩‍👧‍👦 História:</strong> Clique para ver foto da família e detalhes da produção!</p>
                <button style="background-color: #f0a300; color: white; border: none; padding: 8px 12px; margin-top: 10px; border-radius: 4px;">Orçar Compra</button>
            </div>`;

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        const marker = new google.maps.Marker({
            position: { lat: agric.lat, lng: agric.lng },
            map,
            title: agric.nome,
            // Ícone verde de folha para simular a agrofloresta
            icon: 'http://maps.google.com/mapfiles/ms/icons/tree.png' 
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    });
}