/**Here is some extra code that can be easily injected into the .js file submission**/  

/**********************************************************************************************
*Starts a server over localhost:8080
***********************************************************************************************/

function startServer(){
	
	let server = http.createServer(function (request, response) {
	  response.writeHead(200, {'Content-Type': 'text/plain'});
	  response.end('Check Terminal for the output!');
	});
	
	checkServer(server);
}//startServer()

/**********************************************************************************************
*Checks the server status over localhost:8080
***********************************************************************************************/

function checkServer(server){
	/*error checking*/
	if(server){
		server.listen(8080, '127.0.0.1');
	}
	else{
		server.on('error', function (e) {
		  console.log('Error: ' + e + ' causes failure in starting the server. Make sure node.js is ' +
		  'installed properly and the file "partners.json" is in the same directory.');
		});
	}
}//checkServer(server)


/*********************************************************************************************************
This code was to simulate the API call which would normally take place to retrieve the JSON. This
was the original method I tried when retrieving the JSON file.
However, it looks CORS is not enabled on server when I tried it which I assume is intentional by 
the server admin, so in it's place, this submission will be done by a node.js compile for the sake of using 
http require().
*********************************************************************************************************/

let url = https://success.spidergap.com/partners.json;
loadJSON('https://success.spidergap.com/partners.json',
         function(data) { console.log(data); },
         function(xhr) { console.error(xhr); }
);


function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {5
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}//loadJSON(path, success, error)

 /**Author Note: I did contemplate the option of writing code prompting the user first to initialize the showAll 
and distanceFromLondon variables which I would probably do in real-life, but I decided against it due to time constraints
since it wasn't necessarily part of the scope requirement. This at least outputs the assignment
instructions exactly as indicated on the default settings.**/