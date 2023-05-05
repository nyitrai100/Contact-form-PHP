
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");


form.onsubmit = (e) =>{
    e.preventDefault();
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "message.php", true);
    xhr.onload = () =>{

    }

    xhr.send()
}