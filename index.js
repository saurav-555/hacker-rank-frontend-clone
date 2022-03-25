var hamburgerBar = document.getElementsByClassName("menu-icon")[0];
var navDrawer = document.getElementsByClassName("nav-drawer")[0];

window.addEventListener('resize' , function(){
    if(this.window.innerWidth > 800){
        navDrawer.style.display = 'none';
    }
});

hamburgerBar.addEventListener('click' , function(evt){
    if(navDrawer.style.display === 'block'){
        navDrawer.style.display = 'none';
    }else{
        navDrawer.style.display = 'block';
    }
    return true;
});