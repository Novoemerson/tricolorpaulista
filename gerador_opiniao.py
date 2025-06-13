def gerar_analise(titulo_noticia):
    # Análises pré-definidas - seu site já funciona!
    frases = [
        f"⚽ {titulo_noticia}: O Tricolor mostrou raça!",
        f"🔴⚪ Que jogo emocionante: {titulo_noticia}",
        f"📈 Na escuta do G4 com essa vitória: {titulo_noticia}",
        f"🏆 São Paulo dá show: {titulo_noticia}"
    ]
    
    # Escolhe uma frase aleatória
    from random import choice
    return choice(frases)
