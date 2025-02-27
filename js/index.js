console.log(
    "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
    "color: #d81b60; font-size: 16px; font-weight: bold;"
);


window.onload = () => {
    const inputButton = document.getElementById("comment-input-button");
    inputButton.addEventListener("click", addComment);
}

console.log("알맞은 스크립트를 작성하세요");

function addComment() {
    const list = document.getElementsByClassName('comment-list')[0];
    const input = document.getElementById('comment-input');

    const comment = document.getElementById('comment').cloneNode(true);
    comment.getElementsByClassName("comment-content")[0].innerText = input.value;
    list.appendChild(comment);
    alert("댓글 작성에 성공하셨습니다!!!");
}
