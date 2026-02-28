'use stricts'

const imagens = [

    {
        'legenda': 'imagem1',
        'url': './img/bola.jpeg'
    },

    {
        'legenda': 'imagem2',
        'url': './img/campo.jpeg'
    },

    {
        'legenda': 'imagem3',
        'url': './img/jogador.jpg'
    },

    {
        'legenda': 'imagem4',
        'url': './img/jogadores.jpg'
    },

    {
        'legenda': 'imagem5',
        'url': './img/moca-pensando.jpg'
    },

    {
        'legenda': 'imagem6',
        'url': './img/tigre.jpg'
    }


]



function criarImagem (imagem) {

    const galeria = document.getElementById('galeria');
    const figure = document.createElement('figure')
    const img  = document.createElement('img');
    img.src = imagem.url
    
    figcaption = document.createElement('figcaption')
    figcaption.textContent = imagem.legenda
    
    figure.appendChild(img)
    figure.appendChild(figcaption)
    galeria.appendChild(figure);

}


function carregarImagens () {

    imagens.forEach(criarImagem)
    imagens.forEach(criarTexto)

}



carregarImagens();