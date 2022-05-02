
// PROGRESS BAR

const progressBar = () => {
    let progress = document.querySelector('.progress-bar');
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        let height = document.body.offsetHeight - window.innerHeight;
        let percent = Number(scrollY / height) * 100;
        progress.style.width = percent + '%'; 
    });
}
progressBar();

// MENU MOBILE
const menuMobile = () => {
    let navBar = document.querySelector('.nav');
    let btnMenu = document.querySelector('.btnmenu');
    // let selectMenu = document.querySelectorAll('.nav a');

    btnMenu.addEventListener('click', () => {
        navBar.classList.toggle('active');
        btnMenu.classList.toggle('active');

    });

    window.addEventListener('resize', () => {
        if(window.innerWidth > 768) {
            btnMenu.classList.remove('active');
            navBar.classList.remove('active');
        }
    })
}
menuMobile();

// ADD BG HEADER DESKTOP

const bgHeader = () => {
    
    let header = document.querySelector('header .bottom');
    let heightHeader = header.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= heightHeader) {
            header.classList.add('active');
        }
        else {
            header.classList.remove('active');
        }
    });

    
   
}
bgHeader();



// TAB HOME
// HOME
const projectTab = () => {
    let tabText = document.querySelectorAll('.project__menu .tab');
    let tabList = document.querySelectorAll('.project__card');

    tabText.forEach((item, index) => {
        item.addEventListener('click', () => {
            tabText.forEach((tab) => {
                tab.classList.remove('active');
            })
            tabList.forEach((tabs) => {
                tabs.classList.remove('active');
            })
            item.classList.add('active');
            tabList[index].classList.add('active');
        })
    })
}
projectTab();

// WORK
const workTab = () => {
    let tabText = document.querySelectorAll('.scallwork__menu .tab');
    let tabList = document.querySelectorAll('.scallwork__card');

    tabText.forEach((item, index) => {
        item.addEventListener('click', () => {
            tabText.forEach((tab) => {
                tab.classList.remove('active');
            })
            tabList.forEach((tabs) => {
                tabs.classList.remove('active');
            })
            item.classList.add('active');
            tabList[index].classList.add('active');
        })
    })
}
workTab();



// BACK TO TOP FOOTER
const backToTop = () => {
    let backToTop = document.querySelector(".totop");
    backToTop.addEventListener("click", () => {
        console.log(1);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
backToTop();


// PROJECT DETAIL SLIDER

const sliderHandle = () => {
    let header = document.querySelector('header .bottom');
    
    let slider = ".scproject__slider";
    let btnFull = ".fullscreen";
    let fullscreen = ".flickity-button-icon"

    $(slider).flickity({
        cellAlign: "left",
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        fullscreen: true,
    });
    $(btnFull).on("click", function () {
        $(slider).flickity("viewFullscreen");
    });

    $(fullscreen).on("click", function () {
        header.classList.remove('active');
    })
    

};
sliderHandle();


// SLIDER STUDIO DETAILS

const sliderStudioDetail = () => {
    let iconFullScreen = ".flickity-button-icon"

    $(".scstudioslider__image").flickity({
        cellAlign: "left",
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        fullscreen: true,
    });
    $(".fullscreen").on("click", function () {
        $(".scstudioslider__image").flickity("viewFullscreen");
    });
    $(".btnctrl.btnpre").on("click", function () {
        $(".scstudioslider__image").flickity("previous");
    });
    $(".btnctrl.btnnext").on("click", function () {
        $(".scstudioslider__image").flickity("next");
    });

    $(iconFullScreen).on("click", function () {
        console.log(1);
        header.classList.remove('active');
    })

};
sliderStudioDetail();

// SLIDER CAFE
const sliderCafe = () => {
    let iconFullScreen = ".flickity-button-icon"
    window.addEventListener('DOMContentLoaded', () => {
        $(".scimg__list").flickity({
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            
        });
        $(".btnctr.prev").on("click", function () {
            $(".scimg__list").flickity("previous");
        });
        $(".btnctr.next").on("click", function () {
            $(".scimg__list").flickity("next");
        });
        
        

    })
}
sliderCafe();

// FANCY BOX CAFE

Fancybox.bind("[data-fancybox]", {
    Infinity: true,
    Keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "next",
        ArrowDown: "prev",
        ArrowRight: "next",
        ArrowLeft: "prev",
    }
});

// RENTAL ACTIVE NUMBER
const numberRental = () => {
    let selectNumber = document.querySelectorAll('.scrental__detail-number .list');
   
    selectNumber.forEach((item, index) => {
        
        item.addEventListener('click', () => {
            selectNumber.forEach((item) => {
                item.classList.remove('active');
            })
            item.classList.add('active');

        })
        
    })
}
numberRental();
