
 document.body.classList.add(localStorage.getItem("pageColor"))

let colorSwitcherEle=document.querySelectorAll('.color-switcher li');
let dataColor=[];

for(let i = 0; i< colorSwitcherEle.length; i++){
    dataColor.push(colorSwitcherEle[i].getAttribute('data-color'));

    colorSwitcherEle[i].addEventListener('click',function(){
        document.body.classList.remove(...dataColor);
        document.body.classList.add(this.getAttribute('data-color'));
        localStorage.setItem("pageColor", this.getAttribute('data-color'));
    },false)
}
