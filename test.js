const fs = require('fs');
fs.writeFile('log.txt', 'Hello Node', { flag: 'a' }, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Data appended!');
});
