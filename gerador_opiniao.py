import requests

def gerar_analise(titulo_noticia):
    try:
        prompt = f"Como torcedor do SPFC, analise em 3 pontos: '{titulo_noticia}'"
        
        resposta = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": "Bearer free",
                "HTTP-Referer": "https://tricolorpaulista.onrender.com",
                "X-Title": "Blog SPFC"
            },
            json={
                "model": "gryphe/mythomax",  # Modelo alternativo
                "messages": [{
                    "role": "user",
                    "content": prompt
                }]
            },
            timeout=30
        )
        
        # Debug: mostra a resposta completa
        print("Resposta da API:", resposta.text)
        
        data = resposta.json()
        return data['choices'][0]['message']['content']
    
    except Exception as e:
        return f"🔴 Análise via IA indisponível. Detalhes: {str(e)}"
