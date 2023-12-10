const toggleButton=document.getElementById('togglebutton');
const navList=document.getElementById('navlist'); 

toggleButton.addEventListener('click',() =>{
  navList.classList.toggle('active');

})
