window.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#burger").addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelector("#burger1").addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })
})