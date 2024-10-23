// script.js

document.getElementById('form-voltar').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const nomeMusica = document.getElementById('nome-musica').value;
    const artistaMusica = document.getElementById('artista-musica').value;
    const generoMusica = document.getElementById('genero-musica').value;
    const duracaoMusica = document.getElementById('duracao-musica').value;
    const linkMusica = document.getElementById('link-musica').value;

    // Salve os dados da música no localStorage
    let musicas = JSON.parse(localStorage.getItem('musicas')) || [];
    musicas.push({
        nome: nomeMusica,
        artista: artistaMusica,
        genero: generoMusica,
        duracao: duracaoMusica,
        link: linkMusica
    });
    localStorage.setItem('musicas', JSON.stringify(musicas));

    // Limpa o formulário após o cadastro
    document.getElementById('form-voltar').reset();
    console.log(`Música cadastrada: ${nomeMusica} - ${artistaMusica}`);
});