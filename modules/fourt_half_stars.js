const four_half_stars = [
    './images/english/Arsenal.png',
    './images/english/everton.png',
    './images/english/lester.png',
    './images/english/tot.png',
    './images/english/wolvs.png',
    './images/france/lyon.png',
    './images/germany/bayer.png',
    './images/germany/bd.png',
    './images/germany/bm.png',
    './images/germany/rb.png',
    './images/italy/atalanta.png',
    './images/italy/inter.png',
    './images/italy/lazio.png',
    './images/italy/milan.png',
    './images/italy/napoli.png',
    './images/italy/juventus.png',
    './images/spain/bilbao.png',
    './images/spain/betis.png',
    './images/spain/rs.png',
    './images/spain/sev.png',
    './images/spain/villa.png',
]

const fourHalfStarsClubs = []

for (let i=0, j=four_half_stars.length; i<j; i++) {
    fourHalfStarsClubs[i] = new Image();
    fourHalfStarsClubs[i].classList.add('club-logo');
    fourHalfStarsClubs[i].src = four_half_stars[i];
}



export default fourHalfStarsClubs;

