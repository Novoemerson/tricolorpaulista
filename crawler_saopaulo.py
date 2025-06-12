import requests
from bs4 import BeautifulSoup
import json

def crawler_ge():
    url = 'https://ge.globo.com/futebol/times/sao-paulo/'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        noticias = []
        
        # Seletores atualizados para o site do GE
        for item in soup.select('.feed-post-link'):
            if item.has_attr('href'):
                noticias.append({
                    'titulo': item.text.strip(),
                    'link': item['href'],
                    'fonte': 'GE'
                })
        
        return noticias
    
    except Exception as e:
        print(f"Erro ao acessar o site: {e}")
        return []

if __name__ == '__main__':
    noticias = crawler_ge()
    print(f"Notícias encontradas: {len(noticias)}")
    
    with open('noticias.json', 'w', encoding='utf-8') as f:
        json.dump(noticias, f, ensure_ascii=False, indent=2)
    
    print("Notícias salvas em 'noticias.json'")
