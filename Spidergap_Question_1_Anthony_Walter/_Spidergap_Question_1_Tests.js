/********************************************************************************************************
*
*Anthony Walter Spidergap Question 1 Program Tests
*
*Date: 9/14/2017
*
*Please see attached ReadMe.txt for additional instructions or information
********************************************************************************************************/

let main = require('./_Spidergap_Question_1.js');

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
		let objectToClone = 3;
		let clonedObject;
		
		console.log('\nTest 1: Should throw correct error if "objectToClone" is a primitive (3)');
		
		try{
			clonedObject = main.deepClone(objectToClone);
		}
		catch (err){
			//make sure correct error is thrown before 
			if (err == 'Variable--"objectToClone" has to be an object '){
				result = 'pass';
			}
			
			console.log('Error Thrown: ' + err);
		}
		
		console.log('Test Result: ' + result);
		return result;
	},
	
	function test2(){
		let result = 'fail';
		let objectToClone = JSON.parse('{"name": "Paddy", "address": {"town": "Lerum", "country": "Sweden"}}');
		let clonedObject;
		
		console.log('\nTest 2: Should copy all data correctly.');

		try{
			clonedObject = main.deepClone(objectToClone);
		}
		catch (err){
			result = 'fail';//error should not be thrown
			console.log('Error Thrown: ' + err);
		}

		console.log('Input: ' + JSON.stringify(objectToClone));
		console.log('Output: ' + JSON.stringify(clonedObject));
		
		if(JSON.stringify(objectToClone) === JSON.stringify(clonedObject)){
			result = 'pass';
		}
		console.log('Test Result: ' + result);
		return result;
	},
	
	function test3(){
		let result = 'fail';
		let objectToClone = JSON.parse('{"name": "Paddy", "address": {"town": "Lerum", "country": "Sweden"}}');
		let clonedObject;
		
		console.log('\nTest 3: Should be a deep copy and not a shallow copy.');

		try{
			clonedObject = main.deepClone(objectToClone);
		}
		catch (err){
			result = 'fail';//error should not be thrown
			console.log('Error Thrown: ' + err);
		}

		clonedObject['address']['country'] = 'Martian Empire';
		console.log('Input: ' + JSON.stringify(objectToClone));
		console.log('Output: ' + JSON.stringify(clonedObject));
		
		if(JSON.stringify(objectToClone) != JSON.stringify(clonedObject)){//if "country" is different, then it's a deep clone
			result = 'pass';
		}
		console.log('Test Result: ' + result);
		return result;
	},
	
	function shallowCloneExample(){
		let result = 'fail';
		let objectToClone = JSON.parse('{"name": "Paddy", "address": {"town": "Lerum", "country": "Sweden"}}');
		let clonedObject = objectToClone;
		
		console.log('\nExample: Shallow clone (Modifying one object also reflects on the other)');
		objectToClone['address']['country'] = 'Martian Empire';//affects both "objectToClone" and "clonedObject"
		console.log('Input: ' + JSON.stringify(objectToClone));
		console.log('Output: ' + JSON.stringify(clonedObject));
		
		if(JSON.stringify(objectToClone) === JSON.stringify(clonedObject)){//if "country" is same, then it's a shallow clone
			result = 'pass';
		}
		console.log('Test Result: ' + result);
		return result;
	}
]

/******************************************************************************************************
*Main
*******************************************************************************************************/
console.log('\nProgram is running unit tests:');
runTests();
/*END MAIN*/