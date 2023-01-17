'use strict'
const heading = document.querySelector('.heading');
const paragraph = document.querySelector('.paragraph');
const img = document.querySelector('.img');


fetch('https://type.fit/api/quotes')
	.then(response => response.json())
	.then(response => console.log(Object.entries(response)))
	.catch(err => console.error(err));