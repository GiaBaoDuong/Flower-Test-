const messages = [
  "Hôm nay em đi học có mệt hong ? ",
  "Nay anh nhớ em lắm, mà hong thấy em nhắn nên thôi ",
  "Biết em bận rồi, nhưng mà lâu lâu nhớ nhắn cho anh 1 tin nha",
  "Giữ sức khỏe em nhé, đừng cố quá ~~",
  "Anh yêu em ",
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
