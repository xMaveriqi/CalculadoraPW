let form = document.querySelector(".form");
let calc = "";
let result = "";
let htmlResult = document.querySelector(".htmlResult");

let videoContainer = document.createElement("div");
videoContainer.classList.add("video");
videoContainer.style.display = "none";
videoContainer.innerHTML = `
  <video autoplay loop muted>
    <source src="seu-video.mp4" type="video/mp4">
  </video>
`;
document.body.appendChild(videoContainer);

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let submitter = event.submitter.name
    if (submitter == "=") {
        result = eval(calc);
        htmlResult.innerHTML = `${result}`;

        // Verifica se o cálculo é "68-1"
        if (calc === "68-1") {
            videoContainer.style.display = "block"; // Mostra o vídeo
        } else {
            videoContainer.style.display = "none"; // Esconde o vídeo
        }
    } else if (submitter == "c") {
        result = "";
        calc = "";
        htmlResult.innerHTML = `0`;
        videoContainer.style.display = "none"; // Esconde o vídeo ao limpar
    } else {
        calc = calc + submitter;
        htmlResult.innerHTML = `${calc}`
    }


})