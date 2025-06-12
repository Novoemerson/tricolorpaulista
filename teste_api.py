import os
import requests

# 1. Configure sua chave manualmente aqui (apenas para teste)
CHAVE_TESTE = "sk-5fab789dec8c4c1882eee4f8a35da586"  # ← Substitua pela sua chave

# 2. Teste de conexão
try:
    headers = {
        "Authorization": f"Bearer {CHAVE_TESTE}",
        "Content-Type": "application/json"
    }
    
    data = {
        "model": "deepseek-chat",
        "messages": [{"role": "user", "content": "Responda 'OK' se esta API está funcionando"}]
    }
    
    response = requests.post(
        "https://api.deepseek.com/v1/chat/completions",
        headers=headers,
        json=data,
        timeout=10
    )
    
    if response.status_code == 200:
        print("✅ Chave VÁLIDA - Resposta da API:")
        print(response.json()['choices'][0]['message']['content'])
    else:
        print(f"❌ Erro {response.status_code}: {response.text}")

except Exception as e:
    print(f"⚠️ Falha na conexão: {str(e)}")
