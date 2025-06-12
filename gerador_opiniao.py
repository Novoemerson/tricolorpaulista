import os
import json
import requests  # Adicionei esta linha

# Pega a chave da DeepSeek das variáveis de ambiente
DEEPSEEK_KEY = os.getenv('sk-5fab789dec8c4c1882eee4f8a35da586')

def gerar_opiniao(noticia):
    if not DEEPSEEK_KEY:
        return {"erro": "Chave API não configurada!"}

    # Configuração da API (exemplo - ajuste conforme a API real da DeepSeek)
    headers = {
        "Authorization": f"Bearer {DEEPSEEK_KEY}",
        "Content-Type": "application/json"
    }
    
    data = {
        "model": "deepseek-chat",
        "messages": [{
            "role": "user",
            "content": f"""
            Analise esta notícia como um torcedor do São Paulo:
            Título: {noticia['titulo']}
            Link: {noticia['link']}

            Gere:
            1. Um resumo curto
            2. Uma opinião apaixonada
            3. Uma piada sobre o fato
            """
        }]
    }

    try:
        response = requests.post(
            "https://api.deepseek.com/v1/chat/completions",  # URL exemplo (verifique a real)
            headers=headers,
            json=data
        )
        return response.json()
    
    except Exception as e:
        return {"erro": f"Falha na API: {str(e)}"}

if __name__ == '__main__':
    # Teste local (rode apenas se tiver um .env com a chave)
    with open('noticias.json') as f:
        noticias = json.load(f)
    
    resultado = gerar_opiniao(noticias[0])  # Testa com a primeira notícia
    print(json.dumps(resultado, indent=2))
