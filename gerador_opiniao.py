import requests

def gerar_analise(titulo_noticia):
    try:
        resposta = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": "Bearer CHAVE_API_DO_ROUTERO_OPEN",  # Sua chave
                "HTTP-Referer": "https://tricolorpaulista.onrender.com",
                "Content-Type": "application/json"  # Adicione esta linha
            },  # Fechamento do headers
            json={
                "model": "mistralai/mistral-7b-instruct",
                "messages": [{"role": "user", "content": f"Analise como torcedor do SPFC: {titulo_noticia}"}]
            },  # Fechamento do json
            timeout=30  # Fechamento do post
        )  # Fechamento do try
        return resposta.json()['choices'][0]['message']['content']
    
    except Exception as e:
        print(f"Erro na API: {str(e)}")  # Debug
        return f"⚽ {titulo_noticia}: O Tricolor foi impressionante!"
