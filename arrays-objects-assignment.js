// Question 1

// An array of 5 student objects, each with an id, name, age and grades.

const students = [
    {id: 1, name: "Alice Johnson", age: 20, grades: [85, 92, 78]}, 
    {id: 2, name: "Miriam Iloka", age: 21, grades: [70, 65, 80]},
    {id: 3, name: "Akin Williams", age: 19, grades: [90,96,93]},
    {id: 4, name: "Ahmed Bello", age: 22, grades: [58,55,62]},
    {id: 5, name: "Esther Opeyemi", age: 20, grades:[45,50,40]}
];

console.log(students)

//Question 2:
//This function takes an array of grades and calculates the average

function calculateAverage(grades) {
    const total = grades.reduce((sum,grade) => sum + grade, 0);

    const average = total / grades.length;

    return Number(average.toFixed(2));
}

// Use map() to create a new array, each student gets an average property.
const studentsWithAverage = students.map(student => {
    return { ...students, average:  calculateAverage(student.grades)};
});

console.log(studentsWithAverage)

// Question 3
// This function returns only students with average of 60 or higher

function getPassingStudents(students) {
    return students.filter(student => student.average >= 60)
}

const passing = getPassingStudents(studentsWithAverage);

console.log (passing)


// Question 4
// This function accepts;
// 1. An array of students
// 2. A callback function

// Then map() applies the callback to every student.

function processStudents(students, callback) {
    return students.map(student => callback(student))
}

// Add letter grade

// This function adds a letterGrade property based on the student's average.

function addletterGrade(student) {
    let letterGrade;

    if (student.average >= 90) {letterGrade = "A";}
    else if (student.average >= 80) {letterGrade = "B";}
    else if (student.average >= 70) {letterGrade = "c";}
    else if (student.average >= 60) {letterGrade = "D";}
    else {letterGrade = "F"}

    // Return a new object using the spread operator, to prevent the original student object from being modified.

return {
    ...student, letterGrade: letterGrade
};
}

// Add status of "Pass" or "Fail"

function addStatus (student) {
    const status = student.average >= 60 ? "Pass" : "Fail";

    return {
        ...student, status : status
    };
}

const studentsWithGrades = processStudents (studentsWithAverage,addletterGrade);

console.log(studentsWithGrades
)

const studentsWithStatus = processStudents(studentsWithAverage, addStatus);

console.log(studentsWithStatus)
