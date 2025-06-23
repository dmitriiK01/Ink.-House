window.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.catalog-item_button').forEach(function(tabsBtn){
   tabsBtn.addEventListener('click', function(event) {
     const path = event.currentTarget.dataset.path
   
     document.querySelectorAll('.catalogg-list').forEach(function(tabContent) {
       tabContent.classList.remove('catalogg-list-active')
     })
     document.querySelector(`[data-target="${path}"]`).classList.add('catalogg-list-active')
   })
  })
})

