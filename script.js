let students = [
    {
        name: "John Doe",
        className: "S5",
        email: "john@example.com"
    },
    {
        name: "Jane Smith",
        className: "S4",
        email: "jane@example.com"
    }
];

function displayStudents(studentList = students) {
    const table = document.getElementById("studentTable");

    table.innerHTML = "";

    studentList.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.className}</td>
            <td>${student.email}</td>
            <td>
                <button 
                    class="delete-btn"
                    onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        `;

        table.appendChild(row);
    });

    document.getElementById("studentCount").textContent =
        students.length;
}

function addStudent() {
    const name = document.getElementById("studentName").value;
    const className = document.getElementById("studentClass").value;
    const email = document.getElementById("studentEmail").value;

    if (name === "" || className === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }

    students.push({
        name: name,
        className: className,
        email: email
    });

    document.getElementById("studentName").value = "";
    document.getElementById("studentClass").value = "";
    document.getElementById("studentEmail").value = "";

    displayStudents();
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function searchStudents() {
    const searchValue = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchValue) ||
        student.className.toLowerCase().includes(searchValue) ||
        student.email.toLowerCase().includes(searchValue)
    );

    displayStudents(filteredStudents);
}

displayStudents();
