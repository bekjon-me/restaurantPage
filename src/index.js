import './style.css';
const left = document.getElementsByClassName('left')[0];
const right = document.getElementsByClassName('right')[0];


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
}
left.addEventListener('click', () => {
    plusDivs(-1);
})
right.addEventListener('click', () => {
    plusDivs(+1);
})

const mybutton = document.getElementsByClassName('up')[0];
const navbar = document.getElementsByClassName('nav-tabs')[0];
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
        navbar.classList.add('fixed-top');
    } else {
        mybutton.style.display = "none";
        if (navbar.getElementsByClassName('fixed-top')) {
            navbar.classList.remove('fixed-top')
        }
    }
}
const offerLeftBtn = document.getElementsByClassName('offer-left')[0];
const offerRightBtn = document.getElementsByClassName('offer-right')[0];


var slideIndexOffer = 1;
showDivsOffer(slideIndexOffer);

function plusDivsOffer(n) {
    showDivsOffer(slideIndexOffer += n);
}

function showDivsOffer(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesOffer");
    var p = document.getElementsByClassName("offer-text");
    if (n > x.length) { slideIndexOffer = 1 }
    if (n < 1) { slideIndexOffer = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        p[i].style.display = "none";
    }
    x[slideIndexOffer - 1].style.display = "block";
    p[slideIndexOffer - 1].style.display = "block";
}



carouselOffer();

function carouselOffer() {
    var i;
    var x = document.getElementsByClassName("mySlidesOffer");
    var p = document.getElementsByClassName("offer-text");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        p[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    p[slideIndex - 1].style.display = "block";
    setTimeout(carouselOffer, 4000);
}

offerLeftBtn.addEventListener('click', () => {
    plusDivsOffer(-1)
})
offerRightBtn.addEventListener('click', () => {
    plusDivsOffer(+1)
})


// API for foods
fetch("https://burgers1.p.rapidapi.com/burgers", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "burgers1.p.rapidapi.com",
            "x-rapidapi-key": "98ed62f430mshe0f72b891f9bc29p15d321jsnc0ed990b47ea"
        }
    })
    .then(respone => respone.json())
    .then((response) => {
        let foods = [];
        for (let k = 0; k < response.length; k++) {
            foods.push(`<div class="col-md-6 col-sm-12">
            <div class="flex-items">
                <img src="./images/food.jpeg" alt="Food">
                <div class="information">
                    <h1>${response[k].name}</h1>
                    <p>${response[k].ingredients}</p>
                </div>
            </div>
            <div class="date">
                <p>${response[k].description}
                </p>
            </div>
        </div>`)
        }

        document.getElementById('place-for-foods').innerHTML = foods.join('');
        console.log(response)
    })
    .catch(err => console.log(err))


document.getElementsByClassName('burgersBtn')[0].addEventListener('click', () => {
    fetch("https://burgers1.p.rapidapi.com/burgers", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "burgers1.p.rapidapi.com",
                "x-rapidapi-key": "98ed62f430mshe0f72b891f9bc29p15d321jsnc0ed990b47ea"
            }
        })
        .then(respone => respone.json())
        .then((respone) => {
            let foods = [];
            for (let k = 0; k < respone.length; k++) {
                foods.push(`<div class="col-md-6 col-sm-12">
            <div class="flex-items">
                <img src="./images/food.jpeg" alt="Food">
                <div class="information">
                    <h1>${respone[k].name}</h1>
                    <p>${respone[k].ingredients}</p>
                </div>
            </div>
            <div class="date">
                <p>${respone[k].description}
                </p>
            </div>
        </div>`)
            }
            document.getElementsByClassName('foods-type')[0].innerHTML = 'Burgers';
            document.getElementById('place-for-foods').innerHTML = foods.join('');
            console.log(respone)
        })
        .catch(err => console.log(err))
})


document.getElementsByClassName('desertsBtn')[0].addEventListener('click', () => {
    fetch("https://pizza-and-desserts.p.rapidapi.com/desserts", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
                "x-rapidapi-key": "98ed62f430mshe0f72b891f9bc29p15d321jsnc0ed990b47ea"
            }
        })
        .then(respone => respone.json())
        .then((respone) => {
            let foods = [];
            for (let k = 0; k < respone.length; k++) {
                foods.push(`<div class="col-md-6 col-sm-12">
            <div class="flex-items">
                <img src="${respone[k].img}">
                <div class="information">
                    <h1>${respone[k].name}</h1>
                    <p>${respone[k].price}$!</p>
                </div>
            </div>
            <div class="date">
                <p>${respone[k].description}
                </p>
            </div>
        </div>`)
            }
            document.getElementsByClassName('foods-type')[0].innerHTML = 'Deserts';
            document.getElementById('place-for-foods').innerHTML = foods.join('');
            console.log(respone)
        })
        .catch(err => console.log(err))
})


document.getElementsByClassName('cocktailsBtn')[0].addEventListener('click', () => {
    fetch("https://cocktails3.p.rapidapi.com/random", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "cocktails3.p.rapidapi.com",
                "x-rapidapi-key": "98ed62f430mshe0f72b891f9bc29p15d321jsnc0ed990b47ea"
            }
        })
        .then(response => response.json())
        .then((response) => {
            let foods = [];
            let responseGet = [response.body];
            console.log(responseGet)
            for (let k = 0; k < responseGet.length; k++) {
                foods.push(`<div class="col-md-6 col-sm-12">
                    <div class="flex-items">
                        <img src="https://www.thespruceeats.com/thmb/8aCKTFWGiCnoitlH-v8voyiwry4=/3489x3489/smart/filters:no_upscale()/kamikaze-cocktail-recipe-759313-hero-01-755709e3ac474259951edc0870b5b261.jpg" alt="Food">
                        <div class="information">
                            <h1>${responseGet[k][0].name}</h1>
                            <p>${responseGet[k][0].ingredients}</p>
                        </div>
                    </div>
                    <div class="date">
                        <p>5$
                        </p>
                    </div>
                </div>`)
            }
            document.getElementsByClassName('foods-type')[0].innerHTML = 'Cocktails';
            document.getElementById('place-for-foods').innerHTML = foods.join('');
            // console.log(foods)
        })
        .catch(err => console.log(err))
})


document.getElementsByClassName('beer')[0].addEventListener('click', () => {
    fetch("https://beer-live.p.rapidapi.com/top10beers", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "beer-live.p.rapidapi.com",
                "x-rapidapi-key": "98ed62f430mshe0f72b891f9bc29p15d321jsnc0ed990b47ea"
            }
        })
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            let foods = [];
            for (let k = 0; k < response.length; k++) {
                foods.push(`<div class="col-md-6 col-sm-12">
                <div class="flex-items">
                    <img src="https://www.liquor.com/thmb/-BGrCOgQV6D2UV-qcqFRLHY7uhs=/2037x1471/filters:fill(auto,1)/GettyImages-519728153-7dca4b18c59f4b1fa3654e4d5c9db884.jpg" alt="Food">
                    <div class="information">
                        <h1>${response[k].bier}</h1>
                        <p>${response[k].herkunft}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${response[k].bewertungInt}% liked
                    </p>
                </div>
            </div>`)
            }
            document.getElementsByClassName('foods-type')[0].innerHTML = 'Beer';
            document.getElementById('place-for-foods').innerHTML = foods.join('');
            console.log(response)
        })
        .catch(err => console.log(err))
})


document.getElementsByClassName('cookies')[0].addEventListener('click', () => {
    fetch("https://burgers1.p.rapidapi.com/burgers", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "burgers1.p.rapidapi.com",
                "x-rapidapi-key": "98ed62f430mshe0f72b891f9bc29p15d321jsnc0ed990b47ea"
            }
        })
        .then(respone => respone.json())
        .then((respone) => {
            let foods = [];
            for (let k = 0; k < respone.length; k++) {
                foods.push(`<div class="col-md-6 col-sm-12">
            <div class="flex-items">
                <img src="./images/food.jpeg" alt="Food">
                <div class="information">
                    <h1>${respone[k].name}</h1>
                    <p>${respone[k].ingredients}</p>
                </div>
            </div>
            <div class="date">
                <p>${respone[k].description}
                </p>
            </div>
        </div>`)
            }
            document.getElementsByClassName('foods-type')[0].innerHTML = 'Cookies';
            document.getElementById('place-for-foods').innerHTML = foods.join('');
            console.log(respone)
        })
        .catch(err => console.log(err))
})


document.getElementsByClassName('mealDB')[0].addEventListener('click', () => {
    fetch("https://burgers1.p.rapidapi.com/burgers", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "burgers1.p.rapidapi.com",
                "x-rapidapi-key": "98ed62f430mshe0f72b891f9bc29p15d321jsnc0ed990b47ea"
            }
        })
        .then(respone => respone.json())
        .then((respone) => {
            let foods = [];
            for (let k = 0; k < respone.length; k++) {
                foods.push(`<div class="col-md-6 col-sm-12">
            <div class="flex-items">
                <img src="./images/food.jpeg" alt="Food">
                <div class="information">
                    <h1>${respone[k].name}</h1>
                    <p>${respone[k].ingredients}</p>
                </div>
            </div>
            <div class="date">
                <p>${respone[k].description}
                </p>
            </div>
        </div>`)
            }
            document.getElementsByClassName('foods-type')[0].innerHTML = 'mealDB';
            document.getElementById('place-for-foods').innerHTML = foods.join('');
            console.log(respone)
        })
        .catch(err => console.log(err))
})

let isTrue = true;
document.getElementsByClassName('hamburger')[0].addEventListener('click', () => {
    if (isTrue === true) {
        document.getElementsByClassName('nav-tabs')[0].style.display = 'flex';
        isTrue = false;
    } else {
        document.getElementsByClassName('nav-tabs')[0].style.display = 'none';
        isTrue = true
    }
})