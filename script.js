const messages = [
  "Chắc em không còn đọc tin nhắn trên này đâu nên anh thỏa sức nhắn ha ",
  "Anh xin lỗi vì đã để e đợi 1 thằng như anh lâu vậy ",
  "Anh không mong em sẽ tha thứ cho anh, cũng không mong cầu em sẽ về bên anh nữa",
  "Anh vẫn sẽ đợi em, mệt quá thì nhìn lại phía sau nhé",
  "Dù có chuyện gì xảy ra, anh vẫn đứng về phía em ",
  "Anh thương em ",
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
