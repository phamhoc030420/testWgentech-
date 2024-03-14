const ScreenWidth = 1440;
const fullWidth = window.innerWidth;
const ratio = fullWidth / ScreenWidth;
document.documentElement.style.setProperty("--ratio", ratio);
