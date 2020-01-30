class Message {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.posX = 100;
        this.posY = 150;
        this.width = width;
        this.height = height;
        this.alpha = 1.0;   // full opacity
        this.texts = [
            '3 Puntos',
        ],

        this.image = new Image();
        this.image.src = imgSource;

    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    draw() {
        this.ctx.fillText("3 POINTS", 100, 100);
        this.posY--;
    }

    fadeOut() {
        this.interval = setInterval( () => {
            this.alpha = this.alpha - 0.015; // decrease opacity (fade out)
            this.posY--;
            if (this.alpha < 0) {
                clearInterval(this.interval)
            }
        }, 1000);
    }
}