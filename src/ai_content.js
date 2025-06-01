async function fetchAIContent(topic) {
    const apiKey = "7m1x1b8p4da9PKvPzSrFAjt7ryHRljK3dznRDu4g";
    const response = await fetch(`https://api.cohere.ai/generate?prompt=${topic}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "command-r",
            prompt: `Escreva uma análise detalhada sobre ${topic}.`,
            max_tokens: 200
        })
    });

    const data = await response.json();
    return data.text;
}

// Exemplo de uso: gerando análise sobre um jogo do São Paulo
fetchAIContent("Último jogo do São Paulo").then(text => {
    document.getElementById("noticias").innerHTML += `<div><h3>Análise IA</h3><p>${text}</p></div>`;
});
