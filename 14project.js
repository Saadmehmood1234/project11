const mybutton=document.getElementById("mybutton");
let mylabel=document.getElementById("mylabel");
let mylabel1=document.getElementById("mylabel1");

mybutton.addEventListener("click",changeColor);
var index=0;
function changeColor(){
    let colors=["red","blue","orange","yellow","green","purple","black","white","gray","brown"];
    const s=index;
    document.getElementsByTagName("body")[0].style.background=colors[index++];
    
    mylabel.innerHTML="Background Color :" + colors[s];
    document.getElementById("mybutton").style.borderColor=colors[index];
    
    const y=index
    mylabel1.innerHTML="Background Color :" + colors[y];
    if(index>colors.length-1){
     index=0;
    }
}