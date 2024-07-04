// Obtener referencias a los elementos del DOM
const inputText = document.getElementById('input-text');
const encryptButton = document.getElementById('encrypt-btn');
const decryptButton = document.getElementById('decrypt-btn');
const resultContainer = document.getElementById('result-container');
const encryptedText = document.getElementById('encrypted-text');
const copyButton = document.getElementById('copy-button');
const noContent = document.getElementById('no-content');

// Función para mostrar el resultado y ocultar el mensaje de "no contenido"
function showResult(text) {
    encryptedText.textContent = text; // Establece el texto encriptado/desencriptado
    resultContainer.style.display = 'block'; // Muestra el contenedor del resultado
    noContent.style.display = 'none'; // Oculta el mensaje de "no contenido"
}

// Función para ocultar el resultado y mostrar el mensaje de "no contenido"
function hideResult() {
    resultContainer.style.display = 'none'; // Oculta el contenedor del resultado
    noContent.style.display = 'block'; // Muestra el mensaje de "no contenido"
}

function encrypt(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Evento para el botón de encriptar
encryptButton.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    if (text.trim() !== '') { // Verifica si hay texto para encriptar
        const encrypted = encrypt(text);
        showResult(encrypted); // Muestra el resultado encriptado
        inputText.value = ''; // Borra el campo de texto
    } else {
        hideResult(); // Si no hay texto, oculta el resultado
    }
});

// Evento para el botón de desencriptar
decryptButton.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    if (text.trim() !== '') {
        const decrypted = decrypt(text);
        showResult(decrypted);
        inputText.value = ''; // Borra el campo de texto
    } else {
        hideResult();
    }
});

// Evento para el botón de copiar
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(encryptedText.textContent) // Copia el texto al portapapeles
        .then(() => {
            alert('Texto copiado al portapapeles');
            inputText.value = encryptedText.textContent;
            inputText.focus();
        })
        .catch(err => console.error('Error al copiar: ', err)); // Maneja errores si los hay
});

// Establece el estado inicial ocultando el resultado
hideResult();
