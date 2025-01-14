// import文を使って sub.js ファイルを読み込む。
import { hello } from "./sub";
import "../css/style.css";

console.log("This is index.js");
// sub.jsに定義されたJavascriptを実行する。
hello();
