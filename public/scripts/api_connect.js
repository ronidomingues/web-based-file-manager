function apiConnect() {
    // Função para conectar-se à API
    console.log("Conectando-se à API...");
    // Lógica de conexão aqui
    API_PATH = "/api/index.php";
    fetch(API_PATH, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "action": "get_data"
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Dados recebidos da API:", data);
            // Colocar os dados no local físico
            document.querySelector('code').innerText = data.place.localhost;
        })
        .catch(error => {
            console.error("Erro ao conectar-se à API:", error);
        });
}
apiConnect();