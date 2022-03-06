// abre e fecha o menu quando clicar no icone: hamburguer e X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clicar em um item do menu, esconde o menu*/

const links = document.querySelectorAll('nav ul li a')

for (link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
