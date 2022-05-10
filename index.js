"use strict";

class NewDiv {
    constructor(options) {
        this.name = "";
        this.container = options.container;
        this.perentContainer = options.perentContainer;
        this.class = options.class;
        this.color = options.color;
        this.height = options.height;
        this.width = options.width;
    }

    createTextH() {
        const bodyContainer = document.getElementsByTagName('body')[0]
        const newEl = document.createElement(`${this.container}`)
        newEl.classList = `${this.class}`;
        newEl.innerText = `Virtual Keyboard`;
        bodyContainer.appendChild(newEl);
    }

    createTextP() {
        const bodyContainer = document.getElementsByTagName('body')[0]
        const newEl = document.createElement(`${this.container}`)
        newEl.classList = `${this.class}`;
        newEl.innerText = `Переключение языка Alt + Ctrl, включение RGB '☀'`;
        bodyContainer.appendChild(newEl);
    }

    createTextA() {
        const bodyContainer = document.getElementsByTagName('body')[0]
        const newEl = document.createElement(`${this.container}`)
        newEl.classList = `${this.class}`;
        newEl.href = `https://hospelthiv.github.io/Virtual_Keyboard/`;
        newEl.innerText = `Cсылка на личный репозиторий`;
        bodyContainer.appendChild(newEl);
    }

    createDivBoard() {
        const bodyContainer = document.getElementsByTagName('body')[0]
        const newEl = document.createElement(`${this.container}`)
        newEl.classList = `${this.class}`;
        newEl.style.width = `${this.width}`;
        newEl.style.height = `${this.height}`;
        bodyContainer.appendChild(newEl);
    }

    createDivKey(datasetKey, name, width, height) {
        const newEl = document.createElement(`${this.container}`);
        const perentEl = document.getElementsByClassName(`${this.perentContainer}`)[0];
        newEl.classList = `${this.class}`;
        newEl.style.background = `${this.color}`;
        if (width > 0) {
            newEl.style.width = `${width}px`
        } else {
            newEl.style.width = `${this.width}`;
        }
        if (height > 0) {
            newEl.style.height = `${height}px`
        } else {
            newEl.style.height = `${this.height}`;
        }
        newEl.dataset.key = `${datasetKey}`;
        newEl.innerText = `${name}`;
        perentEl.appendChild(newEl);
    }

    clickKey(event) {
        // console.log(event);
    }

}

class NewDivText extends NewDiv {
    constructor(options) {
        super(options);
        this.round = options.round;
        this.top = options.top;
        this.left = options.left;
    }
}

const arrayKey = ["Escape", "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", , "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ContextMenu", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight",
];
const arrayKeyClick = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash",];
const ruLang = `ё1234567890-=йцукенгшщзхъ\\фывапролджэячсмитьбю.`;
const euLang = `\`1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./`;
const ruLangShift = `Ё!"№;%:?*()_+ЙЦУКЕНГШЩЗХЪ/ФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,`;
const euLangShift = `~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?`;

let langShift = ['ru', '', '', '',];
let textPosition = 0;

let arrayKeyDef = [];

const textArea = new NewDivText({
    perentContainer: "body",
    container: "textarea",
    class: "input_text",
    round: "30px",
    height: "150px",
    width: "700px",
})

const keyBoard = new NewDiv({
    perentContainer: "body",
    class: "container_board",
    container: "div",
})

const textH1 = new NewDiv({
    perentContainer: "body",
    class: "container_textH1",
    container: "h1",
})

const textP = new NewDiv({
    perentContainer: "body",
    class: "container_textP",
    container: "p",
})
const textA = new NewDiv({
    perentContainer: "body",
    class: "container_textA",
    container: "a",
})

const buttonKeys = new NewDiv({
    perentContainer: "container_board",
    container: "button",
    class: "button_key",
})

textH1.createTextH();
textArea.createDivBoard();
keyBoard.createDivBoard();
textP.createTextP();
textA.createTextA();

arrayKey.forEach(element => {
    // 1 
    if (element.indexOf("Escape") >= 0) {
        buttonKeys.createDivKey(element, 'ESC', 70);
    }
    if (element.indexOf("Backquote") >= 0) {
        buttonKeys.createDivKey(element, '`');
    }
    if (element.indexOf("Minus") >= 0) {
        buttonKeys.createDivKey(element, '-');
    }
    if (element.indexOf("Equal") >= 0) {
        buttonKeys.createDivKey(element, '=');
    }
    if (element.indexOf("Backspace") >= 0) {
        buttonKeys.createDivKey(element, '↤', 70);
    }
    // 2
    if (element.indexOf("BracketLeft") >= 0) {
        buttonKeys.createDivKey(element, '[');
    }
    if (element.indexOf("BracketRight") >= 0) {
        buttonKeys.createDivKey(element, ']');
    }
    if (element.indexOf("Tab") >= 0) {
        buttonKeys.createDivKey(element, '↹', 90);
    }
    if (element.indexOf("Backslash") >= 0) {
        buttonKeys.createDivKey(element, '\\');
    }
    if (element.indexOf("Delete") >= 0) {
        buttonKeys.createDivKey(element, 'Del');
    }

    // 3
    if (element.indexOf("CapsLock") >= 0) {
        buttonKeys.createDivKey(element, 'CapsLock', 120);
    }
    if (element.indexOf("Semicolon") >= 0) {
        buttonKeys.createDivKey(element, ';');
    }
    if (element.indexOf("Quote") >= 0) {
        buttonKeys.createDivKey(element, '\'');
    }
    if (element.indexOf("Enter") >= 0) {
        buttonKeys.createDivKey(element, '↵', 140);
    }
    // 4
    if (element.indexOf("Comma") >= 0) {
        buttonKeys.createDivKey(element, ',');
    }
    if (element.indexOf("Period") >= 0) {
        buttonKeys.createDivKey(element, '.');
    }
    if (element.indexOf("Slash") >= 0) {
        buttonKeys.createDivKey(element, '/');
    }
    if (element.indexOf("ShiftRight") >= 0) {
        buttonKeys.createDivKey(element, 'Shift');
    }
    if (element.indexOf("ShiftLeft") >= 0) {
        buttonKeys.createDivKey(element, 'Shift', 210);
    }
    if (element.indexOf("ArrowUp") >= 0) {
        buttonKeys.createDivKey(element, '↑');
    }
    // 5
    if (element.indexOf("ControlLeft") >= 0) {
        buttonKeys.createDivKey(element, 'Ctrl', 70);
    }
    if (element.indexOf("MetaLeft") >= 0) {
        buttonKeys.createDivKey(element, 'Win', 80);
    }
    if (element.indexOf("AltLeft") >= 0) {
        buttonKeys.createDivKey(element, 'Alt', 60);
    }
    if (element.indexOf("Space") >= 0) {
        buttonKeys.createDivKey(element, ' ', 300);
    }
    if (element.indexOf("AltRight") >= 0) {
        buttonKeys.createDivKey(element, 'Alt', 60);
    }
    if (element.indexOf("ContextMenu") >= 0) {
        buttonKeys.createDivKey(element, '☀');
    }
    if (element.indexOf("ControlRight") >= 0) {
        buttonKeys.createDivKey(element, 'Ctrl', 70);
    }
    if (element.indexOf("ArrowLeft") >= 0) {
        buttonKeys.createDivKey(element, '←');
    }
    if (element.indexOf("ArrowDown") >= 0) {
        buttonKeys.createDivKey(element, '↓');
    }
    if (element.indexOf("ArrowRight") >= 0) {
        buttonKeys.createDivKey(element, '→');
    }
    // 
    if (element.indexOf("Digit") >= 0) {
        buttonKeys.createDivKey(element, element[element.length - 1]);
        // buttonKeys.createDivKey(element[element.length - 1]);
    }
    if (element.indexOf("Key") >= 0) {
        buttonKeys.createDivKey(element, element[element.length - 1].toLowerCase());
    }
})


document.onkeydown = function (event) {
    // if (event.ctrlKey && (event.keyCode == 85) || (event.ctrlKey && event.shiftKey && (event.keyCode == 73)) || event.keyCode == 123) {
    return false
    // }
}

// document.oncontextmenu = function () {
//     return false
// }

window.addEventListener("keydown", (event) => {

    if (arrayKeyDef.indexOf(event.code) < 0) {
        arrayKeyDef.push(event.code);
        document.querySelectorAll(".button_key").forEach(element => {
            if (element.dataset.key == event.code && element.classList.contains('button_key_active') != "button_key_active") {
                element.classList.toggle('button_key_active');
            }
        });
    }

    if (["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"].indexOf(event.code) >= 0) {
        let arrow = ['↑', '←', '↓', '→'][["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"].indexOf(event.code)]
        const textAr = document.getElementsByClassName(`input_text`)[0];
        const textFirst = textAr.value.slice(0, textPosition);
        const textLast = textAr.value.substring(textPosition, textAr.value.length)

        textAr.value = `${textFirst}${arrow}${textLast}`
        textPosition += 1;
        textAr.selectionStart = textPosition;
        textAr.selectionEnd = textPosition;
    }

    if (event.code == "Space") {
        const textAr = document.getElementsByClassName(`input_text`)[0];
        const textFirst = textAr.value.slice(0, textPosition);
        const textLast = textAr.value.substring(textPosition, textAr.value.length)

        textAr.value = `${textFirst} ${textLast}`
        textPosition += 1;
        textAr.selectionStart = textPosition;
        textAr.selectionEnd = textPosition;
    }

    if (event.code == "Tab") {
        const textAr = document.getElementsByClassName(`input_text`)[0];
        const textFirst = textAr.value.slice(0, textPosition);
        const textLast = textAr.value.substring(textPosition, textAr.value.length)

        textAr.value = `${textFirst}\t${textLast}`
        textPosition += 1;
        textAr.selectionStart = textPosition;
        textAr.selectionEnd = textPosition;
    }

    if (event.code == "Enter") {
        const textAr = document.getElementsByClassName(`input_text`)[0];
        const textFirst = textAr.value.slice(0, textPosition);
        const textLast = textAr.value.substring(textPosition, textAr.value.length)

        textAr.value = `${textFirst}\n${textLast}`
        textPosition += 1;
        textAr.selectionStart = textPosition;
        textAr.selectionEnd = textPosition;
    }

    if (event.code == "Delete") {
        const textAr = document.getElementsByClassName(`input_text`)[0];
        if (textPosition != textAr.value.length) {
            const textFirst = textAr.value.slice(0, textPosition);
            const textLast = textAr.value.substring(textPosition + 1, textAr.value.length)
            textAr.value = `${textFirst}${textLast}`
            // textPosition = 1;
            textAr.selectionStart = textPosition;
            textAr.selectionEnd = textPosition;
        }
    }

    if (event.code == "Backspace") {
        if (textPosition != 0) {
            const textAr = document.getElementsByClassName(`input_text`)[0];
            const textFirst = textAr.value.slice(0, textPosition - 1);
            const textLast = textAr.value.substring(textPosition, textAr.value.length)
            textAr.value = `${textFirst}${textLast}`
            textPosition -= 1;
            textAr.selectionStart = textPosition;
            textAr.selectionEnd = textPosition;
        }
    }

    if (event.code == "ControlRight" || event.code == "ControlLeft" && langShift[1] == '') {
        langShift[1] = 'Ctrl'
        if (langShift[1] == 'Ctrl' && langShift[2] == 'Alt') {
            langShift[0] == 'ru' ? langShift[0] = 'eu' : langShift[0] = 'ru';
        }
    }

    if (event.code == "AltRight" || event.code == "AltLeft" && langShift[2] == '') {
        langShift[2] = 'Alt'
        if (langShift[1] == 'Ctrl' && langShift[2] == 'Alt') {
            langShift[0] == 'ru' ? langShift[0] = 'eu' : langShift[0] = 'ru';
        }
    }
    if (event.code == "ShiftRight" || event.code == "ShiftLeft" && langShift[3] == '') {
        langShift[3] = 'Shift'
    }

    if (arrayKeyClick.indexOf(event.code) >= 0) {
        const textAr = document.getElementsByClassName(`input_text`)[0];
        const textFirst = textAr.value.slice(0, textPosition);
        const textLast = textAr.value.substring(textPosition, textAr.value.length)

        // console.log(langShift)
        let langShiftKey = '';
        if (langShift[0] == 'ru') langShiftKey = ruLang[arrayKeyClick.indexOf(event.code)];
        if (langShift[0] == 'ru' && langShift[3] == 'Shift') langShiftKey = ruLangShift[arrayKeyClick.indexOf(event.code)];
        if (langShift[0] == 'eu') langShiftKey = euLang[arrayKeyClick.indexOf(event.code)];
        if (langShift[0] == 'eu' && langShift[3] == 'Shift') langShiftKey = euLangShift[arrayKeyClick.indexOf(event.code)];

        // textAr.value = `${textFirst}${event.key}${textLast}`
        textAr.value = `${textFirst}${langShiftKey}${textLast}`
        textAr.selectionStart = textPosition + 1;
        textAr.selectionEnd = textPosition + 1;

        textPosition += 1;
    }

    if (event.code == 'ContextMenu') {
        const rgbText = document.querySelectorAll(".button_key");
        rgbText.forEach(element => {
            element.classList.toggle('animation_rgb');
        });
    }

})

window.addEventListener("click", (event) => {
    // console.log(event)
    if (event.target.classList[0] == "button_key") {

        if (["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"].indexOf(event.target.dataset.key) >= 0) {
            let arrow = ['↑', '←', '↓', '→'][["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"].indexOf(event.target.dataset.key)]
            const textAr = document.getElementsByClassName(`input_text`)[0];
            const textFirst = textAr.value.slice(0, textPosition);
            const textLast = textAr.value.substring(textPosition, textAr.value.length)

            textAr.value = `${textFirst}${arrow}${textLast}`
            textPosition += 1;
            textAr.selectionStart = textPosition;
            textAr.selectionEnd = textPosition;
        }

        if (event.target.dataset.key == "Space") {
            const textAr = document.getElementsByClassName(`input_text`)[0];
            const textFirst = textAr.value.slice(0, textPosition);
            const textLast = textAr.value.substring(textPosition, textAr.value.length)

            textAr.value = `${textFirst} ${textLast}`
            textPosition += 1;
            textAr.selectionStart = textPosition;
            textAr.selectionEnd = textPosition;
        }

        if (event.target.dataset.key == "Tab") {
            const textAr = document.getElementsByClassName(`input_text`)[0];
            const textFirst = textAr.value.slice(0, textPosition);
            const textLast = textAr.value.substring(textPosition, textAr.value.length)

            textAr.value = `${textFirst}\t${textLast}`
            textPosition += 1;
            textAr.selectionStart = textPosition;
            textAr.selectionEnd = textPosition;
        }

        if (event.target.dataset.key == "Backspace") {
            if (textPosition != 0) {
                const textAr = document.getElementsByClassName(`input_text`)[0];
                const textFirst = textAr.value.slice(0, textPosition - 1);
                const textLast = textAr.value.substring(textPosition, textAr.value.length)
                textAr.value = `${textFirst}${textLast}`
                textPosition -= 1;
                textAr.selectionStart = textPosition;
                textAr.selectionEnd = textPosition;
            }
        }

        if (event.target.dataset.key == "Enter") {
            const textAr = document.getElementsByClassName(`input_text`)[0];
            const textFirst = textAr.value.slice(0, textPosition);
            const textLast = textAr.value.substring(textPosition, textAr.value.length)

            textAr.value = `${textFirst}\n${textLast}`
            textPosition += 1;
            textAr.selectionStart = textPosition;
            textAr.selectionEnd = textPosition;
        }

        if (event.target.dataset.key == "Delete") {
            const textAr = document.getElementsByClassName(`input_text`)[0];
            if (textPosition != textAr.value.length) {
                const textFirst = textAr.value.slice(0, textPosition);
                const textLast = textAr.value.substring(textPosition + 1, textAr.value.length)
                textAr.value = `${textFirst}${textLast}`
                // textPosition = 1;
                textAr.selectionStart = textPosition;
                textAr.selectionEnd = textPosition;
            }
        }

        if (arrayKeyClick.indexOf(event.target.dataset.key) >= 0) {
            const textAr = document.getElementsByClassName(`input_text`)[0];
            const textFirst = textAr.value.slice(0, textPosition);
            const textLast = textAr.value.substring(textPosition, textAr.value.length)

            let langShiftKey = '';
            if (langShift[0] == 'ru') langShiftKey = ruLang[arrayKeyClick.indexOf(event.target.dataset.key)];
            if (langShift[0] == 'ru' && langShift[3] == 'Shift') langShiftKey = ruLangShift[arrayKeyClick.indexOf(event.target.dataset.key)];
            if (langShift[0] == 'eu') langShiftKey = euLang[arrayKeyClick.indexOf(event.target.dataset.key)];
            if (langShift[0] == 'eu' && langShift[3] == 'Shift') langShiftKey = euLangShift[arrayKeyClick.indexOf(event.target.dataset.key)];

            textAr.value = `${textFirst}${langShiftKey}${textLast}`

            // textAr.value = `${textFirst}${event.target.innerText}${textLast}`

            textAr.selectionStart = textPosition + 1;
            textAr.selectionEnd = textPosition + 1;

            textPosition += 1;
        }

        if (event.target.dataset.key == 'ContextMenu') {
            const rgbText = document.querySelectorAll(".button_key");
            rgbText.forEach(element => {
                element.classList.toggle('animation_rgb');
            });
        }
    }
})


window.addEventListener("keyup", (event) => {

    if (arrayKeyDef.indexOf(event.code) >= 0) {
        arrayKeyDef[arrayKeyDef.indexOf(event.code)] = '';
        if (arrayKeyDef.length) arrayKeyDef = [];
    }

    if (event.code == "ControlRight" || event.code == "ControlLeft") {
        langShift[1] = ''

    }

    if (event.code == "AltRight" || event.code == "AltLeft") {
        langShift[2] = ''

    }

    if (event.code == "ShiftRight" || event.code == "ShiftLeft") {
        langShift[3] = ''
    }

    document.querySelectorAll(".button_key").forEach(element => {
        if (element.dataset.key == event.code && element.classList.contains('button_key_active') != "button_key_active") {
            element.classList.toggle('button_key_active');
        }
    });

})

window.addEventListener("mousedown", (event) => {

    if (event.target.classList[0] == "button_key") {
        if (event.target.dataset.key == "ShiftRight" || event.target.dataset.key == "ShiftLeft" && langShift[3] == '') {
            langShift[3] = 'Shift'
        }
    }

    if (event.target.classList[0] == "input_text") {
        const textAr = document.getElementsByClassName(`input_text`)[0];
        textPosition = textAr.selectionStart
    }
})

window.addEventListener("mouseup", (event) => {

    if (event.target.classList[0] == "button_key") {
        if (event.target.dataset.key == "ShiftRight" || event.target.dataset.key == "ShiftLeft") {
            langShift[3] = ''
        }
    }

    if (event.target.classList[0] == "input_text") {
        const textAr = document.getElementsByClassName(`input_text`)[0];
        textPosition = textAr.selectionStart
    }

})
