function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Start heart animation
setInterval(createHeart, 200);