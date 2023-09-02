function moveButtonHovered() {
    const moveButton = document.getElementById('moveButton');
    const randomX = Math.floor(Math.random() * (window.innerWidth - moveButton.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - moveButton.clientHeight));

    moveButton.style.position = 'absolute';
    moveButton.style.left = `${randomX}px`;
    moveButton.style.top = `${randomY}px`;
}
