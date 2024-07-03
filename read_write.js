const fs = require('fs');

const getCourses = async () => {
    try {
        readFile = await fs.promises.readFile('courses.json', 'utf8');
        return JSON.parse(readFile);
    } catch (error) {
        console.log(error);
    }
}

const addCourse = async (course) => {
    try {
        const data = await fs.promises.readFile('courses.json', 'utf8');
        const courses = JSON.parse(data);
        const highestId = courses.reduce((max, course) => Math.max(max, course.id), 0);

        const newCourse = {id: highestId + 1, name: course.name};
        courses.push(newCourse);

        await fs.promises.writeFile('courses.json', JSON.stringify(courses, null, 2));
        return newCourse;
    } catch (error) {
        console.log(`Failed to add course: ${error}`);
    }
}

module.exports = {getCourses, addCourse}