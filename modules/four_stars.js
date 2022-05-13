const four_stars = [
    './images/english/westham.png',
    './images/english/aston.png',
    './images/english/southg.png',
    './images/english/crystall.png',
    './images/english/brigthon.png',
    './images/english/newcastle.png',
    './images/english/leeds.png',
    './images/english/barnley.png',
    './images/france/angers.png',
    './images/france/monaco.png',
    './images/france/lille.png',
    './images/france/monpelle.png',
    './images/france/nizza.png',
    './images/france/marsel.png',
    './images/france/rennes.png',
    './images/germany/eintracht.png',
    './images/germany/hertha.png',
    './images/germany/freiburg.png',
    './images/germany/hof.png',
    './images/germany/wolfs.png',
    './images/italy/cagliari.png',
    './images/italy/fiorentina.png',
    './images/italy/rome.png',
    './images/italy/sampdoria.png',
    './images/italy/sassuolo.png',
    './images/italy/torino.png',
    './images/spain/osassuna.png',
    './images/spain/selta.png',
    './images/spain/alaves.png',
    './images/spain/xetafe.png',
    './images/spain/granada.png',
    './images/spain/levante.png',
    './images/spain/valencia.png',
]

const fourStarsClubs = []

for (let i=0, j=four_stars.length; i<j; i++) {
    fourStarsClubs[i] = new Image();
    fourStarsClubs[i].classList.add('club-logo');
    fourStarsClubs[i].src = four_stars[i];
}



export default fourStarsClubs