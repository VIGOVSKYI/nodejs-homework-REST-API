const mongoose = require('mongoose');

const app = require('./app')

const DB_HOST = "mongodb+srv://Urii:UTDglRm59UPLPNvp@cluster01.wuv69yw.mongodb.net/Contacts_data?retryWrites=true&w=majority"

mongoose.connect(DB_HOST)
  .then(() => app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
  }
  )
  );



// UTDglRm59UPLPNvp

// cO8e7gzINBUvHnbA