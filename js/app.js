const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
const $intLink = document.querySelectorAll('.int-link')[2];
const $transparenciaSect = document.querySelector('#transparencia');

window.addEventListener('scroll', toggleNavBar, false);

function toggleNavBar() {
  if (pageYOffset >= $logo.offsetHeight && $navBar.classList.contains('abs-pos')) {
    $navBar.classList.remove('abs-pos');
    $navBar.classList.add('fix-pos');
  } else if (pageYOffset < $logo.offsetHeight && $navBar.classList.contains('fix-pos')) {
    $navBar.classList.add('abs-pos');
    $navBar.classList.remove('fix-pos');
  }
}

/*https://www.blogger.com/about/?r=1-null_user

//link do menu via js (abrindo link externo)
const $extLink = document.querySelectorAll('.ext-link')[0];

$extLink.addEventListener('click', openLinkExt, false);

function openLinkExt() {
  window.open('https://www.blogger.com/about/?r=1-null_user', '_blank');
}
*/

// scrool efeito smooth (rolagem suave) só pra um link como exemplo
/*$intLink.addEventListener('click', scrollToSect, false);

function scrollToSect() {
  window.scrollTo({
    top: $transparenciaSect.offsetTop - $navBar.offsetHeight,
    left: 0,
    behavior: 'smooth'
  });
}
*/

// scrool efeito smooth (rolagem suave) para todos os links
const $intLinks = document.querySelectorAll('.int-link a');
$intLinks.forEach(function (cur) {
  cur.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.scrollTo({
      top: document.querySelector(cur.getAttribute('href')).offsetTop - $navBar.offsetHeight,
      left: 0,
      behavior: 'smooth'
    });
  }, false);
})