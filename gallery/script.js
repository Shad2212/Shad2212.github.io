const card = document.getElementById('card');
const popup = document.getElementById('popup');
const selectedPic = document.getElementById('selectedPic');
var imageIndexes = [];

for(var i = 0; i <= 78; i++){
	imageIndexes.push(i);
};

imageIndexes.forEach((i) => {
	const image = document.createElement('img');
	image.src = `./renders/render${i}.webp`;
	card.appendChild(image);
	
	image.addEventListener('click', () => {
		popup.style.transform = `translateY(0)`;
		selectedPic.src =`./renders/hq/render${i}.png`;
	})
});

popup.addEventListener('click', () => {
	popup.style.transform = `translateY(100%)`;
	popup.src = '';
});
