from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route('/')
def home():
    with open('opinioes.json') as f:
        posts = json.load(f)
    return render_template('blog.html', posts=posts)

if __name__ == '__main__':
    app.run()
