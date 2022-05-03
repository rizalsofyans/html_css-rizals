let pageNumber = 0;

const data = [
	{
		copy: 'a Jakarta-based UI Designer',
		background: '#edc7a9',
		circle: '#3e78ed'
	},
	{
		copy: 'a Web Programmer',
		background: '#a1fffe',
		circle: '#e34a47'
	},
	{
		copy: 'a Problem solver',
		background: '#d3c7f3',
		circle: '#f7fe00'
	},
	{
		copy: 'an Innovative',
		background: '#faffb8',
		circle: '#b472e6'
	},
	{
		copy: 'an Entrepreneur Mentality',
		background: '#a1fffe',
		circle: '#e34a47'
	},
	{
		copy: 'Daft Punk - Instant Crush enjoyer',
		background: '#a1fffe',
		circle: '#e34a47'
	}
];

const nextTag = document.querySelector('footer img.next');
const prevTag = document.querySelector('footer img.prev');
const randTag = document.querySelector('footer img.rand');
const outputTag = document.querySelector('h2');
const circleTag = document.querySelector('div.circle');
const bodyTag = document.querySelector('body');

// document.addEventListener('DOMContentLoaded', function (event) {});

window.onload = () => {
	updateSection();
	// console.info('Ok.');
};

const next = () => {
	pageNumber += 1;

	if (pageNumber > data.length - 1) {
		pageNumber = 0;
	}

	updateSection();
};

const prev = () => {
	pageNumber = pageNumber - 1;

	if (pageNumber < 0) {
		pageNumber = data.length - 1;
	}
	updateSection();
};

const rand = () => {
	pageNumber = Math.floor(Math.random() * data.length);
	updateSection();
};

const updateSection = () => {
	outputTag.innerHTML = data[pageNumber].copy;
	circleTag.style.backgroundColor = data[pageNumber].circle;
	bodyTag.style.backgroundColor = data[pageNumber].background;
};

prevTag.addEventListener('click', () => {
	prev();
});

randTag.addEventListener('click', () => {
	rand();
});

nextTag.addEventListener('click', () => {
	next();
});

document.addEventListener('keyup', (e) => {
	console.log(e);

	// if the key being pressed is ArrowRight
	if (e.key === 'ArrowRight') {
		next();
	}

	// if the key being pressed is ArrowLeft
	if (e.key === 'ArrowLeft') {
		prev();
	}
});
