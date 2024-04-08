document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("target");
    const Yes = document.getElementById("Yes");

    Yes.addEventListener('click', () => {
        alert("I Love You 2222");
    });

    function moveTarget() {
        const maxWidth = 400;
        const maxHeight = 400;

        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);

        target.style.left = randomX + 'px';
        target.style.top = randomY + 'px';
    }

    target.addEventListener('mouseenter', () => {
        moveTarget();
    });
});
