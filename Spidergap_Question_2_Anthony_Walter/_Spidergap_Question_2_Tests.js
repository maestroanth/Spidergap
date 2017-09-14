/********************************************************************************************************
*
*Anthony Walter Spidergap Question 2 Program Tests
*
*Date: 9/14/2017
*Be sure to change testMode to true in the other file if you don't want program to execute during tests.
*
*Please see attached ReadMe.txt for additional instructions or information
********************************************************************************************************/

disableLogger();//so program does not output
let main = require('./_Spidergap_Question_2.js');
enableLogger();

/************************************************************************************************************
*Runs all unit tests. Outputs and returns whether or not they all pass by tallying each pass to the max total
*************************************************************************************************************/
function runTests()
{
	let allTrue = false; //only defaults to true if all tests pass
	let result;
	let count = 0;
	
	for (i = 0; i < testArray.length; i++) {
		result = testArray[i]();
		if (result == 'pass'){
			count++;//increases tally if pass
		}
	}
	
	if(count == testArray.length){
		allTrue = true;//if count tally equals the number of totals tests, bool to true
		console.log("\nSuccess!!! All tests passed!");
	}
	else{
		console.log("\nUnfortunately, one or more tests failed....");
	}
	return allTrue;
}//runTests()

/************************************************************************************************************
*Array of test functions
*************************************************************************************************************/
let testArray = [
	function test1(){
		let result = 'fail';//test defaults to "fail" before it meets conditions to pass
		let newLat = -90.2;
		let newLon = 90;
		
		console.log('\nTest 1: Should throw correct error if latitude is less than -90');
		
		try{
			main.getGreatCircleDistance(newLat, newLon);
		}
		catch (err){
			//make sure correct error is thrown before 
			if (err == 'Variable--"newLat" has to be degrees in between -90 and (+)90 '){
				result = 'pass';
			}
			
			console.log('Error Thrown: ' + err);
		}
		
		console.log('Test Result: ' + result);
		return result;
	},

	function test2(){
		let result = 'fail';
		let newLat = 90.2;
		let newLon = 90;
		
		console.log('\nTest 2: Should throw correct error if latitude is greater than 90');
		
		try{
			main.getGreatCircleDistance(newLat, newLon);
		}
		catch (err){
			if (err == 'Variable--"newLat" has to be degrees in between -90 and (+)90 '){
				result = 'pass';
			}
			console.log('Error Thrown: ' + err);
		}
		
		console.log('Test Result: ' + result);
		return result;
	},

	function test3(){
		let result = 'fail';
		let newLat = 77;
		let newLon = -180.2;
		
		console.log('\nTest 3: Should throw correct error if longitude is less than 180');
		
		try{
			main.getGreatCircleDistance(newLat, newLon);
		}
		catch (err){
			if (err == 'Variable--"newLon" has to be degrees in between -180 and (+)180 '){
				result = 'pass';
			}
			console.log('Error Thrown: ' + err);
		}
		
		console.log('Test Result: ' + result);
		return result;
	},

	function test4(){
		let result = 'fail';
		let newLat = 77;
		let newLon = 180.2;
		
		console.log('\nTest 4: Should throw correct error if longitude is greater than 180');
		
		try{
			main.getGreatCircleDistance(newLat, newLon);
		}
		catch (err){
			if (err == 'Variable--"newLon" has to be degrees in between -180 and (+)180 '){
				result = 'pass';
			}
			console.log('Error Thrown: ' + err);
		}
		
		console.log('Test Result: ' + result);
		return result;
	},

	function test5(){
		let result = 'fail';
		let newLat = 52.5381398;
		let newLon = -0.2713853000000199;
		let distance;
		
		console.log('\nTest 5: "distance" should equal aprroximately 114km within 2km');
		
		try{
			distance = main.getGreatCircleDistance(newLat, newLon);
		}
		catch (err){
			result = 'fail';//error shouldn't be thrown
			console.log('Error Thrown: ' + err);
		}
		
		if(distance > 112 && distance < 116){
			result = 'pass';
		}
		console.log('Output: ' + distance);
		console.log('Test Result: ' + result);
		return result;
	},

	function test6(){
		let result = 'fail';
		let newLat = -44.1;
		let newLon = -29;
		let distance;
		
		console.log('\nTest 6: "distance" should equal aprroximately 10990km within 2km');
		
		try{
			distance = main.getGreatCircleDistance(newLat, newLon);
		}
		catch (err){
			result = 'fail';//error shouldn't be thrown
			console.log('Error Thrown: ' + err);
		}
		
		if(distance > 10988 && distance < 10992){
			result = 'pass';
		}
		console.log('Output: ' + distance);
		console.log('Test Result: ' + result);
		return result;
	},

	function test7(){
		let result = 'fail';
		let degrees = 50.2
		let radians;
		
		console.log('\nTest 7: Should equal aprroximately .8761 radians within .0001');
		
		try{
			radians = main.toRadians(degrees);
		}
		catch (err){
			result = 'fail';//error shouldn't be thrown
			console.log('Error Thrown: ' + err);
		}
		
		if(radians > .8760 && radians < .8762){
			result = 'pass';
		}
		console.log('Output: ' + radians);
		console.log('Test Result: ' + result);
		return result;
	},

	function test8(){
		let result = 'fail';
		let distanceFromLondon = -32.1;
		
		console.log('\nTest 8: Should throw correct error if "distanceFromLondon" is less than 0');
		
		try{
			main.getPartnerDistance(showAll, distanceFromLondon);
		}
		catch (err){
			if(err = 'Variable--"distanceFromLondon" cannot be less than zero (0) '){
				result = 'pass';
			}
			console.log('Error Thrown: ' + err);
		}
		
		console.log('Test Result: ' + result);
		return result;
	},

	function test9(){
		let result = 'fail';
		let distanceFromLondon = 700;
		let showAll = false;
		let count;
		
		console.log('\nTest 9: Should output 7 office addresses when "distanceFromLondon" is 700 km');
		
		try{
			disableLogger();
			count = main.getPartnerDistance(showAll, distanceFromLondon);
		}
		catch (err){
			result = 'fail';
			console.log('Error Thrown: ' + err);
		}
		
		if(count == 7){
			result = 'pass';
		}
		enableLogger();
		console.log('Output: ' + count);
		console.log('Test Result: ' + result);
		return result;
	},

	function test10(){
		let result = 'fail';
		let distanceFromLondon = 120;
		let showAll = false;
		let count;
		
		console.log('\nTest 10: Should output 5 office addresses when "distanceFromLondon" is 120 km');
		
		try{
			disableLogger();
			count = main.getPartnerDistance(showAll, distanceFromLondon);
		}
		catch (err){
			result = 'fail';
			console.log('Error Thrown: ' + err);
		}
		
		if(count == 5){
			result = 'pass';
		}
		enableLogger();
		console.log('Output: ' + count);
		console.log('Test Result: ' + result);
		return result;
	},

	function test11(){
		let result = 'fail';
		let distanceFromLondon = 10000;
		let showAll = false;
		let count;
		
		console.log('\nTest 11: Should output 15 office addresses when "distanceFromLondon" is 10000 km');
		
		try{
			disableLogger();
			count = main.getPartnerDistance(showAll, distanceFromLondon);
		}
		catch (err){
			result = 'fail';
			console.log('Error Thrown: ' + err);
		}
		
		if(count == 15){
			result = 'pass';
		}
		enableLogger();
		console.log('Output: ' + count);
		console.log('Test Result: ' + result);
		return result;
	},

	function test12(){
		let result = 'fail';
		let distanceFromLondon = 100000;
		let showAll = false;
		let count;
		
		console.log('\nTest 12: Should output all office addresses (21) when "distanceFromLondon" is 100000 km');
		
		try{
			disableLogger();
			count = main.getPartnerDistance(showAll, distanceFromLondon);
		}
		catch (err){
			result = 'fail';
			console.log('Error Thrown: ' + err);
		}
		
		if(count == 21){
			result = 'pass';
		}
		enableLogger();
		console.log('Output: ' + count);
		console.log('Test Result: ' + result);
		return result;
	},

	function test13(){
		let result = 'fail';
		let distanceFromLondon = 0;
		let showAll = true;
		let count;
		
		console.log('\nTest 13: Should output all office addresses (21) when "distanceFromLondon" is 0 km and "showAll" is set to true');
		
		try{
			disableLogger();
			count = main.getPartnerDistance(showAll, distanceFromLondon);
		}
		catch (err){
			result = 'fail';
			console.log('Error Thrown: ' + err);
		}
		
		if(count == 21){
			result = 'pass';
		}
		enableLogger();
		console.log('Output: ' + count);
		console.log('Test Result: ' + result);
		return result;
	},

	function test14(){
		let result = 'fail';
		let distanceFromLondon = 0;
		let showAll = false;
		let count;
		
		console.log('\nTest 14: Should output no office addresses (0) when "distanceFromLondon" is 0 km and "showAll" is set to false');
		
		try{
			disableLogger();
			count = main.getPartnerDistance(showAll, distanceFromLondon);
		}
		catch (err){
			result = 'fail';
			console.log('Error Thrown: ' + err);
		}
		
		if(count == 0){
			result = 'pass';
		}
		enableLogger();
		console.log('Output: ' + count);
		console.log('Test Result: ' + result);
		return result;
	},
	
	function test15(){
		let result = 'fail';
		let partners = require('./partners.json');
		
		console.log('\nTest 15: Should throw correct error if property "organization" does not exist to sort by ');
		
		/*changing all "organization" keys in partners array to "company" keys*/
		for(let i = 0; i < partners.length; i++){
			partners[i].company = partners[i]['organization'];//copying values into new key
			delete partners[i].organization;//delete old key
		}
		
		try{
			disableLogger();
			main.sortPartners(partners);
		}
		catch (err){
			//make sure correct error is thrown before 
			if (err == 'Object--"partners" has to have the key: "organization" to sort by '){
				result = 'pass';
			}
			console.log('Error Thrown: ' + err);
		}
		
		enableLogger();
		console.log('Test Result: ' + result);
		
		/*changing all "company" keys in partners array back to "organization" keys to not bug future tests to be undefined*/
		for(let i = 0; i < partners.length; i++){
			partners[i].organization = partners[i]['company'];//copying values into new key
			delete partners[i].company;//delete old key
		}
		
		return result;
	},
	
	function test16(){
		let result = 'pass';//this last test it is easier to default true, and then trigger false
		let partners = require('./partners.json');
		
		console.log('\nTest 16: Should be sorted alphabetical order ');
	
		try{
			disableLogger();
			partners = main.sortPartners(partners);
		}
		catch (err){
			result = 'fail';
			console.log('Error Thrown: ' + err);
		}
		
		for(let i = 0; i < partners.length - 1; i++){
			if(partners[i]['organization'] > partners[i+1]['organization'])
			{
				result = 'fail';
			}
		}
		
		enableLogger();
		console.log('Test Result: ' + result);
		return result;
	}
]
/******************************************************************************************************
*Disables and enables Logger accordingly so tests don't output all the text all over again into console
*******************************************************************************************************/
function enableLogger() 
	{
		if(oldConsoleLog == null)
			return;
		console.log = oldConsoleLog;
	};//enableLogger() 

function disableLogger()
	{
		oldConsoleLog = console.log;
		console.log = function() {}; 
	};//disableLogger() 
	
/******************************************************************************************************
*Main
*******************************************************************************************************/
console.log('\nProgram is running unit tests:');
runTests();
/*END MAIN*/