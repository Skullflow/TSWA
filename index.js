const express  = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/users/:id', (req, res) => {
  if(req.params.id)
    res.json({user: 'nick', id: req.params.id});
  else
    res(404).json({error: true, msg:'not found'});
});

app.listen(3000, () => {
  console.log("TSA listening on 3000")
})
