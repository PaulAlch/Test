// Vérifier si le navigateur prend en charge le partage d'écran
if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
  // Obtenir l'accès au partage d'écran
  navigator.mediaDevices.getDisplayMedia({ video: true })
    .then(function(stream) {
      // Obtenir la référence à la vidéo dans votre HTML
      var videoElement = document.getElementById('screenShareVideo');
      // Assigner le flux vidéo au lecteur vidéo
      videoElement.srcObject = stream;
      // Play la vidéo
      videoElement.play();
    })
    .catch(function(error) {
      console.error('Erreur lors du partage d\'écran :', error);
    });
} else {
  console.error('Le navigateur ne prend pas en charge le partage d\'écran');
}