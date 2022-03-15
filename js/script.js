window.addEventListener('DOMContentLoaded', function(){
    const tabs = document.querySelectorAll('.tabheader__item'),//menu
        tabsParent = document.querySelector('.tabheader__items'),//menyular toplami
        tabContent = document.querySelectorAll('.tabcontent'); //rasm   

    function hideTabContent(){
        tabContent.forEach((item)=>{
            item.classList.add('none')
            item.classList.remove('show', 'fade')
        })

        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active')
        })
    }

    hideTabContent()

    function showTabContent(i=0){
        tabContent[i].classList.add('show', 'fade')
        tabContent[i].classList.remove('none')
        tabs[i].classList.add('tabheader__item_active')
    }

    showTabContent()

    tabsParent.addEventListener('click', event => {
        tabs.forEach((item, i)=>{
            if(event.target==item){
                hideTabContent()
                showTabContent(i)
            }
        })
    })

   
})