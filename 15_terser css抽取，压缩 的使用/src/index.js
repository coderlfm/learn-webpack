import { sum } from "./utils";
import './style.css';

let count = 1;

count++;
function fntest() {
  console.log("test");
}
// TODO: 必须调用，否则 production 会默认开启无效代码删除
// fntest();
fntest();

sum(1,3);

const div = document.createElement('div');
div.className = 'div123';
document.body.appendChild(div);
console.log(count);