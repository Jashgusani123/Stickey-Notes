let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
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
    div.style.fontSize = " x-large";
    div.style.fontFamily = "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
    div.style.backgroundColor = `${bgcolor.value}`
    if(bgcolor.value == "#000000"){
        div.style.color ="white";
    }
    div.innerText = `${text.value}`;
    // console.log(text);
    op.prepend(div);
    document.getElementById("textarea").value = "";
})
