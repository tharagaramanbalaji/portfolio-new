document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('live-time');

    function updateTime() {
        if (!timeElement) return;

        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        timeElement.textContent = timeString;
    }

    // Update the time immediately and then every second
    updateTime();
    setInterval(updateTime, 1000);
});