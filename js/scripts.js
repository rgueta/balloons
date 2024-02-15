// navbar = document.querySelector('.topnav').querySelectorAll('a');
// navbar.forEach(element => {
//     element.addEventListener('click',function(){
//         navbar.forEach(nav=>nav.classList.remove('active'));
//         this.classList.add('active')
//     })
// });

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}