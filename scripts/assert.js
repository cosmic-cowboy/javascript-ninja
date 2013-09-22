// 汎用で利用するassert.js
// グローバルに漏れているのがよろしくない

function assert(value, desc){
	var resultList = document.getElementById("results");
	if(!resultList){
		resultList = document.createElement('ul');
		document.getElementsByTagName('body')[0].appendChild(resultList);
		resultList.setAttribute('id', 'results');
	}
	var li = document.createElement("li");
	li.className = value ? "pass" : "fail";
	li.appendChild(document.createTextNode(desc));
	resultList.appendChild(li);
}