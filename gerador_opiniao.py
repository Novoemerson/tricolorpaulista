import os
import json
from time import sleep

import requests

def gerar_analise(titulo_noticia):
    try:
        prompt = f"Como torcedor do SPFC, analise em 2 frases: '{titulo_noticia}'"
        
        resposta = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": "Bearer free",
                "HTTP-Referer": "https://tricolorpaulista.onrender.com",  # Substitua pelo seu URL
                "X-Title": "Blog SPFC"
            },
            json={
                "model": "mistralai/mistral-7b-instruct",
                "messages": [{"role": "user", "content": prompt}]
            },
            timeout=20
        )
        data = resposta.json()
        return data['choices'][0]['message']['content']
    
    except Exception as e:
        return f"⚽ Análise em desenvolvimento (erro técnico: {str(e)})"
