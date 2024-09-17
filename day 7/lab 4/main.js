function display() {
  return new Promise((resolve) => {
    const welcome = document.getElementById("welcome");
    setTimeout(() => {
      welcome.style.display = "none";
      resolve();
    }, 3000);
  })
    .then(() => {
      return new Promise((resolve) => {
        const image = document.getElementById("image");
        image.style.display = "block";
        resolve();
      });
    })
    .then(() => {
      return new Promise((resolve) => {
        const thanks = document.getElementById("thanks");
        thanks.style.display = "block";
        setTimeout(() => {
          thanks.style.display = "none";
          resolve();
        }, 3000);
      });
    })
    .then(() => {
      window.location.href = "redirect.html";
    });
}
document.getElementById("image").style.display = "none";
document.getElementById("thanks").style.display = "none";
window.onload = display;
