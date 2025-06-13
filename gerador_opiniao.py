import os
import json
from time import sleep

import requests

def gerar_analise(titulo_noticia):
    try:
        prompt = f"""
        Como torcedor do São Paulo FC, analise esta notícia em 3 frases curtas:
        1. RESUMO: Extraia o fato principal
        2. OPINIÃO: Dê uma opinião polêmica
        3. CURIOSIDADE: Relacione com história do clube

        Notícia: '{titulo_noticia}'
        """
        
        resposta = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": "Bearer free",  # Chave gratuita
                "HTTP-Referer": "https://seusite.com",  # Substitua pelo seu URL
                "X-Title": "Blog SPFC"  # Identificação opcional
            },
            json={
                "model": "mistralai/mistral-7b-instruct",  # Modelo gratuito
                "messages": [{"role": "user", "content": prompt}]
            },
            timeout=15
        )
        return resposta.json()['choices'][0]['message']['content']
    
    except Exception as e:
        return f"Análise gerada automaticamente (erro na IA: {str(e)})"
