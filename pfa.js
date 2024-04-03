const width = window.innerWidth;
console.log(width)
const screend = screen.width;
console.log(screend)


// WRTING FOR THE FREQUENTLY ASKED QUESTIONS

	const accordians = document.querySelectorAll('.faqs')
	//const accordian_head = document.querySelectorAll('.accordian-head')

	accordians.forEach(accordian => {
		accordian.addEventListener('click', () => {
			accordian.classList.toggle('show_p')
		})
	})


// WRITING CODE FOR THE THEME SWITCH
	const logo = document.querySelector('#logo')
	const body = document.querySelector('body')
	logo.addEventListener('click', () => {
		body.classList.toggle('dark_theme')
	})

/// WRITING CODE FOR THE UP BUTTON

const arrowUp = document.querySelector('#arrowUp')
arrowUp.addEventListener('click', () =>{
 window.scrollTo({
 	top: 0
 	})
})

window.addEventListener('scroll', ()=>{
	if (window.pageYOffset > 200) {
		arrowUp.classList.add('active')
	}else{
		arrowUp.classList.remove('active')
	}	
})

/// WRITING CODE FOR FOR A STICKY NAVEBAR

// const navBar = document.getElementsByTagName('nav')[0]

// const sticky = navBar.pageYOffsetTop;

// if (window.pageYOffset == ) {}


/// 	WRITIING CODES TO DISPLAY AND HIDE THE NAVIGATION BAR ON SMALL SCREEN DEVICES

const bars = document.querySelector('.fa-bars')
const navUl = document.getElementsByTagName('ul')[0]
const navLi = document.querySelectorAll('.navli')

bars.addEventListener('click', () =>{
	navUl.classList.toggle('active')
})

 
 navLi.forEach(list=>{
 	list.addEventListener('click', ()=>{
	  navLi.forEach(list=>{	 
	   		list.classList.remove('clicked')  
	   })
		 list.classList.add('clicked')
 		navUl.classList.toggle('active')
 	})
 })

// navLi.forEach(list=>{
//  window.addEventListener('click', (e) =>{
//  	if (e.target === list) {
//  		navUl.style.display = 'none'
//  	}
//  }) 	
// })

 // window.addEventListener('click', () =>{
 // 	 navUl.classList.toggle('acitve')
 		
 // 	})