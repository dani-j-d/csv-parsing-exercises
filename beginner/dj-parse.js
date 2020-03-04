const parse = require('csv-parse/lib/sync');
const fs = require('fs');

const fileContents = fs.readFileSync(__dirname + '/marvel_characters_info.csv', 'utf-8');

const records = parse(fileContents, {
    columns: true,
    skip_empty_lines: true,
});

const totalCount = records.length;
let maleCount = 0;
let femaleCount = 0;



for (let step = 0; step < 734; step++) {
   if (records[step].Alignment === 'good' && records[step].Gender === 'Female' && records[step].Publisher === 'Marvel Comics') {
    console.log(records[step]);
    console.log();
   }
}

