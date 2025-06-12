from flask import Flask, render_template, json
import os

app = Flask(__name__)

@app.route('/')
def home():
    try:
        with open('opinioes.json') as f:
            posts = json.load(f)
    except Exception as e:
        posts = [{"erro": f"Nenhuma análise disponível. Erro: {str(e)}"}]
    return render_template('blog.html', posts=posts)

@app.route('/atualizar')
def atualizar():
    try:
        # Dados de exemplo (substitua pelo seu crawler depois)
        dados_exemplo = [{
            'titulo': 'São Paulo vence clássico',
            'analise': 'Time mostrou grande recuperação no segundo tempo',
            'comentario': 'O técnico acertou nas substituições!',
            'link': 'https://exemplo.com/noticia'
        }]
        
        with open('opinioes.json', 'w') as f:
            json.dump(dados_exemplo, f, ensure_ascii=False, indent=2)
        return "3 análises atualizadas com sucesso!"
    except Exception as e:
        return f"Erro ao atualizar: {str(e)}"

@app.route('/debug')
def debug():
    try:
        with open('opinioes.json') as f:
            return json.dumps(json.load(f)), 200, {'Content-Type': 'application/json'}
    except Exception as e:
        return f"Erro no debug: {str(e)}", 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
