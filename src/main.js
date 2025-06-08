document.addEventListener('DOMContentLoaded', function(){
    const buttons=document.querySelectorAll('[data-tab-button]');
    const questions=document.querySelectorAll('[data-faq-question]');
    
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

    for (let i=0; i<questions.length; i++){
        questions[i].addEventListener('click', toggleAnswer);
    }
})

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
