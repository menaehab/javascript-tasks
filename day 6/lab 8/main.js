let students = new Map([
  [
    "John",
    {
      Grades: [
        { Coursename: "JavaScript", Grade: "Excellent" },
        { Coursename: "HTML", Grade: "Good" },
        { Coursename: "CSS", Grade: "Good" }
      ]
    }
  ],
  [
    "Jane",
    {
      Grades: [
        { Coursename: "JavaScript", Grade: "Good" },
        { Coursename: "PHP", Grade: "Excellent" },
        { Coursename: "CSS", Grade: "Excellent" }
      ]
    }
  ],
  [
    "Jae",
    {
      Grades: [
        { Coursename: "PHP", Grade: "Good" },
        { Coursename: "Python", Grade: "Good" },
        { Coursename: "SQL", Grade: "Excellent" }
      ]
    }
  ]
]);

let x = document.getElementById("loop");
students.forEach((studentData, name) => {
  x.innerHTML += `<h3>${name}</h3><ul>`;

  studentData.Grades.forEach((grade) => {
    x.innerHTML += `<li>${grade.Coursename}: ${grade.Grade}</li>`;
  });
  x.innerHTML += `</ul>`;
});

// ====================================== //


let select = document.getElementById("students");

students.forEach((_, name) => {
  let option = document.createElement("option");
  option.value = name;
  option.text = name;
  select.appendChild(option);
});

select.addEventListener("change", function () {
  let selected = select.value;
  let grades = document.getElementById("grades");
  grades.innerHTML = "";
  if (students.has(selected)) {
    let studentData = students.get(selected);
    grades.innerHTML = `<h3>${selected}'s Grades:</h3><ul>`;
    studentData.Grades.forEach((grade) => {
      grades.innerHTML += `<li>${grade.Coursename}: ${grade.Grade}</li>`;
    });
    grades.innerHTML += "</ul>";
  }
});
