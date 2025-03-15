    // const themeToggle = document.createElement("button");
    // themeToggle.id = "theme-toggle";
    // themeToggle.classList.add("dark-mode");
    // themeToggle.textContent = "🌙";
    // document.body.prepend(themeToggle);


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


  
    
});

// const timer = document.createElement("div");
// timer.id = 'timer';
// let seconds = 0;
// timer.textContent = "1234";
// timer.style.color = "red";
// timer.style.margin = "100px auto";
// document.body.appendChild(timer);
// let simpleTimer = setInterval(()=> {
//     seconds++;
//     timer.textContent = seconds;
// }, 1000);
// setTimeout (()=>{
//     clearInterval(simpleTimer);
// }, 60000);