import { useState } from "react";
import Button from "../component/Button";


const StudentForm = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState();
  
    const updateStudent = (e) => {
      e.preventDefault();
      const newData = {
        id: students.length + 1,
        name,
        age,
      };
      setStudents((prev) => [...prev, newData]);
      setAge(0);
      setName("");
    };
  
    const deleteStudent = (id) => {
      const newStudents = [...students];
      const updateStudent = newStudents.filter((student) => student.id !== id);
      setStudents(updateStudent);
    };
  

  return (
    <div>
        <form onSubmit={updateStudent}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          placeholder="Enter your age"
        
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button text="Add Student" type="submit" bg="green" />
      </form>
      {students?.map((student) => (
        <div
          key={student.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid black",
            marginTop: "5px",
          }}
        >
          <p>{student.name}</p>
          <p>{student.age}</p>
          <Button
            text="delete"
            bg="red"
            onClick={() => deleteStudent(student?.id)}
          />
        </div>
      ))}
    </div>
  )
}

export default StudentForm