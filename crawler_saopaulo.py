import requests
from bs4 import BeautifulSoup
import json

def crawler_ge():
    url = 'https://ge.globo.com/futebol/times/sao-paulo/'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    noticias = []
    for item in soup.select('.feed-post-link'):
        noticias.append({
            'titulo': item.text,
            'link': item['href'],
            'fonte': 'GE'
        })
    return noticias

if __name__ == '__main__':
    noticias = crawler_ge()
    with open('noticias.json', 'w') as f:
        json.dump(noticias, f, ensure_ascii=False, indent=2)
    print(f'{len(noticias)} notícias coletadas!')
