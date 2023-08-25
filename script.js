function navShow(x) {
    var linkMain = document.getElementById("link__main");
    var linkAbout = document.getElementById("link__about");
    var linkGallery = document.getElementById("link__gallery");
    var linkContacts = document.getElementById("link__contacts");
    var linkKassy = document.getElementById("link__kassy");
    var navBar = document.getElementById("navBar__block");
    x.classList.toggle("change");
    if (navBar.style.height != "350px"){
        navBar.style.height = "350px";
        setTimeout(() => {
                linkMain.style.display = "block";
                linkAbout.style.display = "block";
                linkGallery.style.display = "block";
                linkContacts.style.display = "block";
                linkKassy.style.display = "block";
        }, 100)
    }
    else {
        navBar.style.height = "50px";
        linkMain.style.display = "none";
        linkAbout.style.display = "none";
        linkGallery.style.display = "none";
        linkContacts.style.display = "none";
        linkKassy.style.display = "none";
    }        
}