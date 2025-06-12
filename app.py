from flask import Flask, render_template
import json
from gerador_opiniao import gerar_opiniao  # Importa a função do outro arquivo
import os

app = Flask(__name__)

@app.route('/')
def home():
    try:
        with open('opinioes.json') as f:
            posts = json.load(f)
    except:
        posts = [{"erro": "Nenhuma análise gerada ainda!"}]
    
    return render_template('blog.html', posts=posts)

@app.route('/atualizar')  # Nova rota para gerar análises
def atualizar():
    with open('noticias.json') as f:
        noticias = json.load(f)
    
    opinioes = [gerar_opiniao(n) for n in noticias[:3]]  # Limita a 3 para teste
    
    with open('opinioes.json', 'w') as f:
        json.dump(opinioes, f, ensure_ascii=False, indent=2)
    
    return "Análises atualizadas!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
