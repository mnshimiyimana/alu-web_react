// the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// student variables
const student1: Student = {
    firstName: "Marie",
    lastName: "Jane",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Sam",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Store them in an array
const studentsList: Student[] = [student1, student2];

//Rendering the table
function renderTable(students: Student[]): void {
    const table = document.createElement('table');
    document.body.appendChild(table);

    students.forEach(student => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell(0);
        const locationCell = row.insertCell(1);

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
    });
}

renderTable(studentsList);
