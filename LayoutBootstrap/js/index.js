// Cuando el usuario se desplaza hacia abajo 20 px desde la parte superior del documento, muestra el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Para safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

//Eliminar el video del inicio
function eliminar() {
  let video = document.getElementById("divVideo")
  video.className = "cerrar";
}

/**
 *  Light Switch @version v0.1.4
 */

(function () {
  let lightSwitch = document.getElementById('lightSwitch');
  if (!lightSwitch) {
    return;
  }

  /**
   * @function darkmode
   * @summary: changes the theme to 'dark mode' and save settings to local stroage.
   * Basically, replaces/toggles every CSS class that has '-light' class with '-dark'
   */
  function darkMode() {

    let p = document.getElementsByTagName('p');
    for (let i = 0; i < p.length; i++) {
      p[i].className = "blanco"
    }

    document.body.className = "bgnegro";

    let cardCentral = document.getElementById('cardCentral');
    cardCentral.className = "cardnegro";

    let cardCentral2 = document.getElementById('cardCentral2');
    cardCentral2.className = "cardnegro";

    let cardlateral = document.getElementById('cardLateral');
    cardlateral.className = "cardnegro";
    
    let cardlateralreg = document.getElementById('cardLateralreg');
    cardlateralreg.className = "cardnegro";

  }

  /**
   * @function lightmode
   * @summary: changes the theme to 'light mode' and save settings to local stroage.
   */
  function lightMode() {
    
    let p = document.getElementsByTagName('p');
    for (let i = 0; i < p.length; i++) {
      p[i].className = "negro"
    }

    document.body.className = "bgblanco";

    let cardCentral = document.getElementById('cardCentral');
    cardCentral.className = "cardblanco";

    let cardCentral2 = document.getElementById('cardCentral2');
    cardCentral2.className = "cardblanco";

    let cardlateral = document.getElementById('cardLateral');
    cardlateral.className = "cardblanco";

    let cardlateralreg = document.getElementById('cardLateralreg');
    cardlateralreg.className = "cardblanco";

  }

  /**
   * @function onToggleMode
   * @summary: the event handler attached to the switch. calling @darkMode or @lightMode depending on the checked state.
   */
  function onToggleMode() {
    if (lightSwitch.checked) {
      darkMode();
    } else {
      lightMode();
    }
  }

  /**
   * @function getSystemDefaultTheme
   * @summary: get system default theme by media query
   */
  function getSystemDefaultTheme() {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkThemeMq.matches) {
      return 'dark';
    }
    return 'light';
  }

  function setup() {
    var settings = localStorage.getItem('lightSwitch');
    if (settings == null) {
      settings = getSystemDefaultTheme();
    }

    if (settings == 'dark') {
      lightSwitch.checked = true;
    }

    lightSwitch.addEventListener('change', onToggleMode);
    onToggleMode();
  }

  setup();
})();