// ==== 简易粒子背景动画 ====
const canvas = document.createElement('canvas');
canvas.id = 'bg-animation';
document.body.insertBefore(canvas, document.body.firstChild);  // 插入到body最前面


const ctx = canvas.getContext("2d");
let w, h, particles;

function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}
window.onresize = resize;
resize();

function initParticles(num = 80) {
    particles = [];
    for (let i = 0; i < num; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 2 + 1,
            vx: Math.random() * 1 - 0.5,
            vy: Math.random() * 1 - 0.5
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
    });

    requestAnimationFrame(draw);
}

initParticles();
draw();
