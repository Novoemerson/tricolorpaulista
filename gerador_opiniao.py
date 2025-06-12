import json
from deepseek_api import sk-5fab789dec8c4c1882eee4f8a35da586  # Você precisaria criar essa integração

def gerar_opiniao(noticia):
    prompt = f"""
    Leia esta notícia sobre o São Paulo FC e gere:
    1. Um resumo objetivo
    2. Uma análise opinativa como torcedor
    3. Um comentário engraçado ou polêmico
    
    Notícia: {noticia['titulo']} - {noticia['link']}
    """
    
    resposta = DeepSeekAPI.generate(prompt)
    return {
        'original': noticia,
        'resumo': resposta['resumo'],
        'analise': resposta['analise'],
        'comentario': resposta['comentario']
    }

if __name__ == '__main__':
    with open('noticias.json') as f:
        noticias = json.load(f)
    
    opinioes = [gerar_opiniao(n) for n in noticias[:3]]  # Limite para teste
    with open('opinioes.json', 'w') as f:
        json.dump(opinioes, f, ensure_ascii=False, indent=2)
