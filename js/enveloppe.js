function openEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.add('open');

    document.querySelector('.click-hint').style.display = 'none';

    setTimeout(() => {
        window.location.href = '/Users/user/Documents/Anniv_PAB/html/Invitation.html', '_blank';
    }, 1400);
}



