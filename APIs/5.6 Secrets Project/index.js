import express from "express";
import axios from "axios";
const port = 3000;
const app = express();

const API_URL = "https://secrets-api.appbrewery.com";
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/random/");
    console.log(response.data);
    res.render("index.ejs" ,{secret : response.data.secret , user : response.data.username});
   
  } catch (error) {
    console.error(error);
    // res.send("Error : "+error.message)
    res.status(500);
}
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});