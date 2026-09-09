const messages = [
  "Hôm nay em đi học có mệt hong ? ",
  "Tặng em bông hoa anh làm nè, cười lên coi ",
  "Đừng căng thẳng nữa, có anh ở đây mà ",
  "Cố lên Dĩnh nhé, anh đợi em về ~~",
  "Gia Bao"
];

const messageEl = document.querySelector("#message-text");
let currentMessage = 0;

function showNextMessage() {
  if (!messageEl || messages.length < 2) {
    return;
  }

  messageEl.classList.add("is-changing");

  window.setTimeout(() => {
    currentMessage = (currentMessage + 1) % messages.length;
    messageEl.textContent = messages[currentMessage];
    messageEl.classList.remove("is-changing");
  }, 260);
}

window.setInterval(showNextMessage, 3000);
