document.addEventListener("DOMContentLoaded", function () {
   var productBoxes = document.getElementsByClassName("product");
   var productBoxesLength = productBoxes.length;
   for (var i=0; i<productBoxesLength;i++){
       productBoxes[i].addEventListener("mouseover", function () {
           var title = this.querySelector(".title");
           title.classList.toggle("hidden");
       });
       productBoxes[i].addEventListener("mouseout", function () {
           var title = this.querySelector(".title");
           title.classList.toggle("hidden");
       });
   }
    var slidesCount = document.getElementsByClassName("slide").length;
    var slideNumber = 0;
    var nextSlide = document.querySelector(".slider .controls .next");
    nextSlide.addEventListener("click", function () {
       var slides = this.parentElement.parentElement.querySelector(".slides");
       if (slideNumber<slidesCount-1){
           slideNumber++;
       } else {
           slideNumber=0;
       }
       slides.style.marginLeft = 0-slideNumber*1044+"px";
    });
    var previousSlide = document.querySelector(".slider .controls .previous");
    previousSlide.addEventListener("click", function () {
        var slides = this.parentElement.parentElement.querySelector(".slides");
        if (slideNumber>0){
            slideNumber--;
        } else {
            slideNumber=slidesCount-1;
        }
        slides.style.marginLeft = 0-slideNumber*1044+"px";
    });

});