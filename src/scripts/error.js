function returnSeach() {
    const btn = document.querySelector('button')

    btn.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })
}

returnSeach()