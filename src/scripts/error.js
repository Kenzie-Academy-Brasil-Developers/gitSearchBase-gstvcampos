function returnSeach() {
    const btn = document.querySelector('button')

    btn.addEventListener('click', () => {
        window.location.replace('/index.html')
    })
}

returnSeach()