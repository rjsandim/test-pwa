let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;

    // Verifica se está em um dispositivo móvel
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        const installBanner = document.getElementById('installBanner');
        installBanner.classList.remove('hidden');

        document.getElementById('installButton').addEventListener('click', () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('Usuário aceitou instalar o PWA');
                    } else {
                        console.log('Usuário recusou a instalação');
                    }
                    deferredPrompt = null;
                });
            }
        });
    }
});
