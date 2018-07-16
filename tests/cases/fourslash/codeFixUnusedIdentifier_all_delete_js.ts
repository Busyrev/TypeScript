/// <reference path='fourslash.ts' />

// @allowJs: true

// @Filename: /a.js
/////** @template T Parameter doc comment */
////function f() {}
////
/////**
//// * Doc
//// * @template T Comment
//// */
////function g() {}
////
/////**
//// * Doc
//// * @template T Comment
//// * @template U Comment
//// */
////function h() {}
////
/////** @template T Comment @return {void} */
////function i() {}
////
/////**
////Doc
////@template T comment
////@template U comment
////@param {number} x
////*/
////function j(x) { return x; }

verify.codeFixAll({
    fixId: "unusedIdentifier_delete",
    fixAllDescription: "Delete all unused declarations",
    newFileContent:
`
function f() {}

/**
 * Doc
 * Comment
 */
function g() {}

/**
 * Doc
 * Comment
 * Comment
 */
function h() {}

/** Comment @return {void} */
function i() {}

/**
Doc
comment
comment
@param {number} x
*/
function j(x) { return x; }`,
});
