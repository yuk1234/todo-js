import "./styles.css";

/**
 * 追加ボタン
 * テキストボックスの値を取得
 * 追加後ボックスを削除
 */
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = " ";

  //divのDOMを生成
  const div = document.createElement("div");
  //クラス名を追加
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  //button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンのdivタグを未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incompleted-list").removeChild(deleteTarget);
  });

  //divタグの子要素に各要素liを追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //ulタグの子要素にdiv要素を追加
  document.getElementById("incompleted-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
