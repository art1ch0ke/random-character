const names = ["Эдвард", "Морган", "Леон", "София", "Аделина"];
const classes = ["Воин", "Маг", "Лучник", "Вор"];
const weapons = ["Меч", "Посох", "Лук", "Кинжал"];
const images = {
    "Воин": "images/warrior.png",
    "Маг": "images/mage.png",
    "Лучник": "images/archer.png",
    "Вор": "images/thief.png"
};

document.querySelector("#generate").addEventListener("click", generateCharacter);

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateCharacter() {
    const character = {
        name: getRandomElement(names),
        charClass: getRandomElement(classes),
        weapon: getRandomElement(weapons),
        image: "",
        introduce: function() {
            return `🛡️ Ваш герой: ${this.name}, ${this.charClass}, ${this.weapon}`;
        }
    };
    character.image = images[character.charClass];
    updateUI(character);
}

function updateUI(character) {
    const output = document.querySelector("#character-text");
    const image = document.querySelector("#character-image");
    const characterBox = document.querySelector("#character-box");

    characterBox.classList.remove("show");
    characterBox.classList.add("hide");

    setTimeout(() => {
        output.textContent = character.introduce();
        image.src = character.image;
        image.alt = character.charClass;

        characterBox.classList.remove("hide");
        void characterBox.offsetWidth;
        characterBox.classList.add("show", "glow");

        setTimeout(() => characterBox.classList.remove("glow"), 1000);
    }, 500);
}
