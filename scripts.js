  
  function togglePlay() {
    var myAudio = document.getElementById("audio");
    return myAudio.paused ? myAudio.play() : myAudio.pause();
  };

  //gallery 

  // function to show image when we click on a image
function showImage(imageSrc) {
  let popupImage = document.getElementById("popupImage");
  popupImage.src = imageSrc;
   
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "block";
  document.body.style.overflow = "hidden";
}
// function to hide the image when we click on cross button
function closeImage() {
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "none";
 document.body.style.overflow = "auto";
}

//pop up window


document.addEventListener('DOMContentLoaded', function() {
  const popupLink = document.getElementById('popup-link');
  const popupWindow = document.getElementById('popup-window');
  const closeButton = document.getElementById('close-button');
  const video = document.getElementById('trash-video');

  if (popupLink && popupWindow && closeButton) { // Ensure all elements are found
      popupLink.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default behavior of the link
          popupWindow.style.display = 'block'; // Show the popup window  
          video.play();        
      });

      closeButton.addEventListener('click', function() {
          video.pause();
          popupWindow.style.display = 'none'; // Hide the popup window when close button is clicked
          
      });
  } else {
      console.error('One or more elements not found.'); // Log an error if one or more elements are not found
  }
});

