//show mobile nav

function toggleNav () {

   const scrollLockPadding = window.innerWidth - document.body.offsetWidth + 'px';
   document.body.style.paddingRight = scrollLockPadding;

   const navModal = document.getElementById('modal-nav');
   navModal.classList.toggle('modal-nav_active');
   document.documentElement.classList.toggle("no-scroll");
}


//scroll to section from nav

const navLinks = document.querySelectorAll('.list__item[data-goto]');
const buttomLink = document.querySelector('.contact-button[data-goto]');
if (navLinks.length > 0) {
   navLinks.forEach (navLink => {
      navLink.addEventListener("click", clickOnNavLink);
   });
   buttomLink.addEventListener("click", clickOnNavLink);

   function clickOnNavLink(e) {
      const navLink = e.target;
      if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
         const gotoBlock = document.querySelector(navLink.dataset.goto);

         if (document.documentElement.clientWidth <= 850 ) {
            const navModal = document.getElementById('modal-nav');
            navModal.classList.remove('modal-nav_active');
            document.documentElement.classList.remove("no-scroll");
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;
            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth",
            });
         }
         else {
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth",
            });
         };
         e.preventDefault();
      }
   }
}
