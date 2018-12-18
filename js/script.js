$(document).ready(function(){

    // Init Slider Start //
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        // centerMode: true,
        // variableWidth: true
    });
    // Init Slider End //


    // Custom Tabs Start //
    const serviceTabs = document.getElementById('js-service-tabs').getElementsByTagName("li");
    const serviceContents = document.getElementsByClassName('js-service-tabs-content');

    // Initial statement for content
    serviceTabs[0].classList.add('active');
    hideAllContents();
    serviceContents[0].classList.remove('not-active');
    serviceContents[0].classList.add('active');

    // Tabs logic
    let i = 0;
    for (let tab of serviceTabs) {
        tab.setAttribute("data-tab", i);
        tab.addEventListener('click', function() {
            deleteActiveTabs();
            this.classList.add('active');
            hideAllContents();
            serviceContents[tab.dataset.tab].classList.remove('not-active');
            serviceContents[tab.dataset.tab].classList.add('active');
        })
        i++;
    };

    function deleteActiveTabs() {
        for (let tab of serviceTabs) {
            tab.classList.remove('active');
        }
    }

    function hideAllContents() {
        for (let content of serviceContents) {
            content.classList.remove('active');
            content.classList.add('not-active');
        }
    }
    // Custom Tabs End //


    // Current Year in Footer Start //
    let fullDate = new Date();
    let currYear = document.getElementById('js-current-year');
    currYear.innerText = fullDate.getFullYear();
    // Current Year in Footer End //

});