const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("HELLO WORLD, THIS IS HOME PAGE")
});

app.get("/one", (req, res) => {
    res.end("this is simple string response")
});
app.post("/two", (req, res) => {
    res.send("this is simple string response")
})

app.get("/allahname", (req, res) => {
    res.status(505);
    res.send("Rahim, karim, jababr")
})


app.get("users", (req, res) => {
    res.send("This is a user page")
});
app.all("/allReq", (req, res, next) => {
    res.send("This is all request http method")
})
app.post("/post", (req, res) => {
    res.send("POST PAGE")
});
app.put("/put", (req, res) => {
    res.send("PUT PAGE")
});
app.delete("/delete", (req, res) => {
    res.send("DELETE PAGE")
})

const userInformatin = [
    { name: "Rejaul karim", age: 20, ocapation: "Engineer" },
    { name: "Mahabub alam", age: 50, ocapation: "Programmer" },
    { name: "BAbul", age: 50, ocapation: "Programmer" },
    { name: "Shohag", age: 50, ocapation: "Programmer" },
    { name: "jesmin", age: 50, ocapation: "Programmer" }
]
app.get("/userdata", (req, res) => {
    res.status(200)
    res.json(userInformatin)
});
app.get("/download", (req, res) => {
    res.download("./photo/doctor3.png")
});

//response redirect to
app.get("/badsite", (req, res) => {
    // res.send("Bad site")
    res.redirect("http://localhost:8000/goodsite")
});
app.get("/goodsite", (req, res) => {
    res.send("redirected and This are all good site")
});


//response header set
app.get("/six", (req, res) => {
    res.append("name", "Rejaul");
    res.append("age", 40);
    res.append("district", "Barisal");
    res.status(300).end("Append the headers in call api")
})

app.get("/seven", (req, res) => {
    res.append("warning", "201 warning");
    console.log(res.get("warning"));
    res.end()
})

//response set cookie
app.get("/eight", (req, res) => {
    res.cookie("name", "Rejaul karim");
    res.cookie("age", 21);
    res.cookie("study", "Barishal polytechnic institute");
    res.send("Cooke set successfully");
    res.send();
})

//clear cookie
app.get("/nine", (req, res)=>{
    res.clearCookie("karim");
    res.clearCookie("rejaul");
    res.clearCookie("study")
    res.end("cookie clear success");
})
app.listen(port, () => {
    console.log("server run successfully")
})