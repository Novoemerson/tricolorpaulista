import requests

def gerar_analise(titulo_noticia):
    try:
        # Configuração à prova de erros
        resposta = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": "Bearer free",
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
        
        # Debug (descomente para ver a resposta completa)
        # print("Resposta completa:", resposta.text)
        
        return resposta.json()['choices'][0]['message']['content']
    
    except Exception as e:
        print(f"Erro técnico detalhado: {str(e)}")
        return f"⚽ {titulo_noticia}: O Tricolor foi impressionante! (Análise premium em breve)"
