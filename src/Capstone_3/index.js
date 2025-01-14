import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.static("public"));
const API_URL = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/";
const config = {
  headers: {
    "X-RapidAPI-Key": "2ba98cb2fbmshf46ad8d3c99e626p135308jsn4b175c9e6923",
    "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
  },
};

app.get("/", async(req, res) => {
  const chapter_number = Math.floor(Math.random() * 19);
  const result = await axios.get(API_URL + `${chapter_number}/`, config);
  res.render("index.ejs",{
    chapterName: result.data.name,
    chapterSummary: result.data.chapter_summary_hindi,
  });
});

app.get("/random", async (req, res) => {
  try {
    const chapter_number = Math.floor(Math.random() * 19);
    console.log(chapter_number);
    const result = await axios.get(API_URL + `${chapter_number}/`, config);

    console.log(result.data.slug + "\n" + result.data.chapter_summary);
    // const valuePassed = {
    //   chapterName: result.data.name,
    //   chapterSummary: result.data.chapter_summary_hindi,
    // };

    res.render("geetaQuotes.ejs", { valuePassed : {
      chapterName: result.data.name,
      chapterSummary: result.data.chapter_summary_hindi,
    }});
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log("Server is ready");
});
