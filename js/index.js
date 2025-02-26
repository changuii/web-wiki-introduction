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

console.log("알맞은 스크립트를 작성하세요");


function addComment() {
    const list = document.getElementsByClassName('comment-list')[0];
    const input = document.getElementById('comment-input');
    const inputValue = input.value;
    let comment = `
    <li>
        <div className="comment-item">
            <div className="comment-author">
                <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지"/>
                <span>방문자</span>
            </div>
            <div className="comment-content">
                __inputValue__
            </div>
        </div>
    </li>`
    comment = comment.replace("__inputValue__", inputValue);
    list.innerHTML += comment;
}
