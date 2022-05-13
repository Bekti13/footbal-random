import england from "./modules/england.js";
import spain from "./modules/spain.js";
import germany from "./modules/germany.js";
import italy from "./modules/italy.js";
import france from "./modules/france.js";
import fiveStarsClubs from "./modules/five_stars.js";
import fourHalfStarsClubs from "./modules/fourt_half_stars.js";
import fourStarsClubs from "./modules/four_stars.js";

const all = [...england, ...spain, ...germany, ...italy, ...france]

const five_and_fourHalf = [...fiveStarsClubs,...fourHalfStarsClubs]
const fourHalf_and_four = [...fourHalfStarsClubs,...fourStarsClubs]
const five_and_four = [...fiveStarsClubs,...fourStarsClubs]

const Array = [];
const club = document.querySelectorAll('.club');
const random = document.querySelector('.random');

const five_stars_input = document.querySelector('.five-stars')
const four_half_stars_input = document.querySelector('.four-half-stars')
const four_stars_input = document.querySelector('.four-stars')


const setProfileRight = document.querySelector('.profile-block-2 .set-profile')
const setProfileLeft = document.querySelector('.profile-block-1 .set-profile')
const changeButtonRight = document.querySelector('.profile-block-2 .change-profile-button');
const changeButtonLeft = document.querySelector('.profile-block-1 .change-profile-button');
const LeftName = document.querySelector('.profile-block-1 .profile-name')
const LeftPhoto = document.querySelector('.profile-block-1 .profile-photo')
const RightName = document.querySelector('.profile-block-2 .profile-name')
const RightPhoto = document.querySelector('.profile-block-2 .profile-photo')

const users = {
    Bekti: {
        name: 'Bekti',
        photo: './non-club-images/Bekti.jpg'
    },
    Ilya: {
        name: 'Ilya',
        photo: './non-club-images/Ilya.jpg'
    },
    Egor: {
        name: 'Egor',
        photo: './non-club-images/Egor.jpg'
    }

}

setProfileRight.addEventListener('click', () => {
    RightName.innerHTML = users.Ilya.name
    RightPhoto.style.backgroundImage = `url(${users.Ilya.photo})`
})

setProfileLeft.addEventListener('click', () => {
    LeftName.innerHTML = users.Bekti.name
    LeftPhoto.style.backgroundImage = `url(${users.Bekti.photo})`
})

changeButtonLeft.addEventListener('click', () => {
    LeftName.innerHTML = users.Egor.name
    LeftPhoto.style.backgroundImage = `url(${users.Egor.photo})`
})
changeButtonRight.addEventListener('click', () => {
    RightName.innerHTML = users.Egor.name
    RightPhoto.style.backgroundImage = `url(${users.Egor.photo})`
})



for (let i=0, j=all.length; i<j; i++) {
    Array[i] = new Image();
    Array[i].classList.add('club-logo');
    Array[i].src = all[i];
}


const five_stars_function = function () {
    club[0].innerHTML = '';
    club[1].innerHTML = '';
    club[0].appendChild(getRandomClub(fiveStarsClubs))
    club[1].appendChild(getRandomClub(fiveStarsClubs))
}

const four_half_stars_function = function () {
    club[0].innerHTML = '';
    club[1].innerHTML = '';
    club[0].appendChild(getRandomClub(fourHalfStarsClubs))
    club[1].appendChild(getRandomClub(fourHalfStarsClubs))
}

const four_stars_function = function () {
    club[0].innerHTML = '';
    club[1].innerHTML = '';
    club[0].appendChild(getRandomClub(fourStarsClubs))
    club[1].appendChild(getRandomClub(fourStarsClubs))
}

const rand = function () {
    club[0].innerHTML = '';
    club[1].innerHTML = '';
    club[0].appendChild(getRandomClub(Array))
    club[1].appendChild(getRandomClub(Array))
}

const five_and_fourHalf_function = function() {
    club[0].innerHTML = '';
    club[1].innerHTML = '';
    club[0].appendChild(getRandomClub(five_and_fourHalf))
    club[1].appendChild(getRandomClub(five_and_fourHalf))
}

const fourHalf_and_four_function = function() {
    club[0].innerHTML = '';
    club[1].innerHTML = '';
    club[0].appendChild(getRandomClub(fourHalf_and_four))
    club[1].appendChild(getRandomClub(fourHalf_and_four))
}

const five_and_four_function = function() {
    club[0].innerHTML = '';
    club[1].innerHTML = '';
    club[0].appendChild(getRandomClub(five_and_four))
    club[1].appendChild(getRandomClub(five_and_four))
}





function getRandomClub(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

random.addEventListener('click', () => {


    
    if (five_stars_input.checked && four_half_stars_input.checked ) {
        let interval = setInterval(five_and_fourHalf_function, 100)
        setTimeout(() => { clearInterval(interval) }, 3000);
    } else if (four_half_stars_input.checked && four_stars_input.checked ) {
        let interval = setInterval(fourHalf_and_four_function, 100)
        setTimeout(() => { clearInterval(interval) }, 3000);
    } else if (five_stars_input.checked && four_stars_input.checked ) {
        let interval = setInterval(five_and_four_function, 100)
        setTimeout(() => { clearInterval(interval) }, 3000);
    } else if (five_stars_input.checked) {
        let interval = setInterval(five_stars_function, 100)
        setTimeout(() => { clearInterval(interval) }, 3000);
    
    } else if (four_half_stars_input.checked) {
        let interval = setInterval(four_half_stars_function, 100)
        setTimeout(() => { clearInterval(interval) }, 3000);
    } else if (four_stars_input.checked) {
        let interval = setInterval(four_stars_function, 100)
        setTimeout(() => { clearInterval(interval) }, 3000);
    } else {
        let interval = setInterval(rand, 100)
        setTimeout(() => { clearInterval(interval) }, 3000);
    }
    
});

