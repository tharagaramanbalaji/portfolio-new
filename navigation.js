document.addEventListener('keydown', (e) => {
    // Ignore key presses if the user is typing in an input field in the future
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }

    switch (e.key) {
        case '1':
            window.location.href = 'index.html';
            break;
        case '2':
            window.location.href = 'projects.html';
            break;
        case '3':
            window.location.href = 'experience.html';
            break;
    }
});