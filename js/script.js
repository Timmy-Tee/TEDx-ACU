function shownav(){
    document.getElementById("nav").style.display = "flex";
}
function closenav(){
    document.getElementById("nav").style.display = "none";
}


function popupdiv(){
    document.getElementById("popup_ticket").style.display = "flex";
}
function closepopup(){
    document.getElementById("popup_ticket").style.display = "none";
}


// Loader
function preloader(){
    $(() => {
        setInterval(() => {
            let p = $('.preloader');
            p.css('opacity', 0);

            setInterval(
                () => p.remove(),
                parseInt(p.css('--duration')) * 500
            )
        }, 500);
    });
}

setInterval(() => preloader(), 500);



AOS.init({
    offset: 200,
    duration: 400,
    easing: 'ease-in-sine',
    delay: 100,
  });