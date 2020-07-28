const fs = require('fs');

const printData = function(data) {
  console.log('Return value: ', data);
}

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile..."');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");

    if (!error) callback(data);
    else callback(undefined);
  });
};


//breedDetailsFromFile('Bombay', printData);

module.exports = breedDetailsFromFile;