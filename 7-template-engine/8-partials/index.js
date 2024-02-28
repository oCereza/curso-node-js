const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
})

app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

app.get("/dashboard", (req, res) =>{
  const items = ["Item a", "Item b", "Item c"];

  res.render("dashboard", { items: items });
});

app.get('/post', (req, res) =>{
  const post = {
    title:'Aprender Node.js',
    category:'JS',
    body:'Este artigo vai te ajudar a aprender NodeJS...',
  }
  res.render('blogpost',{post})
})

app.get('/blog', (req, res) =>{
  const posts = [
    {
      title: "Aprender NOdeJs",
      category: "JavaScript",
      body: "Test",
    },
  ]
  res.render('blog', {posts})
})

app.get('/', (req, res) =>{

  const user ={
      name: "Ander",
      surname: "Cereza"
  }

  const auth = true

  res.render('home', {user: user, auth})
})

app.listen(3000, ()=>{
  console.log('App funcionando!')
})