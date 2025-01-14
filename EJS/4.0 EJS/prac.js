import express from "express";

const app = express();
const port = 3000;

// derfining GET routes
app.get("/", (req, res) => {
  const currentDate = new Date();
  const dayNumber = currentDate.getDay();
  let type = "a weekDay";
  let cmmnt = " Chalo college chalte hain !!!";
  if (dayNumber === 0 || dayNumber === 6) {
    type = "a weekend";
    cmmnt = " Chalo ghumne chalte hain !!!";
  }
  console.log(`Today is ${type}, ${cmmnt}`);
  res.render('prac.ejs', {
    dayType : type,
    cmnt : cmmnt,
  });
});

// start a web server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
