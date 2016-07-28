$(document).ready(function () {
   $('#fullpage').fullpage({

            //Navigation
            menu: '#menu',
            anchors: ['firstPage', 'secondPage', '3rdPage','4thPage','5thPage','6thPage','lastPage'],
            lockAnchors: false,
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: ['firstSlide', 'secondSlide','3rdSlide','4thSlide'],
            showActiveTooltip: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            normalScrollElements: '#element1, .element2',
            scrollOverflow: false,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: true,
            verticalCentered: true,
            resize: false,
            sectionsColor: ['#ccc', '#fff'],
            paddingTop: '3em',
            paddingBottom: '10px',
            fixedElements: '#header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',

            //events
            onLeave: function (index, nextIndex, direction) { },
            afterLoad: function (anchorLink, index) { },
            afterRender: function () { },
            afterResize: function () { },
            afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) { },
            onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) { }
        });
    });

    $(document).ready(function () {
        $('#carousel').elastislide();
    });

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});  