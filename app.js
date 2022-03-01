const list = document.querySelector('ul');
const form = document.querySelector('form');

// import { initializeApp } from "firebase/app";
// import { getfirestore } from "firebase/firestore"

// const app = initializeApp(firebaseConfig);

function addPerson(newPerson) {
	db.collection('person_reg')
		.get()
		.then(() => {
			db.collection('person_reg').add(newPerson);
		});
};

form.addEventListener("submit", function(e){
    e.preventDefault();
    let navn = document.getElementById("name").value;
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

db.collection('names').onSnapshot(snapshot => {
    const docs = snapshot.docChanges()
    docs.forEach(doc => {
        if (doc.type == "added") {
            const docdata = doc.doc.data()
            const name = docdata.name
            list.innerHTML += `<li>${name}</li>`;
        };
    });
}); 

list.addEventListener("click", e => {
	const id = e.target.getAttribute("data-id");
	localStorage.setItem("key", id);
	window.location.href = "person.html";
});