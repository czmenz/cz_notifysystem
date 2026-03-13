window.addEventListener('message', (event) => {
    const data = event.data;

    if (data.action === 'notify') {
        createNotification(data.type, data.title, data.message, data.duration);
    }
});


const notifySound = new Audio('sound.ogg');
notifySound.volume = 0.3;
notifySound.preload = 'auto';

function createNotification(type, title, message, duration = 5000) {
    const container = document.getElementById('notify-container');

    try {
        notifySound.currentTime = 0;
        notifySound.play();
    } catch (e) {}

    const card = document.createElement('div');
    card.classList.add('notify-card', `type-${type}`);

    let iconClass = 'fa-solid fa-circle-info';
    let defaultTitle = 'Info';

    if (type === 'success') {
        iconClass = 'fa-solid fa-circle-check';
        defaultTitle = 'Úspěch';
    } else if (type === 'warning') {
        iconClass = 'fa-solid fa-triangle-exclamation';
        defaultTitle = 'Varování';
    } else if (type === 'error') {
        iconClass = 'fa-solid fa-circle-xmark';
        defaultTitle = 'Chyba';
    }

    const displayTitle = title || defaultTitle;

    card.innerHTML = `
        <div class="notify-icon"><i class="${iconClass}"></i></div>
        <div class="notify-content">
            <div class="notify-title">${displayTitle}</div>
            <div class="notify-message">${message}</div>
        </div>
    `;

    container.prepend(card);

    setTimeout(() => {
        card.classList.add('show');
    }, 10);

    setTimeout(() => {
        card.classList.remove('show');
        card.classList.add('hide');

        setTimeout(() => {
            if (card.parentNode) {
                card.parentNode.removeChild(card);
            }
        }, 400);
    }, duration);
}
