const menuBtn = document.querySelector('.menu-btn');
     const hamburger = document.querySelector('.menu-btn_burger');
     const nav = document.querySelector('nav');
     const sideBar= document.querySelector('.side-bar');
     const sideBarNav = document.querySelector('.side-bar_nav');

     const containerInner = document.querySelector('.container_inner');


    menuBtn.addEventListener('click', toggleMenu);


   let show = false ;

    function toggleMenu(){

        if(!show){
            hamburger.classList.add('open');
            sideBar.classList.add('open');
            nav.classList.add('open');
            sideBarNav.classList.add('open');
            containerInner.classList.add('open');

            show = true;
        }else{
            hamburger.classList.remove('open');
            sideBar.classList.remove('open');
            nav.classList.remove('open');
            sideBarNav.classList.remove('open');
            containerInner.classList.remove('open');


            show = false;
        }

    }

   
     

















