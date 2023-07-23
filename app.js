const colors = ['red', 'green', 'blue'];
const text = ['one', 'two', 'three', 'four'];
const showNotications = document.querySelector('.show-notifications');
let bottom = 0;
const displayMsg = () => {
	const noti = document.createElement('div');
	noti.classList.add('notification');
	noti.style.backgroundColor =
		colors[Math.floor(Math.random() * colors.length)];
	noti.innerText = `Message  ${text[Math.floor(Math.random() * text.length)]}`;

	// get and update the bottom position
	const root = document.documentElement;

	bottom += 50;
	noti.style.bottom = `${bottom}px`;
	document.body.appendChild(noti);
	setTimeout(() => {
		// reset the bottom position
		bottom = 0;
		noti.remove();
	}, 3000);
};
showNotications.addEventListener('click', displayMsg);
