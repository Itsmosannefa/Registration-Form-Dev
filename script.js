const registerbtn = document.getElementById('signUp');
const loginbtn = document.getElementById('signIn');
const container = document.getElementById('container');

registerbtn.addEventListener('click', () => {
	container.classList.add("active");
});

loginbtn.addEventListener('click', () => {
	container.classList.remove("active");
});