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
        centerMode: true,
        variableWidth: true
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
            deleteActiveTabs(serviceTabs);
            this.classList.add('active');
            hideAllContents();
            serviceContents[tab.dataset.tab].classList.remove('not-active');
            serviceContents[tab.dataset.tab].classList.add('active');
        })
        i++;
    };

    function hideAllContents() {
        for (let content of serviceContents) {
            content.classList.remove('active');
            content.classList.add('not-active');
        };
    }
    // Custom Tabs End //


    // Amazing Work Logic Start //

    // Initial statement for tabs and work contents
    const TAB_ALL_WORK = 'all';
    const LIMIT_WORK_ITEMS = 12;

    let workTabs = document.getElementById('js-work-tabs-list').getElementsByTagName("li");
    let workContents = document.getElementsByClassName('js-item-work');
    let btnLoad = document.getElementById('js-btn-load-more');
    let preloader = document.getElementById('js-preloader');

    workTabs[0].classList.add('active');
    preloader.classList.add('hide');

    let visibleWorks = [];
    for (let elem of workContents) {
        if (visibleWorks.length < LIMIT_WORK_ITEMS) {
            visibleWorks.push(elem);
            elem.classList.add('active');
        } else {
            elem.classList.add('not-active');
        }
    }

    if (workContents.length > LIMIT_WORK_ITEMS) {
        btnLoad.classList.remove('hide');
        btnLoad.classList.add('show');
    } else {
        btnLoad.classList.remove('show');
        btnLoad.classList.add('hide');
    }

    sessionStorage.setItem('activeTab', TAB_ALL_WORK);
    sessionStorage.setItem('wasShownWorks', 'no');

    // Tab click
    for (let tab of workTabs) {
        tab.addEventListener('click', function() {
            deleteActiveTabs(workTabs);
            this.classList.add('active');
            let fw = this.getAttribute('data-tab-work');
            sessionStorage.setItem('activeTab', fw);
            filterWorks(fw);
        })
    };

    // Filter logic
    function filterWorks(param) {
        let collectionOfWorks = document.getElementsByClassName('js-item-work');

        let visibleWorks = [];
        let allWorks = [];

        for (let elem of collectionOfWorks) {
            elem.classList.remove('not-active');
            elem.classList.remove('active');

            if (param === TAB_ALL_WORK || elem.getAttribute('data-work') === param) {
                if (visibleWorks.length < LIMIT_WORK_ITEMS) {
                    visibleWorks.push(elem);
                    elem.classList.add('active');
                } else {
                    if (sessionStorage.getItem('wasShownWorks') != 'yes') {
                        elem.classList.add('not-active');
                    } else {
                        elem.classList.remove('not-active');
                        elem.classList.add('active');
                    }
                }
                allWorks.push(elem);
            } else {
                elem.classList.add('not-active');
                elem.classList.remove('active');
            }
        }

        if (sessionStorage.getItem('wasShownWorks') != 'yes') {
            if (allWorks.length > LIMIT_WORK_ITEMS) {
                btnLoad.classList.remove('hide');
                btnLoad.classList.add('show');
            } else {
                btnLoad.classList.remove('show');
                btnLoad.classList.add('hide');
            }
        }
    }

    btnLoad.addEventListener('click', function() {
        this.classList.remove('show');
        this.classList.add('hide');
        preloader.classList.add('show');

        setTimeout(function() {
            preloader.classList.remove('show');
            preloader.classList.add('hide');

            let activeTab = sessionStorage.getItem('activeTab');
            let notActiveWorks = document.querySelectorAll('.js-item-work.not-active');

            for (let elem of notActiveWorks) {
                if (elem.dataset.work == activeTab || activeTab == TAB_ALL_WORK) {
                    elem.classList.remove('not-active');
                    elem.classList.add('active');
                }
            }
            sessionStorage.setItem('wasShownWorks', 'yes');
        }, 2000);
    });
    // Amazing Work Logic End //


    // Current Year in Footer Start //
    let fullDate = new Date();
    let currYear = document.getElementById('js-current-year');
    currYear.innerText = fullDate.getFullYear();
    // Current Year in Footer End //


    // Global Functions Start //
    function deleteActiveTabs(param) {
        for (let tab of param) {
            tab.classList.remove('active');
        }
    }
    // Global Functions End //

});