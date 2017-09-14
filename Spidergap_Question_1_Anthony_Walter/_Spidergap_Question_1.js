/*************************************************************************************
*Anthony Walter Spidergap Question 1
*
*Date: 9/14/2017
*Purpose: The purpose of this program is to write a function that takes in an object
*and make a deep copy of it.
*
*Please see attached ReadMe.txt for additional instructions or information
***************************************************************************************/

let deepClone = function( objectToClone ) {
	if (typeof objectToClone !== 'object')
	{
		throw 'Variable--"objectToClone" has to be an object ';
	}
    return JSON.parse(JSON.stringify( objectToClone ));
}

exports.deepClone = deepClone;//exports function to test runner

/******************************************************************************************************
*Main
*******************************************************************************************************/
console.log('\nPlease Run: "node _Spidergap_Question_1_Tests.js" with node.js installed to generate output');

/*END MAIN*/