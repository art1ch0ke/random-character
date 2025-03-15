
    let seconds = 0;
    let simpleTimer = setInterval(()=> {
        console.log(`${++seconds} сек.`);
    }, 1000);
    setTimeout (()=>{
        clearInterval(simpleTimer);
    }, 10100);