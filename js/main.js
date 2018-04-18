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

    var listArrows = document.getElementsByClassName("list_arrow");
    var listArrowsLength = listArrows.length;
    var listPanelElements = document.querySelectorAll(".list_panel > li");
    var listPanelElementsLength = listPanelElements.length;

    var chairNameEl = document.querySelector(".summary_panel .title");
    var chairPriceEl = document.querySelector(".summary_panel .title.value");
    var chairPrice = 0;
    var colorNameEl = document.querySelector(".summary_panel .color");
    var colorPriceEl = document.querySelector(".summary_panel .color.value");
    var colorPrice = 0;
    var patternNameEl = document.querySelector(".summary_panel .pattern");
    var patternPriceEl = document.querySelector(".summary_panel .pattern.value");
    var patternPrice = 0;
    var transportNameEl = document.querySelector(".summary_panel .transport");
    var transportPriceEl = document.querySelector(".summary_panel .transport.value");
    var transportPrice = 0;
    var sumEl = document.querySelector(".summary_panel .sum");
    var sumPrice = 0;

    function updateSum (){
        sumPrice = parseInt(chairPrice) + parseInt(colorPrice) + parseInt(patternPrice) + parseInt(transportPrice);
        sumEl.innerText = sumPrice + " zł";
    }

    for (var i = 0; i < listArrowsLength; i++) {
        listArrows[i].addEventListener("click", function () {
           var thisListPanelEl = this.parentElement.querySelector(".list_panel");
            thisListPanelEl.classList.toggle("visible");
        });
    }

    for (var i = 0; i < listPanelElementsLength; i++) {
        listPanelElements[i].addEventListener("click", function () {
            var thisListPanelEl = this.parentElement;
            var thisDropDownListEl = thisListPanelEl.parentElement;
            var thisListLabelEl = thisDropDownListEl.querySelector(".list_label");
            thisListPanelEl.classList.toggle("visible");
            var dataType = thisListPanelEl.dataset.type;
            var dataPrice = this.dataset.price;


            if(dataType == 'chair'){
                chairNameEl.innerText = "Chair " + this.innerText;
                chairPriceEl.innerText = dataPrice;
                chairPrice = dataPrice;
            }
            else if (dataType =='color'){
                colorNameEl.innerText = this.innerText;
                colorPriceEl.innerText = dataPrice;
                colorPrice = dataPrice;
            }
            else if (dataType =='pattern'){
                patternNameEl.innerText = this.innerText;
                patternPriceEl.innerText = dataPrice;
                patternPrice = dataPrice;
            }

            updateSum();
            thisListLabelEl.innerText = this.innerText;
            thisListLabelEl.classList.add("selected");
        });
    }

    var transportCheckbox = document.getElementById("transport");

    transportCheckbox.addEventListener("click", function () {
        var isTransportChecked= transportCheckbox.checked;
        var dataPrice = this.dataset.transportPrice;
        if(isTransportChecked){
            transportNameEl.innerText = "Transport";
            transportPriceEl.innerText = dataPrice;
            transportPrice = parseInt(dataPrice);
        } else {
            transportNameEl.innerText = "";
            transportPriceEl.innerText = "";
            transportPrice = 0;
        }
        updateSum();

    });
});