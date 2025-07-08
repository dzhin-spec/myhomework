const tabs = document.querySelectorAll('[data-tab-value]');
const tabInfos = document.querySelectorAll('[data-tab-info]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Убираем активный класс у всех контентов
        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active');
        });
        
        // Показываем нужный контент
        const target = document.querySelector(tab.dataset.tabValue);
        target.classList.add('active');
    });
});