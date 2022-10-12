let input = document.querySelector(".input");
let add = document.querySelector(".add");
let ul = document.createElement("ul");


add.onclick = function() {
    if ( input.value !== "") {
    let tasks = document.querySelector(".tasks")
    tasks.style.cssText = " height:90vh "
    tasks.appendChild(ul)
    let li = document.createElement("li");
    li.style.cssText = "margin: 20px 20px; border-radius: 20px ; background-color: white; padding: 10px 10px;     font-weight: 700; display:flex;     justify-content: space-between;"
    ul.appendChild(li)
    let textSpan = document.createElement("span");
    li.appendChild(textSpan);
    let imgs = document.createElement("div");
    imgs.className = "imgs"
    li.appendChild(imgs)
    let imgRemove = document.createElement("img");
    imgRemove.src = "./remove-icon-png-7.png"
    imgRemove.style.cssText = "margin-right:5px"
    let imgDone = document.createElement("img");
    imgDone.src = "./640px-Sign-check-icon.png"
    imgRemove.onclick = function() {
        li.style.cssText = "display:none"
    }
    imgDone.onclick = function() {
        li.style.cssText = "opacity: 0.5;  margin: 20px 20px; border-radius: 20px ; background-color: white; padding: 10px 10px;     font-weight: 700; display:flex;     justify-content: space-between;"
    }
    imgs.appendChild(imgRemove);
    imgs.appendChild(imgDone);
    let value = document.createTextNode(input.value);
    textSpan.appendChild(value)
    input.value = ""
    }
}