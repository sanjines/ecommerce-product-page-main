const hamburger = (nav, hamburger, hamburgerClose, body) => {

  document.addEventListener('click', (e) => {
    if (e.target.matches(hamburger) || e.target.matches(`${hamburger} *`) || e.target.matches(body)) {
      document.querySelector(nav).classList.add('js--navActive');
      document.querySelector(body).classList.add('js--opacity');
    }

    if (e.target.matches(hamburgerClose)) {
      document.querySelector(nav).classList.remove('js--navActive');
      document.querySelector(body).classList.remove('js--opacity');
    }

  })
}

export default hamburger;