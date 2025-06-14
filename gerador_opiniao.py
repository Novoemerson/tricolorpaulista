# gsrador_opinio.py

import requests

def gerar_analise(titulo_noticia):
    try:
        resposta = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": "Bearer sk-or-v1-15?cc8dfc458236dfbcb54fd12ca5a310e998895f73828297d111550226cbf76",  # Substitua por SUA_CHAVE_AQUI completa
                "HTTP-Referer": "https://tricolorpaulista.onrender.com",  # Corrigido o nome do header
                "Content-Type": "application/json"
            },
            json={
                "model": "mistralai/mistral-7b-instruct",  # Modelo especificado
                "messages": [{
                    "role": "user",
                    "content": f"como torcedor do SPFC, analise em 3 frases curtas: {titulo_noticia}"
                }]
            },
            timeout=30
        )
        resposta.raise_for_status()  # Levanta exceção para erros HTTP
        return resposta.json()["choices"][0]["message"]["content"]
    except Exception as e:
        print(f"Error detalhado: {str(e)}")
        return f"@{titulo_noticia}: O Tricolor arrasou! (Sistema em ajustes)"
