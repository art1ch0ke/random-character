let names = ["Артур", "Эдвард", "Морган", "Леон", "София", "Аделина"];
let classes = ["Воин", "Маг", "Лучник", "Вор"];
let weapons = ["Меч", "Посох", "Лук", "Кинжал"];

let images = {
    "Воин": "images/warrior.png",
    "Маг": "images/mage.png",
    "Лучник": "images/archer.png",
    "Вор": "images/thief.png"
};

document.querySelector("#generate").addEventListener("click", function() {
    let name = names[Math.floor(Math.random() * names.length)];
    let charClass = classes[Math.floor(Math.random() * classes.length)];
    let weapon = weapons[Math.floor(Math.random() * weapons.length)];

    let result = `🛡️ Ваш герой: ${name}, ${charClass}, ${weapon}`;
    let output = document.querySelector("#character-text");
    let image = document.querySelector("#character-image");
    let characterBox = document.querySelector("#character-box");

    characterBox.classList.remove("show");
    characterBox.classList.add("hide");

    setTimeout(()=>{
        // Обновляем текст и картинку
        output.textContent = result;
        image.src = images[charClass];
        image.alt = charClass;

        // Анимация появления
        characterBox.classList.remove("hide");
        void characterBox.offsetWidth; // Перезапускаем анимацию
        characterBox.classList.add("show", "glow");

        // Убираем эффект свечения через 1 секунду
        setTimeout(() => {
            characterBox.classList.remove("glow");
        }, 1000);
    }, 500);

});