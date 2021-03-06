const fs = require('fs');
const htmllint = require('htmllint');
const html = fs.readFileSync('htmllint_test.html','utf-8');
const lintOptions = {
    'class-style': 'dash',
};
htmllint(html,lintOptions).then(out => {console.log(out);})
