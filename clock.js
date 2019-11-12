const createClock = () => {

    let day = new Date();
    let clock = day.toLocaleTimeString();

    console.log(clock);
}
setInterval(createClock, 1000);
