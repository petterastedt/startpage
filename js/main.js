// DOM ELEMENTS

const toggleDark = document.querySelector('#switch'),
      clockDisplay = document.querySelector('.time'),  
      onOff = document.querySelector('.on-off'),
      body = document.querySelector('body'),
      logo = document.querySelector('.logo'),
      icon = document.querySelector('.icon'),
      input = document.querySelector('.input'),
      infoBtn = document.querySelector('.info-button'),
      dotsWrap = document.querySelector('.dots-wrapper');

let curEng = 0;   

// ADDS CORRECT AMOUNT OF DOTS UNDER LOGO AND LIGHTS UP THE RIGHT ONE ON PAGE LOAD

window.onload = function() {
    const displayDots = searchEngines.map(engine => engine.dot);
    dotsWrap.innerHTML = displayDots.join('');
    dots = document.querySelectorAll('.dot');
    dots.forEach(() => dots[curEng].classList.add('dot-active'));
}

// CHANGE VALUES ON LOGO CLICK

logo.addEventListener('click', () => {
    if (curEng < searchEngines.length-1){
        icon.classList.remove(objValues[curEng].icon);
        dots.forEach(() => dots[curEng].classList.remove('dot-active'));
        curEng++;
        icon.classList.add(objValues[curEng].icon);
        input.placeholder = objValues[curEng].placeholder;
        dots.forEach(() => dots[curEng].classList.add('dot-active'));
    } else {
        icon.classList.remove(objValues[curEng].icon);
        dots.forEach(() => dots[curEng].classList.remove('dot-active'));
        curEng = 0;
        icon.classList.add(objValues[curEng].icon);
        input.placeholder = objValues[curEng].placeholder;
        dots.forEach(() => dots[curEng].classList.add('dot-active'));
    }
});

// TOGGLE DARK/LIGHT MODE

toggleDark.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        onOff.innerHTML = 'On';
        body.classList.remove('light-mode');
        logo.classList.remove('light-mode');
        input.style.background ="#3d3d3d";
        input.style.color ="#eeeeee";
    } else {
        onOff.innerHTML = 'Off';
        body.classList.add('light-mode');
        logo.classList.add('light-mode');
        input.style.background ="#fff";
        input.style.color ="#777";
    }
});

// SEARCH ENGINE OBJECTS

const searchEngines = [
    { name: 'Google', icon: 'fa-google', url: 'https://google.com/search', query: '?q=', placeholder: 'Search Google', dot: '<div class="dot"></div>' },
    { name: 'DuckDuckGo', icon: 'duckduckgo', url: 'https://www.duckduckgo.com', query: '?q=', placeholder: 'Search Duckduckgo', dot: '<div class="dot"></div>' },
    { name: 'Youtube', icon: 'fa-youtube', url: 'https://www.youtube.com/results', query: '?search_query="', placeholder: 'Search Youtube', dot: '<div class="dot"></div>' },
    { name: 'Reddit', icon: 'fa-reddit-alien', url: 'https://reddit.com/r/', query: '', placeholder: 'Subreddit /r', dot: '<div class="dot"></div>' },
    { name: 'Soundcloud', icon: 'fa-soundcloud', url: 'https://soundcloud.com/search', query: '?q=', placeholder: 'Search Soundcloud', dot: '<div class="dot"></div>' }
  ];
const objValues = Object.values(searchEngines);

// SUBMIT SEARCH QUERY

  function submitIt (){
    window.open(objValues[curEng].url+objValues[curEng].query+input.value, '_blank');
  }

// JAVASCRIPT CLOCK

function clock() {
const time = new Date(),
hours = time.getHours(),
minutes = time.getMinutes();

if (hours < 10 && minutes < 10){
    clockDisplay.innerHTML = "0" + hours + ":" + "0" + minutes;
    }
else if (hours < 10) {
    clockDisplay.innerHTML = "0" + hours + ":" + minutes;
    }
else if (minutes < 10) {
    clockDisplay.innerHTML = hours + ":" + "0" + minutes;
    }
else {
    clockDisplay.innerHTML = hours + ":" + minutes;
    }    
}
setInterval(clock, 1000); // UPDATE CLOCK EVERY SECOND
