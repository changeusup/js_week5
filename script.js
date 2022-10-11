const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
	if (dino.classList != "jump") {
		dino.classList.add("jump");

		setTimeout(function () {
			dino.classList.remove("jump");
		}, 300);
	}
	
}

let isAlive = setInterval(function () {
	//공룔 y 포지션
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
	//선인장 x 포지션
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
	console.log(cactusLeft)

	//콜리션
	if (cactusLeft <50 && cactusLeft > 0 && dinoTop >= 140){
		alert("게임 오버! 공룡이 멸종되었습니다!");
	}

},10);

document.addEventListener("keydown", function (event) {
	jump();
})