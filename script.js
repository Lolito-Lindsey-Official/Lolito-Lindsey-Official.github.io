const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const desktopNav = document.querySelector('.desktop-nav');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 767){
    mobileNav.classList.remove('active');
    desktopNav.style.display = 'flex';
  } else {
    desktopNav.style.display = 'none';
  }
});

// Set up the the function for the clock
function cycleClock() {
  // Call for current time
  const nowTime = new Date();
  // Set up the hours, minutes, and seconds
  const hourTime = String(nowTime.getHours()).padStart(2, '0');
  const minuteTime = String(nowTime.getMinutes()).padStart(2, '0');
  const secondTime =String(nowTime.getSeconds()).padStart(2, '0');
  // Make a string to display the HH:MM:SS model
  const timeString = `The current time is:  ${hourTime}:${minuteTime}:${secondTime}`;
  // Bring the 'todo-clock' id here to display the time
  document.getElementById('display-clock').innerText = timeString;
}

// 1000ms = 1 second
setInterval(cycleClock, 1000);
cycleClock();
