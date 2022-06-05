import "./styles.css";

/**
 * 追加ボタン
 * テキストボックスの値を取得
 * 追加後ボックスを削除
 */
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = " ";
  createIncompleteList(inputText);
};

/**
 * 未完了リストから指定の要素を削除
 * @param {*} target
 */
const deteleFromIncompleteList = (target) => {
  document.getElementById("incompleted-list").removeChild(target);
};

const createIncompleteList = (text) => {
  //divのDOMを生成
  const div = document.createElement("div");
  //クラス名を追加
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  /**
   * 完了ボタン
   */
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //要素を追加後削除
    deteleFromIncompleteList(completeButton.parentNode);
    //入力したリストと各ボタンを完了したTODOに追加する
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    /**
     * 戻すボタン
     */
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      deteleFromCompleteList(backButton.parentNode);
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("completed-list").appendChild(addTarget);
  });

  /**
   * 削除ボタン
   */
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンのdivタグを未完了リストから削除
    deteleFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素liを追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //ulタグの子要素にdiv要素を追加
  document.getElementById("incompleted-list").appendChild(div);
};

/**
 * 完了リストから指定の要素を削除
 */
const deteleFromCompleteList = (target) => {
  document.getElementById("completed-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
