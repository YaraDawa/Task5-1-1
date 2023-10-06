const result = document.querySelector(".result");
const bottons = document.querySelectorAll(".bttn");

bottons.forEach(botton => {
    botton.addEventListener("click", () => {
        const bottonNumber = botton.textContent;

        if (botton.id === "c") {
            result.textContent = "0";
            return;
        }

        if (botton.id === "delete") {
            if (result.textContent.length === 1 || result.textContent === "Error!") {
                result.textContent = "0";
            } else {
                result.textContent = result.textContent.slice(0, -1);
            }
            return;
        }

        if (botton.id === "submit") {
            try {
                result.textContent = eval(result.textContent);
            } catch {
                result.textContent = "Error!";
            }
            return;
        }

        if (result.textContent === "0" || result.textContent === "Error!") {
            result.textContent = bottonNumber;
        } else {
            result.textContent += bottonNumber;
        }
    })
})