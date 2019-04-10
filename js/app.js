document.querySelector('#generate-names').addEventListener('submit', loadNames);

//Execute the function to query the API
function loadNames(e){
	e.preventDefault();

//Read the values from the form
const origin = document.getElementById('country').value;
const genre = document.getElementById('genre').value;
const amount = document.getElementById('quantity').value;

//build url
let url = 'http://uinames.com/api/?';

	//read the origin and append to the url
	if(origin !== ''){
				url += `region=${origin}&`;
    }

	//read the origin and append to the url
	if(genre !== ''){
        url += `gender=${genre}&`;
    } 
    //read the origin and append to the url
	if(amount !== ''){
        url += `amount=${amount}&`;
    } 

        //Ajax Call
    const xhr = new XMLHttpRequest();

    //Open AJAX Connection
    xhr.open('GET', url, true);

    //Execute AJAX Request Function

    xhr.onload = function(){
        if(this.status === 200){
            const names = JSON.parse(this.responseText);

            let html = "<h2>Generated Names</h2>";
            html += '<ul class="list">';
            names.forEach(function(name){

                 if(name.name.charAt(0) === "J"){
                    console.log(name.name);
                 };


            });

            document.querySelector('#result').innerHTML = html;
        }
    }
        //Send AJAX Request
        xhr.send();
}
