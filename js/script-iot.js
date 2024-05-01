var selectedSpotId = null; // Variável global para armazenar o ID da vaga selecionada

function reserveSpot(spotId) {
    if (selectedSpotId !== null) {
        var previousSpotButton = document.getElementById(selectedSpotId).querySelector("button");
        previousSpotButton.textContent = "Livre"; // Define o botão como Livre
        previousSpotButton.style.backgroundColor = "#2D830E"; // Cor padrão do botão
        
        if (selectedSpotId === spotId) {
            selectedSpotId = null; // Reseta o ID da vaga selecionada
            closeRequest(); // Fecha o pedido ao deselecionar a vaga
            return; // Sai da função sem reservar a vaga novamente
        }
    }
    var spotButton = document.getElementById(spotId).querySelector("button");
    if (spotButton.textContent === "Livre") {
        spotButton.textContent = "Reservar";
        spotButton.style.backgroundColor = "#CE740B";
        selectedSpotId = spotId; // Atualiza o ID da vaga selecionada
        spotButton.className = "reserve";
        openRequest(spotId);
    } else {
        spotButton.textContent = "Livre";
        spotButton.style.backgroundColor = "#2D830E";
        spotButton.className = "";
        closeRequest(); // Fecha o pedido ao deselecionar a vaga
        selectedSpotId = null; // Reseta o ID da vaga selecionada
    }
}

function closeRequest() {
    var requestInfo = document.getElementById("request-info");
    requestInfo.style.display = "none"; // Oculta o pedido
}

function openRequest(spotId) {
    var requestInfo = document.getElementById("request-info");
    var selectedSpot = document.getElementById("selected-spot");
    selectedSpot.textContent = spotId.replace("spot", "");
    requestInfo.style.display = "block"; // Exibe o pedido
}

function updateExitTime() {
    var entryTimeSelect = document.getElementById("entry-time");
    var exitTimeSpan = document.getElementById("exit-time");
    var entryTime = parseInt(entryTimeSelect.value);
    var exitTime = (entryTime + 3) % 24; // Soma 3 horas e ajusta para 24h caso ultrapasse
    exitTimeSpan.textContent = exitTime.toString().padStart(2, "0") + ":00"; // Formata a hora de saída
}

function pay() {
    // Implementar a lógica para pagamento
    alert("Pagamento realizado com sucesso!");
    closeRequest();
}
