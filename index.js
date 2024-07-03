const express = require('express');

const app = express();

let courses = [
    { id: 1, name: 'java' },
    { id: 2, name: 'javascript' },
    { id: 3, name: 'python' }
];

app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/courses', (req, res) => {
    // res.send('Hello World');
    res.json(courses);
});

app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    console.log(courses);
    res.json(course);
});


app.put('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found');

    course.name = req.body.name;
    console.log(courses);
    res.json(course);
})

app.delete('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    console.log(courses);
    res.json(course)
})


const port = 3000;
app.listen(port, () => {
    console.log(`The server is listening on http://localhost:${port}`);
})