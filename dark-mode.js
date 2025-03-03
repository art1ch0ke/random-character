const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", ()=> {
    if(document.body.classList.contains("dark-mode")) {
        //Включаем светлую тему
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        //на светлой теме кнопка должна быть темной
        themeToggle.textContent = "🌙";
        themeToggle.classList.remove("light-mode");
        themeToggle.classList.add("dark-mode");
    }
    else {
        //Включаем тёмную тему для фона
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        //Кнопку делаем наоборот светлой
        themeToggle.textContent = "☀️";
        themeToggle.classList.remove("dark-mode");
        themeToggle.classList.add("light-mode");
    }
    console.log(1);
});