
const express = require('express');
const users = require('./sample_data.json');
const app = express();
const PORT = 9000;

//ROUTES

app.get('/users', (req, res) => {

    const html = `
    <ul>
       ${users.map( user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
});


//REST APIs
app.get('/api/users',(req, res) => {
    return res.json(users);
}); //returns in JSON format

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id ===id);
  if(user) return res.json(user);
  else return res.status(404).json({message: "User not found"});

});




app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
