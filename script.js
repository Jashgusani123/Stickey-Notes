let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let size = document.getElementById("fsize");
    let text = document.getElementById("textarea");
    let bgcolor = document.getElementById("incolor");
    let op = document.getElementById("output");
    let div = document.createElement("div");
    div.style.height = "200px";
    div.style.width = " max-content";
    div.style.borderBottom = "10px solid black";
    div.style.borderTop = "10px solid black";
    div.style.borderRadius = "10px";
    div.style.padding = "10px";
    div.style.fontSize = `${size.value}`;
  //console.log(`${size.value}px` )
    div.style.fontFamily = "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
   div.style.backgroundColor = `${bgcolor.value}`
   if(bgcolor.value == "#000000"){
      div.style.color ="white";
     div.style.borderTop = "10px solid red";
     div.style.borderBottom = "10px solid red";
   }
 if(text.value.length <30){
   div.style.width="300px";
 }
  
   div.innerText = `${text.value}`;
  //  console.log(text.value.length);
   op.prepend(div);
    document.getElementById("textarea").value = "";
})