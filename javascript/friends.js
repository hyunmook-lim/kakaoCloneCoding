const search_button = document.querySelector('.search_button')
const search_box = document.querySelector('.search_box')

search_button.addEventListener('click', () => {
	search_box.classList.toggle('active');
})

const bookmark_button = document.querySelector('.bookmark_button')
const bookmark_list = document.querySelector('.bookmark_list')
var button = document.getElementById("arrowbutton").className

function changebutton () {
	if (button='fas fa-chevron-down') {
		button = 'fas fa-chevron-up'
	} else {
		button = 'fas fa-chevron-down'
	}
}

bookmark_button.addEventListener('click', () => {
	changebutton()
	bookmark_list.classList.toggle('active');
})


