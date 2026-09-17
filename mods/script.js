var imageIndexes = [];

for(var i = 0; i <= 78; i++){
	imageIndexes.push(i);
};

let num = Math.floor(Math.random() * imageIndexes.length);

window.onload = function() {
	document.body.style.backgroundImage = `linear-gradient(#0000006c, #0000006c), url(../gallery/renders/render${num}.webp)`;
};
