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

const plus_button = document.querySelector('.plus_button')
const top_navbar = document.querySelector('.top_navbar')
const plus_friends = document.querySelector('.plus_friends')

plus_button.addEventListener('click', () => {
	top_navbar.classList.toggle('active');
	plus_friends.classList.toggle('active');
})

const back_button = document.querySelector('.back_button')

back_button.addEventListener('click', ()=> {
	top_navbar.classList.toggle('active');
	plus_friends.classList.toggle('active');
})


function register() {
	var friend_name=document.getElementById('friend_name').value
	var pp = document.createElement('p');
	var text = document.createTextNode(`  ${friend_name}`);
	var img = document.createElement('img');
	img.setAttribute("src", "../source/profile.jpg");
	img.setAttribute("width", "50px");
	pp.appendChild(img);
	pp.appendChild(text)
	document.getElementById('all_friends').appendChild(pp)
}

