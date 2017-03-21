
var quoteCounter = 0;
var quoteLength = $('#quote1').length;

setInterval(function () {
 $('#quote1').eq(quoteCounter).fadeOut(800, function () {
   if (quoteCounter === quoteLength - 1) {
     quoteCounter = 0;
   } else {
     quoteCounter += 1;
   }
   $('#quote1').eq(quoteCounter).fadeIn();
 });
}, 2000);

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
 function openModel() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;

   //captionText.innerHTML = this.alt;
}
for(var img = 0; img < images.length; img++) {
        images[img].onclick = openModel;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
