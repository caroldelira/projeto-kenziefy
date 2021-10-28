const baseMusicas = [
    {
        'name': 'Anonymous Choir - Unus Ex Discipulis Meis',
        'artist': 'Anonymous',
        'path': './src/audio/Anonymous_Choir_-_Unus_Ex_Discipulis_Meis.mp3',
        'album': 'Good Enough',
    },
    {
        'name': 'Felipe Sarro - C Schumann Scherzo in C minor Op 14',
        'artist': 'Anonymous',
        'path': './src/audio/Felipe_Sarro_-_11_-_C_Schumann_Scherzo_in_C_minor_Op_14.mp3',
        'album': 'Good Enough',
    },
    {
        'name': 'James Scott - Frog Legs Rag 1906 piano roll',
        'artist': 'Anonymous',
        'path': './src/audio/James_Scott_-_01_-_Frog_Legs_Rag_1906_piano_roll.mp3',
        'album': 'Good Enough',
    }
];


const ListaMusicas = document.querySelector('.ListaMusicas');

const tagAudio = document.getElementById('saidaAudio');
const primeiraMusica = baseMusicas[0]
tagAudio.src = primeiraMusica.path;

const botaoPausar = document.getElementById('btnPause');
const botaoPlay = document.getElementById('btnControlPlay');

let musicaAtual = 0;


function construirPlaylist(musica, musicaId){
    
    const musicaElemento = document.createElement('li');
    const nomeMusica = document.createElement('p');
    const nomeArtista = document.createElement ('p');
    const nomeAlbum = document.createElement('p');

    musicaElemento.dataset.id = musicaId

    nomeMusica.className = 'primeiroItem';
    nomeMusica.innerText = musica.name;
    nomeArtista.innerText = musica.artist;
    nomeAlbum.innerText = musica.album;
    

    musicaElemento.appendChild(nomeMusica);
    musicaElemento.appendChild(nomeArtista);
    musicaElemento.appendChild(nomeAlbum);

    musicaElemento.addEventListener('click', tocarMusica);

    ListaMusicas.appendChild(musicaElemento);

}

for(let contador = 0; contador < baseMusicas.length; contador++){
    construirPlaylist(baseMusicas[contador], contador);
}

function tocarMusica(evento){

    const elemetoClicado = evento.currentTarget;

    if(elemetoClicado.tagName === "li"){

        const musicaId = elemetoClicado.dataset.id;
        const musicaSelecionada = baseMusicas[musicaId];

        tagAudio.src = musicaSelecionada.path;
        musicaAtual = Number(musicaId);
        tagAudio.play();

    } else {
        tagAudio.play();
    }
}

botaoPlay.addEventListener('click', tocarMusica);

function pausarMusica(){
    tagAudio.pause();
}

botaoPausar.addEventListener('click', pausarMusica);


function tocarProximaMusica(){

    if(musicaAtual === baseMusicas.length - 1){
        musicaAtual = 0
    } else {
        musicaAtual++
    }

    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play()

    let nomeAlbum = baseMusicas[musicaAtual].album
    let nomeMusica = baseMusicas[musicaAtual].name


    atualizaPlayer(nomeAlbum, nomeMusica)

}

const btnControlNext = document.getElementById('btnControlNext');
btnControlNext.addEventListener('click', tocarProximaMusica);

function tocarMusicaAnterior(){

    if(musicaAtual === 0){
        musicaAtual = baseMusicas.length - 1
    } else {
        musicaAtual--
    }

    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play()

    atualizaPlayer(nomeAlbum, nomeMusica)

}

const btnControlprev = document.getElementById('btnControlprev');
btnControlprev.addEventListener('click', tocarMusicaAnterior);

const areaPlayerVolume = document.querySelector(".areaPlayerVolume input")

areaPlayerVolume.addEventListener("input", ()=>{
    tagAudio.volume = areaPlayerVolume.value
})

function atualizaPlayer(nome, musica){

    //const fotoAlbum = document.getElementById('fotoAlbum');
    const nomeMusica = document.getElementById('nomeMusica');
    const nomeAlbum = document.getElementById('nomeAlbum');
    
    //fotoAlbum.src = foto
    nomeMusica.innerText = musica
    nomeAlbum.innerText = nomes
    
}