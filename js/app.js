document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById("content__text");
    const encryptButton = document.querySelector(".button--encrypt");
    const decryptButton = document.querySelector(".button--decrypt");
    const copyButton = document.querySelector(".button--copy");
    const asideTitle = document.querySelector(".aside__title");
    const asideInfo = document.querySelector(".aside__info");
    const aside = document.querySelector(".aside");

    const encrypt = (text) => {
        let encryptedText = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return encryptedText;
    };

    const decrypt = (text) => {
        let decryptedText = text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return decryptedText;
    };

    const displayMessage = (message, mode) => {
        asideTitle.textContent = "Resultado:";
        asideInfo.textContent = message;
        copyButton.classList.remove("hide");

        if (mode === "encrypt") {
            aside.classList.add("aside--encrypted");
            aside.classList.remove("aside--decrypted");
        } else {
            aside.classList.add("aside--decrypted");
            aside.classList.remove("aside--encrypted");
        }
    };

    encryptButton.addEventListener("click", () => {
        const inputText = textArea.value;
        if (inputText) {
            const encryptedText = encrypt(inputText);
            displayMessage(encryptedText, "encrypt");
        } else {
            alert("Por favor, ingresa un texto para encriptar.");
        }
    });

    decryptButton.addEventListener("click", () => {
        const inputText = textArea.value;
        if (inputText) {
            const decryptedText = decrypt(inputText);
            displayMessage(decryptedText, "decrypt");
        } else {
            alert("Por favor, ingresa un texto para desencriptar.");
        }
    });

    copyButton.addEventListener("click", () => {
        const textToCopy = asideInfo.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert("Texto copiado al portapapeles");
        });
    });
});
