let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://i.ibb.co/gmS4f8P/anakin-Cropped.jpg') {
      myImage.setAttribute('src','https://vignette.wikia.nocookie.net/disney/images/8/80/Profile_-_Darth_Vader.png');
    } else {
      myImage.setAttribute('src','https://i.ibb.co/gmS4f8P/anakin-Cropped.jpg');
    }
}