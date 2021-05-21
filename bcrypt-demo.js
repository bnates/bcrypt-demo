
'use strict';

const bcrypt = require('bcrypt');

let original = 'original string';
let salt = 10;

let hashed;

bcrypt.hash(original, salt)
  .then(data => {
    console.log('bcrypt made this:', data);
  })

bcrypt.compare(original, '$2b$10$zWPYS8Yl0NcT4nLIt4KjnuiakimHIp.kVH0v/Esv6QOM6Xm/2lwTK')
.then(verify => {
  console.log('worked?', verify);
})
