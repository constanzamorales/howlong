const submitBtn = document.getElementById("submit-btn");
const startDate = document.getElementById("start");
const todayBtn = document.getElementById("today-btn");

todayBtn.addEventListener("click", (event) => {
	event.preventDefault();
	var DateTime = luxon.DateTime;
	let today = DateTime.now();
	console.log(today.toISODate());
});

submitBtn.addEventListener("click", (event) => {
	event.preventDefault();
	console.log(startDate.value);
});
