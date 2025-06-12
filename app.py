import os
if not os.path.exists('opinioes.json'):
    with open('opinioes.json', 'w') as f:
        json.dump([], f)
from flask import Flask, render_template, json
import os

app = Flask(__name__)

# Cria arquivos necessários ao iniciar
if not os.path.exists('opinioes.json'):
    with open('opinioes.json', 'w') as f:
        json.dump([], f)

@app.route('/')
def home():
    try:
        with open('opinioes.json') as f:
            posts = json.load(f)
    except Exception as e:
        posts = [{"erro": f"Erro ao carregar análises: {str(e)}"}]
    return render_template('blog.html', posts=posts)

from gerador_opiniao import gerar_analise

@app.route('/atualizar')
def atualizar():
    try:
        # 1. Primeiro colete notícias reais (substitua pelo seu crawler)
        noticias = [{
            'titulo': 'São Paulo vence Corinthians por 2-1',
            'link': 'https://exemplo.com/noticia'
        }]
        
        # 2. Gere análises com IA
        opinioes = []
        for noticia in noticias[:3]:  # Limita a 3 para teste
            analise = gerar_analise(noticia['titulo'])
            opinioes.append({
                'titulo': noticia['titulo'],
                'analise': analise,
                'link': noticia['link']
            })
        
        # 3. Salve
        with open('opinioes.json', 'w') as f:
            json.dump(opinioes, f, indent=2)
            
        return f"{len(opinioes)} análises geradas com IA!"
    
    except Exception as e:
        return f"Erro: {str(e)}"
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
