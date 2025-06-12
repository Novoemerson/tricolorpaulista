import os
import requests
import json
from time import sleep

DEEPSEEK_API_KEY = os.getenv('DEEPSEEK_API_KEY')

def gerar_analise(titulo_noticia):
    if not DEEPSEEK_API_KEY:
        return "Erro: Chave API não configurada"
    
    headers = {
        "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
        "Content-Type": "application/json"
    }
    
    prompt = f"""
    Como analista esportivo do São Paulo FC, analise esta notícia:
    "{titulo_noticia}"

    Inclua:
    1. Análise técnica (máximo 2 linhas)
    2. Opinião como torcedor (1 linha)
    3. Curiosidade histórica (1 linha)
    """
    
    data = {
        "model": "deepseek-chat",
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.7
    }
    
    try:
        response = requests.post(
            "https://api.deepseek.com/v1/chat/completions",
            headers=headers,
            json=data,
            timeout=30
        )
        response.raise_for_status()
        return response.json()['choices'][0]['message']['content']
    
    except requests.exceptions.RequestException as e:
        print(f"Erro na API: {str(e)}")
        return f"Análise indisponível (Erro: {str(e)})"
    
    except KeyError:
        return "Erro ao processar resposta da API"
