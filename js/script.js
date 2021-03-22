const menuBtn = document.querySelector('.burger'),
      mobileMenu = document.querySelector('.header__nav');
      mobileMenuItems = document.querySelectorAll('.header__nav-item')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.add('mobile');
    mobileMenu.classList.toggle('close');

    mobileMenuItems.forEach(item => {
        item.classList.remove('link-decoration');
    })

    if(!menuBtn.classList.contains('open')) {
        mobileMenu.classList.remove('mobile');
        mobileMenu.classList.add('close');

        mobileMenuItems.forEach(item => {
            item.classList.add('link-decoration');
        })
    }
});