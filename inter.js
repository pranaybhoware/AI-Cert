// Countdown Timer
const countdown = document.getElementById('countdown');
const eventDate = new Date('June 15, 2024 09:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        countdown.innerHTML = "Event Started";
    }
}

const interval = setInterval(updateCountdown, 1000);

// Collapsible Schedule
const collapsibles = document.querySelectorAll('.collapsible-header');
collapsibles.forEach(collapsible => {
    collapsible.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

// Tabs for Speaker Bios
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabLinks = document.querySelectorAll('.tab-link');

    tabContents.forEach(content => content.style.display = 'none');
    tabLinks.forEach(link => link.className = link.className.replace(' active', ''));

    document.getElementById(tabName).style.display = 'block';

}

// Default open first tab
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-link').click();
});
