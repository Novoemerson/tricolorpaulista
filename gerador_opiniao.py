import requests

def gerar_analise(titulo_noticia):
    try:
        resposta = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": "Bearer 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",  # SUA_CHAVE_AQUI
                "HTTP-Referer": "https://tricolorpaulista.onrender.com",
                "Content-Type": "application/json"
            },
            json={
                "model": "mistralai/mistral-7b-instruct",
                "messages": [{
                    "role": "user",
                    "content": f"Como torcedor do SPFC, analise em 3 frases curtas: {titulo_noticia}"
                }]
            },
            timeout=30
        )
        return resposta.json()['choices'][0]['message']['content']
    
    except Exception as e:
        print(f"Erro detalhado: {str(e)}")
        return f"⚽ {titulo_noticia}: O Tricolor arrasou! (Sistema em ajustes)"
