let btn = document.getElementById("btn");
let inp = document.getElementById("inp");

let boxes = document.querySelectorAll(".box");
let drag = null;

btn.onclick = function () {
	if (inp.value != "") {
		boxes[0].innerHTML += `
		<p class="item" draggable="true">${inp.value}</p>
		`;
		inp.value = "";
	}
};
dragItem();

function dragItem() {
	let items = document.querySelectorAll(".item");
	items.forEach((item) => {
		item.addEventListener("dragstart", function () {
			console.log("drag Start");
			drag = item;
			item.style.opacity = "0.5";
		});
		item.addEventListener("dragend", function () {
			console.log("drag end");
			drag = null;
			item.style.opacity = "1";
		});

		boxes.forEach((box) => {
			box.addEventListener("dragover", function (e) {
				/*console.log(`drag over ${boxText}`);*/
				e.preventDefault();
				this.style.border = "2px dashed #1abc9c";
				this.style.paddingBottom = "50px";
			});
			box.addEventListener("dragleave", function () {
				/*console.log(`drag over ${boxText}`);*/

				this.style.border = "none";
				this.style.paddingBottom = "10px";
			});

			box.addEventListener("drop", function () {
				this.append(drag);
				this.style.border = "none";
				this.style.paddingBottom = "10px";
			});
		});
	});
}
