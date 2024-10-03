function idade() {
    var resposta = document.getElementById("resposta").value;

    var text = ""
    
    if (resposta < 18) {
        text="Você é menor de idade"
    }
    
    else {
        text="Você é maior de idade"
    }

    document.getElementById("text_area").innerText= text
}