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
    try:
        # Simulando dados de exemplo (substitua pelo seu crawler real)
        dados_exemplo = [{
            'titulo': 'São Paulo vence clássico',
            'analise': 'Time mostrou grande recuperação no segundo tempo',
            'comentario': 'O técnico acertou nas substituições!',
            'link': 'https://exemplo.com/noticia'
        }]
        
        with open('opinioes.json', 'w') as f:
            json.dump(dados_exemplo, f, ensure_ascii=False, indent=2)
            
        return "Análises atualizadas com sucesso!"
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
