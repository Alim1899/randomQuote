'use strict'
const header = document.querySelector('.header');
const paragraph = document.querySelector('.paragraph');
const img = document.querySelector('.img');
const changeBtn = document.querySelector('.new');
 const colors = ['#ff3333','#00ff40','#00ffff','#0040ff','#bf00ff','#ff0000','#d92626','#ff9500','#ff95ef',
'#ffde00','#8ec500','#00ff00']; 




// fetch('https://type.fit/api/quotes')
// 	.then(response => response.json())
// 	.then(response => console.log(Object.entries(response)))
// 	.catch(err => console.error(err));
changeBtn.addEventListener('click',function(e){
    const random = Math.round(Math.random()*colors.length)-1;

    e.preventDefault();
    changeBtn.style.backgroundColor = colors[Math.abs(random)];
    header.style.backgroundColor = colors[Math.abs(random)];

})