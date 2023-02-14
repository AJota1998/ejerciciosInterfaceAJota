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
  
      let plan1 = document.getElementById('plan1');
      plan1.setAttribute("style", "background-color: rgb(73,71,71); width: 18rem;");
  
      let plan2 = document.getElementById('plan2');
      plan2.setAttribute("style", "background-color: rgb(73,71,71); width: 18rem;");
  
      let plan3 = document.getElementById('plan3');
      plan3.setAttribute("style", "background-color: rgb(73,71,71); width: 18rem;");
  
    }
  
    /**
     * @function lightmode
     * @summary: changes the theme to 'light mode' and save settings to local stroage.
     */
    function lightMode() {
  
      let plan1 = document.getElementById('plan1');
      plan1.setAttribute("style", "background-color: white; width: 18rem;");
  
      let plan2 = document.getElementById('plan2');
      plan2.setAttribute("style", "background-color: white; width: 18rem;");
  
      let plan3 = document.getElementById('plan3');
      plan3.setAttribute("style", "background-color: white; width: 18rem;");
  
  
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