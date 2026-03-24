import express from 'express';
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const users = [
  {
    nome: "User 1",
    idade:10
},
{
  nome: "User 2",
  idade:20
},
{
  nome: "User 3",
  idade:30
}
]

app.get('/api/users', (req, res) => {
  res.json(users);
});

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});