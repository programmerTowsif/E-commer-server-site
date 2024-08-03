const app = require("./app");
const connectDB = require("./config/db");
const { serverPort } = require("./secret");

app.listen(serverPort, async() => {
  console.log(`server is runnig at http://localhost:${serverPort}`);
 await connectDB()
});
