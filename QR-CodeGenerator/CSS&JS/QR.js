let imagebox = document.getElementById("qrhere");
let texttype = document.getElementById("typein");
let imagehere = document.getElementById("qrimg");

function gen(){
    if(texttype.value.length > 0){
    imagehere.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + texttype.value;
    imagebox.classList.add("show-img");
    }

    else{
        typein.classList.add('error');
        setTimeout(() => {
            typein.classList.remove('error');
        }, 1000);

    }
}