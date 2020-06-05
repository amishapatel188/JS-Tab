// bind events, windows onload because we cant refer to element before it exist!
window.onload = function(){
    const tabHolder = document.getElementById('tabHolder');
    tabHolder.addEventListener('click', onTabClick, false);
}


function onTabClick(event){
    console.log("tab clicked", event);

    // find all tabs who are active
    let activeTabs = document.querySelectorAll('.active');

    // remove active class of all these tabs
    activeTabs.forEach(element => {
        element.className = element.className.replace('active','');
    });

    // add active class to the tab clicked
    event.target.parentElement.className += " active";

    // add active class to the tab content, so that the corresponding tab content is visible
    let elem = document.getElementById(event.target.href.split("#")[1]).className += ' active';
}