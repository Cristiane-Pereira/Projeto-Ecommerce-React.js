// /* menu show */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav =document.getElementById(navId)

          if(toggle && nav){
              toggle.addEventListener('click',() =>{
                 nav.classList.toggle('show')
              })
          }
}

showMenu('nav_toggle','nav-menu')

// remove menu mobile
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
        
}
navLink.forEach(N => N.addEventListener('click',linkAction))