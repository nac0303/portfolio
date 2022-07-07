window.onscroll = function(){
    var height = document.getElementById("header").offsetHeight
    console.log(height)
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(scrollTop)

    if(scrollTop>=height){
        var element = document.getElementById("header");
        element.classList.add("bg-light");
    }
    else if(scrollTop<height){
        var element = document.getElementById("header");
        element.classList.remove("bg-light");
    }
    
}
