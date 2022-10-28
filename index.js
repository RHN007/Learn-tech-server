const express = require('express'); 
const app = express()
const port = process.env.PORT || 5001; 
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Thanks For Visiting')
  })
  
const categories = require('./data/categories.json'); 
const courses = require('./data/courses.json')


app.get('/categories', (req, res)=> {
    res.send(categories)
    console.log(categories)
})

app.get('/category/:id', (req, res)=> {
    const id = req.params.id; 
    if(id === "08"){
        res.send(courses)
    }
    else {
        const category_courses = courses.filter(c => c.category_id ===id)
        res.send(category_courses)
    }
   
})

app.get('/courses', (req, res)=> {
    res.send(courses)
})

app.get('/courses/:id', (req, res)=> {
  console.log(req.params.id)
  const id = req.params.id
  const selected_course = courses.find(n => n._id === id)
  res.send(selected_course)
})


app.listen(port, () => {
    console.log(`Example app listen on port ${port}`)
  })
  