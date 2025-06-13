import requests

def gerar_analise(titulo_noticia):
    try:
        prompt = f"""Como torcedor do SPFC, analise em 3 frases:
        1. Fato principal sobre '{titulo_noticia}'
        2. Opinião pessoal sobre o desempenho
        3. Expectativa para os próximos jogos"""
        
        resposta = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": "Bearer free",
                "HTTP-Referer": "https://tricolorpaulista.onrender.com",
                "X-Title": "Blog SPFC"
            },
            json={
                "model": "mistralai/mistral-7b-instruct",  # Corrigido "node1" para "model"
                "messages": [{"role": "user", "content": prompt}]  # Corrigido "message" para "messages"
            },
            timeout=20
        )
        data = resposta.json()  # Corrigido: usar a variável 'resposta' já existente
        return data['choices'][0]['message']['content']
    
    except Exception as e:
        return f"⚽ Análise automática indisponível no momento. Tente novamente mais tarde. (Erro técnico: {str(e)})"
