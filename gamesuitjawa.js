const img = document.querySelectorAll('.player-side img');
const computerimg = document.querySelector('.computer-choice img');
const contentresult = document.querySelector('.result p');
const scorecomputer = document.querySelector('.scorecomputer p');
const scoreplayer = document.querySelector('.scoreplayer p');
const score = document.querySelectorAll('.score p');
const congrat1 = document.querySelector('.congrat1');
const congrat2 = document.querySelector('.congrat2');


function getComp() {
	let comp = Math.round(Math.random() * 11 + 1);
	if ( comp <= 3 ) comp = 'batu';
	if ( comp > 3 && comp <= 6 ) comp = 'gunting';
	if ( comp > 6 ) comp = 'kertas';
	return comp
};

function getresult(comp, player) {
	if ( comp === player ) return 'SERI !!!'
	if ( player === 'batu' ) return ( comp === 'gunting' ) ? 'MENANG !!!' : 'KALAH !!!'
	if ( player === 'gunting' ) return ( comp === 'kertas' ) ? 'MENANG !!!' : 'KALAH !!!'
	if ( player === 'kertas' ) return ( comp === 'batu' ) ? 'MENANG !!!' : 'KALAH !!!'
};

function repeat() {
	const image = ['batu', 'gunting', 'kertas'];
	let i = 0
	const timeout = new Date().getTime();
	setInterval(function() {
		if ( new Date().getTime() - timeout > 1200 ) {
			clearInterval();
			return;
		}
		computerimg.src = image[i] + '.jpg';
		i++
		if ( i === 3 ) i = 0
	}, 100)
};


let p = 0
let c = 0
img.forEach(function(e) {
	e.addEventListener('click', function() {
		const comp = getComp();
		const player = e.className;
		const result = getresult(comp, player);
		contentresult.style.transform = 'scale(0)'
		computerimg.style.width = '100%'
		repeat()
		setTimeout(function() {
			computerimg.src = comp + '.jpg';
			contentresult.style.transform = 'scale(1)';
			contentresult.innerHTML = result;
			if ( result === 'MENANG !!!' ) {
				scoreplayer.style.transform = 'scale(0)'
				p++
				setTimeout(function() {
					scoreplayer.style.transform = 'scale(1)'
					scoreplayer.innerHTML = p
				}, 300)
					
			} else if ( result === 'KALAH !!!' ) {
					scorecomputer.style.transform = 'scale(0)'
					c++
					setTimeout(function() {
						scorecomputer.style.transform = 'scale(1)'
						scorecomputer.innerHTML = c
					}, 300)
			}
			setTimeout(function() {
				if ( p === 3 ) {
					congrat1.style.transform = 'scale(1)';
				} else if ( c === 3 ) {
					congrat2.style.transform = 'scale(1)';
				}
			}, 450)
		}, 1200);
		
	});
});