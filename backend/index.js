const express =  require("express")
const app = express();

const port = 5000;

app.listen(port, () => {
    console.log("Server Started at 5000 port");
})