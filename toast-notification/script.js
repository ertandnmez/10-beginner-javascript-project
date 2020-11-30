const btn = document.getElementById("btn");
const cont = document.getElementById("container");


btn.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText = 'This challenge is crazy!'
    cont.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}