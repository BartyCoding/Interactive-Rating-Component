const buttons = Array.from(document.querySelectorAll(".number"))
const submit = document.querySelector("#submit")

let current = 0

for (let button of buttons) {
    button.addEventListener("click", e => {
        current = parseInt(button.id.slice(3))
        for (let btn of buttons) {
            btn.classList.remove("selected")
        }
        button.classList.toggle("selected")
    })
}

submit.addEventListener("click", e => {
    if (current !== 0) {
        document.querySelector(".rating").classList.add("hidden")
        document.querySelector(".thank-you").classList.remove("hidden")
        document.querySelector("#rating").innerText = current
    }
})