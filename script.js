
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");


form.onsubmit = (e) =>{
    e.preventDefault();
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "message.php", true);
    xhr.onload = () =>{
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
            if(response.indexof("Email and password field is required") != -1 || response.indexof("Enter a valid email address!") != -1 || response.indexof("Sorry, failed to send your message!") != -1 ){
                statusTxt.style.color = "red";
            }
            statusTxt.innerText = response;
        }
    }

    let formData = new FormData(form);

    xhr.send(formData);
}