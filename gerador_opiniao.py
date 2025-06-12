import os
import requests
import json

DEEPSEEK_API_KEY = os.getenv('DEEPSEEK_API_KEY')

def gerar_analise(titulo_noticia):
    headers = {
        "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
        "Content-Type": "application/json"
    }
    
    prompt = f"""
    Como analista esportivo e torcedor do São Paulo FC, comente sobre:
    "{titulo_noticia}". Inclua:
    1. Análise técnica objetiva
    2. Opinião subjetiva como torcedor
    3. Curiosidade ou dado histórico
    """
    
    data = {
        "model": "deepseek-chat",
        "messages": [{"role": "user", "content": prompt}]
    }
    
    response = requests.post(
        "https://api.deepseek.com/v1/chat/completions",
        headers=headers,
        json=data
    )
    
    return response.json().get('choices', [{}])[0].get('message', {}).get('content', "Sem análise disponível")
    
    except Exception as e:
        return {"erro": f"Falha na API: {str(e)}"}

if __name__ == '__main__':
    # Teste local (rode apenas se tiver um .env com a chave)
    with open('noticias.json') as f:
        noticias = json.load(f)
    
    resultado = gerar_opiniao(noticias[0])  # Testa com a primeira notícia
    print(json.dumps(resultado, indent=2))
