document.addEventListener('DOMContentLoaded', function() {
    // Seleziona l'elemento dell'immagine e l'elemento audio
    const albumCover = document.getElementById('album-cover');
    const music = document.getElementById('music');
    let isPlaying = false;

    // Aggiungi un listener per l'evento di click sull'immagine
    albumCover.addEventListener('click', function() {
      if (!isPlaying) {
        // Sostituisci l'immagine con una GIF animata
        albumCover.src = '../IMG_VIDEO/discoMolecole.gif';

        // Avvia la riproduzione dell'audio
        music.play();
        isPlaying = true;
      } else {
        // Interrompi la riproduzione dell'audio
        music.pause();
        music.currentTime = 0;

        // Ripristina l'immagine originale
        albumCover.src = '../IMG_VIDEO/copertinaMolecole.jpg';
        isPlaying = false;
      }
    });
  });