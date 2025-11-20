let form = document.querySelector(".form");
let calc = "";
let result = "";
let htmlResult = document.querySelector(".htmlResult");
form.addEventListener("submit", (event) => {
    event.preventDefault()

    let submitter = event.submitter.name
    if (submitter == "=") {
        result = eval(calc);
        htmlResult.innerHTML = `${result}`
    } else if (submitter == "c") {
        result = "";
        calc = "";
        htmlResult.innerHTML = `0`
    }
    else {
        calc = calc + submitter;
        htmlResult.innerHTML = `${calc}`
    }


})