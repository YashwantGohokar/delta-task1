var gender;
var age;
var height;
var weight;
var proteins;
var carbs;
var fats;
var cal = 0;
var calories;

var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");

var calorieDisplay = document.querySelector("#calorie");

b1.addEventListener("click", function(){
	gender = document.querySelector("input").value;
	age = Number(document.getElementsByTagName("input")[1].value);
	height = Number(document.getElementsByTagName("input")[2].value);
	weight = Number(document.getElementsByTagName("input")[3].value);
	calCalories(gender);
});

b2.addEventListener("click", function(){
	proteins = Number(document.getElementsByTagName("input")[5].value);
	carbs = Number(document.getElementsByTagName("input")[6].value);
	fats = Number(document.getElementsByTagName("input")[7].value);
	addCal();
	calDisplay(cal, calories);
	reset();
});

function calCalories(gender) {
	if(gender === "female" || gender === "Female") {
		calories = 655.1 + (9.6 * weight) + (1.9 * height) + (4.7 * age);
	}
	else if(gender === "male" || gender === "Male") {
		calories = 66.5 + (13.8 * weight) + (5 * height) + (6.8 * age);
	}
}

function calDisplay(cal, calories){
	if(cal > (calories + 100)){
		calorieDisplay.textContent = "You are eating more than you should. You consumed " + (cal - calories) + " more calories than your requirements.";
	}
	else if(cal < (calories + 100) && cal > (calories - 100)) {
		calorieDisplay.textContent = "You have completed your daily requirement. Don't eat anything now.";
	}
	else {
		calorieDisplay.textContent = "You need " + (calories - cal) + " more calories to fulfill your daily requirement.";
	}
}

function addCal(){
	cal += proteins + carbs + fats;
}

function reset(){
	for(var i = 4; i < 8; i++){
	document.getElementsByTagName("input")[i].value = "";
	}
}