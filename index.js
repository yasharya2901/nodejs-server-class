const express = require('express');

const app = express();

let courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.json(courses);
});


const port = 3000;
app.listen(port, () => {
    console.log(`The server is listening on http://localhost:${port}`);
})