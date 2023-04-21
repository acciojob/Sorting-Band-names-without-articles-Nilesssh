let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let ans = [];

touristSpots.forEach(element => {
	if(element.startsWith("The"||"A"||"An")){
			ans.push(element);
	}else{
		ans.unshift(element);
	}
});
let str = "";
ans.forEach(element => {
	str += `<li>${element}</li>`;
});
document.getElementById("band").innerHTML = str;

