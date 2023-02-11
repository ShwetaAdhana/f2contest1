/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {

  arr.map((data, ind) => {
    if (data.marks > 50) {
      console.log(data)
    }
  })
}

function PrintStudentsbyForEach() {
  arr.forEach((data, ind) => {
    if (data.marks > 50) {
      console.log(data)
    }
  })
}

function addData() {

  const data = { id: 4, name: "aditi", age: "20", marks: 45 };
  arr.push(data);
  console.log(arr)

}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter((data, ind) => {
    return data.marks >= 50;
  })

  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const students = [{ id: 5, name: "shweta", age: "25", marks: 51 }, { id: 6, name: "sid", age: "22", marks: 49 }, { id: 7, name: "abhi", age: "20", marks: 50 }]
  arr.push.apply(arr, students)

  console.log(arr)
}

