document.addEventListener('DOMContentLoaded', () => {
    const chickenLeft = document.getElementById('chicken-left');
    const chickenRight = document.getElementById('chicken-right');
    const leftLegBtn = document.getElementById('left-leg-btn');
    const rightLegBtn = document.getElementById('right-leg-btn');

    leftLegBtn.addEventListener('click', () => {
        chickenLeft.style.transform = 'translateX(100px)';
    });

    rightLegBtn.addEventListener('click', () => {
        chickenRight.style.transform = 'translateX(100px)';
    });
});
