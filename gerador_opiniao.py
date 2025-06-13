import requests
import json

def gerar_analise(titulo_noticia):
    try:
        # Configuração otimizada para o plano free
        prompt = f"""
        Como torcedor fanático do São Paulo FC, analise este resultado em 3 frases:
        1. Destaque técnico (estatística ou jogada)
        2. Opinião contundente
        3. Comparação histórica

        Jogo: {titulo_noticia}
        """
        
        resposta = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": "Bearer free",  # Funciona sem cadastro
                "HTTP-Referer": "https://tricolorpaulista.onrender.com",
                "Content-Type": "application/json"
            },
            json={
                "model": "mistralai/mistral-7b-instruct",
                "messages": [{
                    "role": "user",
                    "content": prompt
                }]
            },
            timeout=25
        )
        
        # Debug avançado (descomente se precisar)
        # print("Status:", resposta.status_code)
        # print("Resposta:", resposta.text)
        
        dados = resposta.json()
        return dados['choices'][0]['message']['content']
    
    except Exception as e:
        print(f"Erro detalhado: {str(e)}")  # Log completo
        return f"⚽ {titulo_noticia}: O Tricolor mostrou seu poderio! (Sistema em ajustes)"
