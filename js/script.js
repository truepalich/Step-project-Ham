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
        }
    }
    // Custom Tabs End //


    // Amazing Work Logic Start //

    // Initial statement for tabs and work contents
    const TAB_ALL_WORK = 'all';
    const LIMIT_WORK_ITEMS = 4;

    let workTabs = document.getElementById('js-work-tabs-list').getElementsByTagName("li");
    let workContents = document.getElementsByClassName('js-item-work');
    let btnLoad = document.getElementById('js-btn-load-more');

    workTabs[0].classList.add('active');

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
        btnLoad.style.display = 'inline-block';
    } else {
        btnLoad.style.display = 'none';
    }

    // Tab click
    let j = 0;
    for (let tab of workTabs) {
        tab.addEventListener('click', function() {
            deleteActiveTabs(workTabs);
            this.classList.add('active');
            let fw = this.getAttribute('data-tab-work');
            filterWorks(fw);

        })
        j++;
    };

    // Filter logic
    function filterWorks(param) {
        let collectionOfWorks = document.getElementsByClassName('js-item-work');

        let visibleWorks = [];
        let notVisibleWorks = [];

        for (let elem of collectionOfWorks) {

            elem.classList.remove('not-active');
            elem.classList.remove('active');

            if (param === TAB_ALL_WORK || elem.getAttribute('data-work') === param) {
                if (visibleWorks.length < LIMIT_WORK_ITEMS) {
                    visibleWorks.push(elem);
                    // notVisibleWorks.push(elem);
                    elem.classList.add('active');
                } else {
                    elem.classList.add('not-active');
                }
            } else {
                elem.classList.add('not-active');
                elem.classList.remove('active');
            }


            //
            // if (param === TAB_ALL_WORK) {
            //
            //     if (visibleWorks.length <= LIMIT_WORK_ITEMS - 1) {
            //         visibleWorks.push(elem);
            //         elem.classList.add('active');
            //     } else {
            //         elem.classList.add('not-active');
            //     }
            //
            //     // elem.classList.remove('not-active');
            //     // elem.classList.add('active');
            // } else if (elem.getAttribute('data-work') === param) {
            //
            //     if (visibleWorks.length <= LIMIT_WORK_ITEMS - 1) {
            //         visibleWorks.push(elem);
            //         elem.classList.add('active');
            //     } else {
            //         elem.classList.add('not-active');
            //     }
            //
            //     // elem.classList.remove('not-active');
            //     // elem.classList.add('active');
            // } else {
            //     elem.classList.add('not-active');
            //     elem.classList.remove('active');
            //     // elem.style.display = 'none';
            // }


        }

        console.log(visibleWorks.length);


        if (visibleWorks.length > LIMIT_WORK_ITEMS) {
            btnLoad.style.display = 'inline-block';
            console.log('block');
        } else {
            btnLoad.style.display = 'none';
            console.log('none');
        }

    }


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