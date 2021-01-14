let textblock = document.querySelector(".textblock");
let buttons = document.querySelector(".buttons");
let editBtn = document.querySelector(".editBtn");
let saveBtn = document.querySelector(".saveBtn");
let cancelBtn = document.querySelector(".cancelBtn");

// подгрузка последней версии сохраненного текста
let text = localStorage.getItem("textIn");
console.log(text);
document.querySelector(".textblock").textContent = text;

// вешаем обработчик событий click на кнопки
buttons.addEventListener("click", function(ev) {
    // если нажали внутри блока кнопок, но не по кнопке, тогда не реагируем
    if (ev.target.tagName != "BUTTON") {
        return false;
    }
    // если нажата кнопка "Редактировать"
    if (ev.target.classList.contains('editBtn')) {
        // окрашивание кнопки в серый цвет
        ev.target.classList.add("disabledEditBtn");
        // отключение disabled
        saveBtn.removeAttribute("disabled");
        cancelBtn.removeAttribute("disabled");   
        // включение возможности редактировать текст
        textblock.setAttribute("contenteditable", "true");
        // выделение рамки текстового редактора
        textblock.focus();
    } else {
        // если нажата кнопка "Сохранить"
        if (ev.target.classList.contains("saveBtn")) {
            // отключения возможности редактировать текст
            textblock.setAttribute("contenteditable", "false");
            // окрашивание кнопки в темно-синий цвет
            ev.target.classList.add("disabledSaveBtn");
            // изменение текста с "Сохранить" на "Сохранено"
            ev.target.innerHTML = "Сохранено";
            // сохранение текста в localStorage
            localStorage.setItem("textIn", document.querySelector(".textblock").textContent);
            // отключение кнопки "Сохранить"
            saveBtn.setAttribute("disabled", "true");
        }
        // если нажата кнопка "Отмена"
        if (ev.target.classList.contains("cancelBtn")) {
            // отключение кнопки "Сохранить"
                cancelBtn.setAttribute("disabled", "true");  
            // если есть текст в localStorage, то подгружаем его
            if (localStorage.getItem("textIn") !== null) {
                document.querySelector('.textblock').textContent = localStorage.getItem("textIn");
            }
        }
    }
});
