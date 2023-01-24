let btn = document.querySelector('.arrow-icon')
let inputText = document.querySelector('main__email')

function ValidateEmail(inputText)
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(!inputText.value.match(mailformat))
{
    alert("You have entered an invalid email address!");  

}
else
{

}
}
alert("You have entered a valid email address!");

btn.addEventListener('click',ValidateEmail){
    
}