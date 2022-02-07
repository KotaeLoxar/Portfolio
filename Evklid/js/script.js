document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.working__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.working__block').forEach(function (tabContent) {
        tabContent.classList.remove('working__block_active')
      })

      document.querySelectorAll('.working__btn').forEach(function (btnActive) {
        btnActive.classList.remove('working__btn_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('working__block_active')
      document.querySelector(`[data-path="${path}"]`).classList.add('working__btn_active')
    })
  })



  document.querySelector("#burger").addEventListener('click', function () {
      document.querySelector('#menu').classList.toggle('is-active')
  })



  document.querySelector("#burger1").addEventListener('click', function () {
      document.querySelector('#menu').classList.toggle('is-active')
  })



  document.querySelector("#btn1").addEventListener('click', function () {
      document.querySelector('#search').classList.toggle('is-active')
  })



  document.querySelector("#btn2").addEventListener('click', function () {
      document.querySelector('#search').classList.toggle('is-active')
  })
})