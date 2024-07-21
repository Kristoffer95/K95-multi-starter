#!/usr/bin/env node
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _inquirer = _interopRequireDefault(require("inquirer"));
var fs = _interopRequireWildcard(require("fs"));
var _path = require("path");
var _url = require("url");
var _createDirectoryContents = _interopRequireDefault(require("./createDirectoryContents.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var CURR_DIR = process.cwd();
var _dirname = (0, _path.dirname)((0, _url.fileURLToPath)(import.meta.url));
var CHOICES = fs.readdirSync("".concat(_dirname, "/templates"));
var QUESTIONS = [{
  name: 'project-choice',
  type: 'list',
  message: 'What project template would you like to generate?',
  choices: CHOICES
}, {
  name: 'project-name',
  type: 'input',
  message: 'Project name:',
  validate: function validate(input) {
    if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;else return 'Project name may only include letters, numbers, underscores and hashes.';
  }
}];
_inquirer["default"].prompt(QUESTIONS).then(function (answers) {
  var projectChoice = answers['project-choice'];
  var projectName = answers['project-name'];
  var templatePath = "".concat(_dirname, "/templates/").concat(projectChoice);
  fs.mkdirSync("".concat(CURR_DIR, "/").concat(projectName));
  (0, _createDirectoryContents["default"])(templatePath, projectName);
});