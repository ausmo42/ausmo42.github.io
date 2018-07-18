function retrieve() {

	let pokeyDiv = document.getElementById("pokeyDiv");
	pokeyDiv.innerHTML = "<img width=75 height=75 style='display:block; margin-left:auto; margin-right:auto;' src='https://zippy.gfycat.com/SkinnySeveralAsianlion.gif'>";

	let pkid = document.getElementById("pkmnId").value;
	let xhr = new XMLHttpRequest();

	let url = ("https://pokeapi.co/api/v2/pokemon/" + pkid + "/");

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {

			let response = JSON.parse(xhr.response);

			let t1 = document.createTextNode(response.id);
			let t2 = document.createTextNode(response.name);
			let types = response.types.length;
			let t3;
			
			if (types == 1) {
				t3 = document.createTextNode(response.types[0].type.name);
			} else {
				t3 = document.createTextNode(response.types[0].type.name
						+ ", " + response.types[1].type.name);
			}
			pokeyDiv.innerHTML = "";
			let pksprite = response.sprites.front_default
			
			let td1 = document.createElement('td');
			let td2 = document.createElement('td');
			let td3 = document.createElement('td');
			let td4 = document.createElement('td');

			let th1 = document.createElement('th');
			let th2 = document.createElement('th');
			let th3 = document.createElement('th');
			let th4 = document.createElement('th');
			
			let th1t = document.createTextNode('ID');
			let th2t = document.createTextNode('Name');
			let th3t = document.createTextNode('Type');
			let th4t = document.createTextNode('');
			
			let img = document.createElement('img');
			img.setAttribute('src', pksprite);

			let tr1 = document.createElement('tr');
			let tr2 = document.createElement('tr');
			let tr3 = document.createElement('tr');
			let tr4 = document.createElement('tr');
			
			let table = document.createElement('table');
			
			td1.appendChild(t1);
			td2.appendChild(t2);
			td3.appendChild(t3);
			td4.appendChild(img);
			
			th1.appendChild(th1t);
			th2.appendChild(th2t);
			th3.appendChild(th3t);
			th4.appendChild(th4t);
			
			tr1.appendChild(th1);
			tr1.appendChild(td1);
			tr2.appendChild(th2);
			tr2.appendChild(td2);
			tr3.appendChild(th3);
			tr3.appendChild(td3);
			tr4.appendChild(th4);
			tr4.appendChild(td4);
			
			table.appendChild(tr4);
			table.appendChild(tr1);
			table.appendChild(tr2);
			table.appendChild(tr3);
			
			
			pokeyDiv.appendChild(table);
			
		} else if (xhr.readyState == 4 && xhr.status != 200) {
			document.getElementById("pokeyDiv").innerHTML = "<div class='alert alert-danger'>NO SUCH POKEMAN</div>";
		}
	}

	// configure XHR
	xhr.open("GET", url); // state 1
	xhr.send(); // state 2

}