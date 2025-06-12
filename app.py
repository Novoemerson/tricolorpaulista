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
        posts = [{"erro": "Nenhuma análise disponível ainda. Acesse /atualizar para gerar."}]
    
    return render_template('blog.html', posts=posts)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
