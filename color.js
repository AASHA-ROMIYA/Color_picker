document.addEventListener("DOMContentLoaded",()=>{

const PICKER=document.getElementById('PICKER');
const text=document.getElementById('text');
const body=document.getElementById('body');
const button=document.getElementById('button')
text.innerText="background-color:#00000;";

body.style.backgroundColor=PICKER.innerText;
function update(){
    pic_color=PICKER.value;
    body.style.backgroundColor=pic_color;

    //textArea content
    content=` background-color:${pic_color}; `
    text.innerText=content;
    
}

//input color picking
PICKER.addEventListener("change",update);
PICKER.addEventListener("click",update);
// PICKER.addEventListener("Focus",update);
// PICKER.addEventListener("Keypress",update);

// copy code
button.addEventListener('click',()=>{
    document.querySelector('textarea').select();
    document.execCommand('copy');
    alert("your code copied!!");
  });
})