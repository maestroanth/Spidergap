/*************************************************************************************
*Anthony Walter Spidergap Question 2
*
*Date: 9/14/2017
*Purpose: The purpose of this program is to take the incoming file partners.json
*and output all company names and addresses of all partners within 100km.
*
*Please see attached ReadMe.txt for additional instructions or information
***************************************************************************************/

let partners = require('./partners.json');

let showAll = false;//set to true or false. Will also show more verbose information.
let distanceFromLondon = 100;//may set to another distance besides 100km

/*Longitude and Latitude of Central London*/
const LATLONDON = 51.515419;
const LONLONDON = -0.141099;

/**********************************************************************************************
*Outputs company names, office addresses, and distance from Central London <100km. 
*If showAll is set to true, outputs all the above plus the # of offices and their distances. 
*Default setting is false.
***********************************************************************************************/

let getPartnerDistance = function (showAll, distanceFromLondon){
	let newLat;
	let newLon;
	let distance;
	let count = 0;
	
	console.log('\n');	
	
	/*error checking*/
	if (distanceFromLondon < 0)
	{
		throw 'Variable--"distanceFromLondon" cannot be less than zero (0) ';
	}
	if (showAll != true && showAll != false)
	{
		throw 'Variable--"showAll" has to be set to a "true" or "false" boolean ';
	}
	/*end error checking*/
	
	if(showAll == true){
		console.log('Showing all partner companies and their distances from Central London: \n')
	}
	else{
		console.log('Showing all partner companies less than ' + distanceFromLondon + ' km from Central London: \n')
	}

	
	for (let i = 0; i < partners.length; i++){
		for (let j = 0; j < partners[i]['offices'].length; j++){		
			let coordinates = partners[i]['offices'][j]['coordinates'];
			coordinates = coordinates.split(",");
			//Note that typecasting (string to double) will normally have to be done here in strongly typed languages
			newLat = coordinates[0];
			newLon = coordinates[1];
			distance = getGreatCircleDistance(newLat, newLon);
			if(showAll == true || distance < distanceFromLondon){
				count ++;
				console.log('Company Name: ' + partners[i]['organization']);
				if(showAll == true){
					console.log('Company Office: #' + (j+1));
				}
				console.log('Office Address: ' + partners[i]['offices'][j]['address']);
				if(showAll == true){
					console.log('Distance: ' + distance + ' km\n');	
				}
				else{
					console.log('\n');	
				}
			}	
		}
	}
	
	if(showAll == true){
		console.log('Number of all company offices: ' + count);
	}
	else{
		console.log('Number of company offices within distance: ' + count);
	}
	return count;
}//getAllPartnersDistance(showAll)

/**********************************************************************************************
*Calculates Great Circle Distance
***********************************************************************************************/

let getGreatCircleDistance = function (newLat, newLon){
	/*error checking*/
	if (newLat > 90 || newLat < -90)
	{
		throw 'Variable--"newLat" has to be degrees in between -90 and (+)90 ';
	}
	if (newLon > 180 || newLon < -180)
	{
		throw 'Variable--"newLon" has to be degrees in between -180 and (+)180 ';
	}
	/*end error checking*/
	
	let R = 6371e3; // meters
	let φ1 = toRadians(LATLONDON);
	let φ2 = toRadians(newLat);
	let Δφ = toRadians(newLat-LATLONDON);
	let Δλ = toRadians(newLon-LONLONDON);

	let a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
			Math.cos(φ1) * Math.cos(φ2) *
			Math.sin(Δλ/2) * Math.sin(Δλ/2);
	let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	let d = (R * c)/1000;//in km

	return d;
}//getGreatCircleDistance(newLat, newLon)


/**********************************************************************************************
*Converts degrees to radians
***********************************************************************************************/

let toRadians = function (degrees)
{
  return degrees * (Math.PI/180);
}//toRadians(degrees)

/**********************************************************************************************
*Expose functions for testing purposes
***********************************************************************************************/
exports.getGreatCircleDistance = getGreatCircleDistance;
exports.toRadians = toRadians;
exports.getPartnerDistance = getPartnerDistance;


/******************************************************************************************************
*Main
*******************************************************************************************************/

try{
	getPartnerDistance(showAll, distanceFromLondon);
}
catch(err){
	console.log('Error: ' + err + 'while calculating the distance. Please make sure all parameters are valid');
}

/*END MAIN*/
