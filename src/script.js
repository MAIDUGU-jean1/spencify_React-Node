function ToogleMenu(){
    hamburgerBtn = document.getElementById("hamburger")
    hiddenNav = document.getElementById("hidden-nav")

    hamburgerBtn.addEventListener("click", ()=>{
        if(hiddenNav.style.display === "none"){
            hiddenNav.style.display = "block"
        }else{
            hiddenNav.style.display = "none"
        }
    })
}