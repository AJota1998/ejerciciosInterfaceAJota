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

    let h5 = document.getElementsByTagName('h5');
    for (let i = 0; i < h5.length; i++) {
      h5[i].className = "blanco"
    } 
    
    let h4 = document.getElementsByTagName('h4');
    for (let i = 0; i < h4.length; i++) {
      h4[i].className = "blanco"
    }

    let a = document.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
      a[i].className = "blanco"
    }

    let li = document.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
      li[i].className = "blancolista"
    }

    let label = document.getElementsByTagName('label');
    for (let i = 0; i < label.length; i++) {
      label[i].className = "blanco"
    }

    let h1 = document.getElementsByTagName('h1');
    for (let i = 0; i < h1.length; i++) {
      h1[i].className = "h_blanco";
    }

    let modal = document.getElementById('model');
    modal.setAttribute("style", "background-color: rgb(32, 32, 32);");

    let spanmenu = document.getElementById('spanmenu');
    spanmenu.setAttribute("style", "background: white");


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

    let h5 = document.getElementsByTagName('h5');
    for (let i = 0; i < h5.length; i++) {
      h5[i].className = "negro"
    }

    let h4 = document.getElementsByTagName('h4');
    for (let i = 0; i < h4.length; i++) {
      h4[i].className = "negro"
    }

    let a = document.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
      a[i].className = "negro"
    }

    let li = document.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
      li[i].className = "negrolista"
    }

    let label = document.getElementsByTagName('label');
    for (let i = 0; i < label.length; i++) {
      label[i].className = "negro"
    }

    let h1 = document.getElementsByTagName('h1');
    for (let i = 0; i < h1.length; i++) {
      h1[i].className = "h_negro";
    }
   
    
    document.body.className = "bgblanco";

    let cardCentral = document.getElementById('cardCentral');
    cardCentral.className = "cardblanco";

    let cardCentral2 = document.getElementById('cardCentral2');
    cardCentral2.className = "cardblanco";

    let cardlateral = document.getElementById('cardLateral');
    cardlateral.className = "cardblanco";

    let cardlateralreg = document.getElementById('cardLateralreg');
    cardlateralreg.className = "cardvideo";

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
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: light)');
    if (darkThemeMq.matches) {
      return 'light';
    }
    return 'dark';
  }

  function setup() {
    var settings = localStorage.getItem('darkSwitch');
    if (settings == null) {
      settings = getSystemDefaultTheme();
    }

    if (settings == 'light') {
      lightSwitch.checked = true;
    }

    lightSwitch.addEventListener('change', onToggleMode);
    onToggleMode();
  }

  setup();
})();