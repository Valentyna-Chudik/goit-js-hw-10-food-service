const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.checkbox.addEventListener('change', onThemeSwitch);
setTheme();

function onThemeSwitch() {
  
  if (refs.checkbox.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  }
    
  else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};

function setTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === Theme.DARK) {
        refs.body.classList.add(Theme.DARK);
        refs.checkbox.checked = true;
       
    }
};
