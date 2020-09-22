const TypeWriter = function(txtElement, words, wait=2000){
    this.txtElement=txtElement;
    this.words=words;
    this.txt='';
    this.wordIndex=0;
    this.wait=parseInt(wait, 10);
    this.type();
    this.isDeleting= false;
};
//type method
TypeWriter.prototype.type = function() {
    const current= this.wordIndex % this.words.length;

    const fullTxt = this.words[current];

   if(this.isDeleting){
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else{
        this.txt = fullTxt.substring(0, this.txt.length + 1);
   }
   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /= 2;
    }
    if(!this.isDeleting && this.txt === fullTxt){
        typeSpeed = this.wait;
        this.isDeleting=true;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed=500;
    }
    setTimeout(() => this.type(), typeSpeed);
}
//init on DOM load
document.addEventListener('DOMContentLoaded', init);

//init App
function init(){
    const txtElement = document.querySelector('.text-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}

//accordion for the contacts and about sections
$(document).ready(function(){
    $("#panels, #contacts").accordion({
        collapsible: true, 
        active: 0,
        animate: 500,
        heightStyle: true
    });  
});
$(document).ready(function(){
    $(".col-md-4").mouseenter(function(){
        $(this).find("img").finish().animate({
            opacity: "0.2"     
        });
        $("#overlay1").show()
    }).mouseleave(function(){
        $(this).find("img").finish().animate({
            opacity: "1"
        });
        $("#overlay1").hide();
    });
});

$(document).ready(function(){
    $(".col-md-4").mouseenter(function(){
        $(this).find("img").finish().animate({
            opacity: "0.2"     
        });
        $("#overlay2").show()
    }).mouseleave(function(){
        $(this).find("img").finish().animate({
            opacity: "1"
        });
        $("#overlay2").hide();
    });
});

$(document).ready(function(){
    $(".col-md-4").mouseenter(function(){
        $(this).find("img").finish().animate({
            opacity: "0.2"     
        });
        $("#overlay3").show()
    }).mouseleave(function(){
        $(this).find("img").finish().animate({
            opacity: "1"
        });
        $("#overlay3").hide();
    });
});






