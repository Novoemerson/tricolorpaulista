import requests

def gerar_analise(titulo_noticia):
    try:
        # Configuração da IA
        prompt = f"""
        Como torcedor fanático do São Paulo FC, analise esta notícia:
        "{titulo_noticia}"

        Inclua:
        1. Um fato técnico relevante (1 frase)
        2. Uma opinião polêmica (1 frase)
        3. Uma comparação histórica (1 frase)

        Use linguagem informal e emotiva!
        """
        
        resposta = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": "Bearer free",  # Chave pública gratuita
                "HTTP-Referer": "https://tricolorpaulista.onrender.com",  # Seu URL
                "X-Title": "Blog do SPFC"  # Identificação
            },
            json={
                "model": "mistralai/mistral-7b-instruct",  # Modelo gratuito
                "messages": [{"role": "user", "content": prompt}],
                "temperature": 0.7  # Criatividade controlada
            },
            timeout=20
        )
        
        # Extrai a resposta da IA
        return resposta.json()['choices'][0]['message']['content']
    
    except Exception as e:
        # Fallback local se a API falhar
        return f"⚽ {titulo_noticia}: O Tricolor mostrou raça! (Análise automática indisponível no momento)"

# Teste rápido (opcional)
if __name__ == "__main__":
    print(gerar_analise("São Paulo 2x1 Corinthians - Final da Libertadores"))
