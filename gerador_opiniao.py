import requests

def gerar_analise(titulo_noticia):
    try:
        prompt = f"""
        Como torcedor do SPFC, analise em 3 frases curtas:
        1. Fato principal sobre '{titulo_noticia}'
        2. Opinião pessoal (seja polêmico)
        3. Dado histórico comparativo

        Use emojis e linguagem vibrante!
        """
        
        resposta = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": "Bearer free",
                "HTTP-Referer": "https://tricolorpaulista.onrender.com",
                "X-Title": "Blog SPFC"
            },
            json={
                "model": "mistralai/mistral-7b-instruct",
                "messages": [{"role": "user", "content": prompt}]
            },
            timeout=20
        )
        return resposta.json()['choices'][0]['message']['content']
    
    except Exception as e:
        print(f"Erro na API: {str(e)}")  # Debug
        return f"⚽ {titulo_noticia}: O Tricolor arrasou! (IA offline)"
