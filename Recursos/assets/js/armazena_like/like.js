const fs = require('fs');
const file = 'like-count.txt';

if (process.argv[2]) {
  fs.writeFileSync(file, process.argv[2]);
}

const likeCount = fs.readFileSync(file, 'utf-8');
