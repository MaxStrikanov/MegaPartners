export const burgerMenu = () => {
	const burgerBtn = document.querySelector('.burger');
	const menu = document.querySelector('.header__menu')

	burgerBtn.addEventListener('click', () => {
		
	!document.querySelector('.burger__checkbox').checked ?
			menu.style.transform = 'translateX(0%)'
		:
			menu.style.transform = 'translateX(-100%)'
		
	})
}