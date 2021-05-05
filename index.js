const fs = require('fs')

/* streamData takes in a filePath of type string
  and a mode, such as 'utf8'.

  It then calls createReadStream for you and returns the result of chunking
  and aggregating your data.
*/
const streamData = (filePath, mode) => {
  const data = ''

  const readStream = fs.createReadStream(filePath, mode)

  readStream.on('data', function(chunk) {
    data += chunk
  }).on('end', function() {
    return data
  })
}
