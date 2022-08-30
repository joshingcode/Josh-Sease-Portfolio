

// purify.js
const purify = require("purify-css")


var content = ['*.jsx', ];

// '**/*.html'
var css = ['App.css'];

var options = {
  // Will write purified CSS to this file.
  output: 'purified.css'
};

purify(content, css, options);