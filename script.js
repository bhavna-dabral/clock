setInterval(() => {
    const hourElement = document.querySelector('.hour');
    const minElement = document.querySelector('.min');
    const secElement = document.querySelector('.sec');

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minDeg = minutes * 6;
    const secDeg = seconds * 6;

    hourElement.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    minElement.style.transform = `translate(-50%, -100%) rotate(${minDeg}deg)`;
    secElement.style.transform = `translate(-50%, -100%) rotate(${secDeg}deg)`;
}, 1000);
