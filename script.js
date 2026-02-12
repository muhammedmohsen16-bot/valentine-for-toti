// Countdown timer to 12/12/2026
const countdownDate = new Date('2026-12-12T00:00:00').getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in an element with id="countdown"
    document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = 'EXPIRED';
    }
}, 1000);

// Add interactive animations and romantic effects
const romanticEffects = () => {
    const heartAnimation = document.createElement('div');
    heartAnimation.style.position = 'fixed';
    heartAnimation.style.width = '50px';
    heartAnimation.style.height = '50px';
    heartAnimation.style.borderRadius = '50%';
    heartAnimation.style.backgroundColor = 'red';
    heartAnimation.style.opacity = '0.8';
    heartAnimation.style.transition = 'transform 0.5s';

    document.body.appendChild(heartAnimation);

    heartAnimation.addEventListener('animationend', () => {
        heartAnimation.remove();
    });

    const randomPosition = () => Math.random() * (window.innerWidth - 50);
    const randomDelay = Math.random() * 3000 + 1000;

    setTimeout(() => {
        heartAnimation.style.transform = `translate(${randomPosition()}px, -100px)`;
        romanticEffects();
    }, randomDelay);
};

romanticEffects();