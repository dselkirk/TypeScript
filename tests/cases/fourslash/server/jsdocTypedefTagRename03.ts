/// <reference path="../fourslash.ts"/>

// @allowNonTsExtensions: true
// @Filename: jsDocTypedef_form3.js
////
//// /** 
////  * @typedef /*1*/[|Person|]
////  * @type {Object}
////  * @property {number} age
////  * @property {string} name
////  */
////
//// /** @type {/*2*/[|Person|]} */
//// var person;

goTo.file('jsDocTypedef_form3.js')
goTo.marker('1');
verify.renameLocations(/*findInStrings*/ false, /*findInComments*/ true);
goTo.marker('2');
verify.renameLocations(/*findInStrings*/ false, /*findInComments*/ true);