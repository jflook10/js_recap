const inventors = [ {first: "Johannes", last: "Kepler", year: 1571, passed: 1630},
	{first: "Nicolaus", last: "Copernicus", year: 1475, passed: 1543},
	{first: "Max", last: "Planck", year: 1858, passed: 1947},
	{first: "Albert", last: "Einstein", year: 1879, passed: 1955}
]

const people = ["Picasso, Pablo", "Van Gogh, Vincent", "Monet, Claude", "Dali, Salvador", "O'Keeffe, Georgia", "Warhol, Andy", "Fish, Janet", "Gauguin, Paul", "Cassatt, Mary", "Gentileschi, Artemisia", "Wassily, Kandinsky", "Kahlo, Frida"]

//Array.prototype.filter()
//Filter the list of inventors for those who were born in the 1500's.

inventors.filter(function(inventor){
	return inventor.year >= 1500 && inventor.year > 1600 ;
});

// inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600)) 


//Array.prototype.map()
// give back array of inventors by first and last name

inventors.filter(function(inventor){
	return inventor.first + " " + inventor.last;
});

//inventors.filter(inventor => ( `{inventor.first} {inventor.last}`));


//Array.prototype.sort
//return inventors by birthday from oldest to youngest
inventors.sort(function(a,b){
	if(a.year > b.year){
		return 1 //makes it bubble to the start
	} return -1;
});

//inventors.sort((a,b) => a.year > b.year ? 1: -1);


//Array.prototype.reduce
//How many years did all the inventors live?

inventors.reduce(function(total,inventor) => {
	return total + (inventor.passed - inventor.year)
}, 0) //need to add the 0 as the start for total, otherwise trying to add when total is undefined, makes wierd big #

//sort inventors by years lived
inventors.sort(function(a,b){
	const guyA = a.passed - a.year;
	const guyB = b.passed - b.year;

	return guyA < guyB ? -1 : 1;  
});


//Create list of blvds in Paris that contain "da" in the name. 
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris 

const links = Array.from(document.querySelectorAll(".mw-category a")) //querySelector returns nodelist and must convert to get an array that can take map. 
const deArray = links.map(link => link.textContent).filter(link => (link.includes("de")));



//Sort people by last name
const newPpl = people.sort(function(a,b){
	//const parts = a.split(", ") //returns the name in one object with first[0] and last[1]
	const [aLast, aFirst] = a.split(", ");
	const [bLast, bFirst] = b.split(", ");
	return aLast > bLast ? -1 : 1;
});


//Sum reoccuring instances of each item 
const transport = ["bike", "car", "bike", "car", "bike", "car", "bus", "walk", "board", "walk", "board"]

const instances = transport.reduce((obj, item) =>{
	!obj[item] ? obj[item] = 1 : obj[item]++;
    return obj;
}, {}) //set empty object that will hold instances

