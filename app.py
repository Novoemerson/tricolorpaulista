from flask import Flask, render_template, json
import os

app = Flask(__name__)

# Rota principal
@app.route('/')
def home():
    try:
        with open('opinioes.json') as f:
            posts = json.load(f)
    except:
        posts = []
    return render_template('blog.html', posts=posts)

# Rota para gerar análises (CRÍTICA)
@app.route('/atualizar')
def atualizar():
    from crawler_saopaulo import crawler_ge  # Importe seu crawler
    from gerador_opiniao import gerar_opiniao  # Importe o gerador de IA
    
    noticias = crawler_ge()  # Coleta notícias
    opinioes = [gerar_opiniao(n) for n in noticias[:3]]  # Limita a 3 análises
    
    with open('opinioes.json', 'w') as f:
        json.dump(opinioes, f, ensure_ascii=False, indent=2)
    
    return f"{len(opinioes)} análises geradas!"
    except Exception as e:
        return f"Erro: {str(e)}"

# Rota de debug (VERIFICAÇÃO)
@app.route('/debug')
def debug():
    try:
        with open('opinioes.json') as f:
            return json.dumps(json.load(f), ensure_ascii=False, indent=2)
    except:
        return "Arquivo opinioes.json não encontrado"

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
