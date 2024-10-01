var Effect = new Typed(".typedText",{
    strings : ["ranjith","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
  })

function sendMail() {
  let data ={
name : document.getElementById("name").value,
email : document.getElementById("email").value,
message : document.getElementById("message").value,
  }
 
  emailjs.send("service_zc2u565","template_mtszdhl",data).then(alert("Email send!!"))
 
}
 
 const menubtn = document.querySelector('.menu-btn')
 const menuicon = document.querySelector('.menu-btn i')
 const dropdownmenu = document.querySelector('.dropdown-menu')

 menubtn.onclick =function(){
  dropdownmenu.classList.toggle('open')
  const isopen= dropdownmenu.classList.contains('open')
menuicon.classList = isopen
? 'bi bi-x-lg'
: 'bi bi-list'

 }