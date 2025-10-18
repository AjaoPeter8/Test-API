import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const now = new Date();
const timestamp = now.toISOString();

let fact = "";

let user = {
    email: "oluwafemipeter02@gmail.com",
    name: "Ajao Peter Oluwafemi",
    stack: "Node.js/Express"
}
    const status = "success";



app.get("/me", async (req, res) => {

    try {
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    fact = response.data.fact;

    console.log(fact);
}
catch (error) {
    fact = `Failed to fetch`;
    console.log(error);
}

console.log(timestamp);
    console.log(user);
    res.json({ status, user, timestamp, fact});
})

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});