const list = document.querySelector('ul');
const form = document.querySelector('form');

let rediger = document.getElementById('rediger');

// function to add a person

function addPerson(newPerson) {
	db.collection('person_reg')
		.get()
		.then(() => {
			db.collection('person_reg').add(newPerson);
		});
};

// eventlistener that waits for the submit button press

form.addEventListener("submit", function (e) {
	e.preventDefault();
	let navn = document.getElementById("name").value;
	rediger.innerHTML = "Velkommen, vi ønsker deg alt som er godt, " + navn + "!"
	db.collection("names").doc().set({
			name: navn
		})
		.then(() => {
			console.log("Document successfully written!");
		})
		.catch((error) => {
			console.error("Error writing document: ", error);
		});
});

//a function to push a new person to firebase

db.collection('names').onSnapshot(snapshot => {
	const docs = snapshot.docChanges()
	docs.forEach(doc => {
		if (doc.type == "added") {
			const docdata = doc.doc.data()
			const name = docdata.name
			list.innerHTML += `<li>${name}</li>`,
			list.innerHTML += `<br>`
		};
	});
});

let randomNum = Math.round(Math.random() * 100);
document.getElementById("lykketall").innerHTML = randomNum;

let lastMin = new Date().getMinutes();
let thisMin;
setInterval(function () {
	console.log("kjører")
	thisMin = new Date().getMinutes();
	if (thisMin !== lastMin) {
		lastMin = thisMin;
		randomNum = Math.round(Math.random() * 100);
		document.getElementById("lykketall").innerHTML = randomNum;
	}
}, 1000);