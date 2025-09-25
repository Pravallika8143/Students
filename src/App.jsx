import React from "react"
import StudentTable from "./students/StudentsTable"
function App(){
return (
  <div className="border border-danger border-5 m-5 p-5">
  <h1>Students Table Generation</h1>
  <StudentTable></StudentTable>
  </div>
 )
}

export default App