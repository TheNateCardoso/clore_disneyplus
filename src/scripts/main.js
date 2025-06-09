document.addEventListener('DOMContentLoaded', function(){
    const buttons=document.querySelectorAll('[data-tab-button]');
    const questions=document.querySelectorAll('[data-faq-question]');
    
    const heroSection=document.querySelector('.hero');
    const heroHeight=heroSection.clientHeight;

    window;this.addEventListener('scroll', function(){
        const actualPosition=window.scrollY

        if(actualPosition<heroHeight){
            hideHeaderItems();
        } else{
            showHeaderItems();
        }
    })

    //seção shows, programação das abas
    for (let i=0; i<buttons.length;i++){
        buttons[i].addEventListener('click', function(button){
            const targetTab=button.target.dataset.tabButton;
            const tab=document.querySelector(`[data-tab-id=${targetTab}]`);
            hideAllTabs();
            targetTab.classList.add('shows__tabs__button--active');
            removeActiveButton();
            button.target.classList.add('shows__tabs__button--active');
        })
    }

    // seção FAQ
    for (let i=0; i<questions.length; i++){
        questions[i].addEventListener('click', toggleAnswer);
    }
})

function hideHeaderItems(){
    const header=document.querySelector('header');
    header.classList.add('header--hidden');
}

function showHeaderItems(){
    const header=document.querySelector('header');
    header.classList.remove('header--hidden');
}

function toggleAnswer(e){
    const classe ='faq__questions__item--open';
    const parentE = e.target.parentNode;

    parentE.classList.toggle(classe);
}

function removeActiveButton(){
    const buttons=document.querySelectorAll('[data-tab-button]');

    for (let i=0; i<buttons.length;i++){
        buttons[i].classList.remove('shows__tabs__button--active');
    }
}

function hideAllTabs(){
    const tabsContainer=document.querySelectorAll('[data-tab-id]');

    for (let i=0; i<tabsContainer.length;i++){
        tabsContainer[i].classList.remove('shows__tabs__button--active');
    }
}
