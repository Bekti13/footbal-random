const five_stars = [
    './images/english/chelsea.png',
    './images/english/Liverpool.png',
    './images/english/Man_United.png',
    './images/english/mc.png',
    './images/france/PSG.png',
    './images/germany/bavaria.png',
    './images/spain/am.png',
    './images/spain/Barcelona.png',
    './images/spain/Real_Madrid.png',
]

const fiveStarsClubs = []

for (let i=0, j=five_stars.length; i<j; i++) {
    fiveStarsClubs[i] = new Image();
    fiveStarsClubs[i].classList.add('club-logo');
    fiveStarsClubs[i].src = five_stars[i];
}



export default fiveStarsClubs