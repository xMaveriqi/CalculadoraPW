let form = document.querySelector(".form");
let calc = "";
let htmlResult = document.querySelector(".htmlResult");

const overlay = document.querySelector(".sixseven"); // vídeo secreto
const videosecreto = overlay.querySelector("video"); // mexe so no video
overlay.style.display = "none"; // esconde vídeo
const videofundo = document.querySelector(".video"); // vídeo de fundo

form.addEventListener("submit", (event) => { // submit do formulario
    event.preventDefault(); // evita o formulario recarregar a pagina

    let submitter = event.submitter.name; // pega o nome do botão clicado

    if (submitter === "=") { // se for =
        if (calc === "67") { // codigo secreto 💀💀💀💀💀💀💀💀
            overlay.style.display = "flex"; // mostra o video
            videofundo.style.display = "none"; // esconde video de fundo
            videosecreto.currentTime = 0; // reincia o video do comeco 

            setTimeout(() => { // depois do tempo
                overlay.style.display = "none"; // esconde o video secreto
                videofundo.style.display = "block"; // volta o fundo
            }, 10000); // duração do vídeo secreto
        }

        let result = eval(calc); // calcula resultado
        htmlResult.innerHTML = result; // mostra resultado
        calc = ""; // reseta apos apertar =
    } else if (submitter === "c") { // se apertar C
        calc = ""; // reseta calculo
        htmlResult.innerHTML = "0"; // mostra 0

    } else {
        // adiciona valor do botão ao cálculo
        calc += submitter; // adicona o valor do botao ao calculo
        htmlResult.innerHTML = calc; // mostra o calculo atual
    }
});
