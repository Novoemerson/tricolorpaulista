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

@app.route('/atualizar')
def atualizar():
    try:
        dados_exemplo = [{
            'titulo': 'Exemplo: São Paulo vence clássico',
            'analise': 'Time reagiu bem no segundo tempo',
            'link': '#'
        }]
        with open('opinioes.json', 'w') as f:
            json.dump(dados_exemplo, f, indent=2)
        return "Dados atualizados!"
    except Exception as e:
        return f"Erro: {str(e)}"

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
