import React from 'react'
import students from '../assets/students.json'

function StudentTable(){
    var [allstudents,setStudents]=React.useState([...students])
    var[startIndex,setStartIndex]=React.useState(2)
    var[endIndex,setEndIndex]=React.useState(7)

    // function abcd(){
    //     var temp=[...allstudents]
    //     temp.sort(function(a,b){
    //         if(a.name>b.name){
    //             return 1
    //         }else{
    //             return -1
    //         }
    //     })
    //     setStudents([...temp])
    // }
    // function aaaa(){
    //     var temp=[...allstudents]
    //     temp.sort(function(a,b){
    //         if(a.age>b.age){
    //             return 1
    //         }else{
    //             return -1
    //         }
    //     })
    //     setStudents([...temp])
    // }
    // function bbbb(){
    //     var temp=[...allstudents]
    //     temp.sort(function(a,b){
    //         if(a.gender>b.gender){
    //             return 1
    //         }else{
    //             return -1
    //         }
    //     })
    //     setStudents([...temp])
    // }
    // function cccc(){
    //     var temp=[...allstudents]
    //     temp.sort(function(a,b){
    //         if(a.grade>b.grade){
    //             return 1
    //         }else{
    //             return -1
    //         }
    //     })
    //     setStudents([...temp])
    // }


    // Sort
    // function sortByKey(k){
    //     var temp=[...allstudents]
    //     temp.sort(function(a,b){
    //         if(a[k]>b[k]){
    //             return 1
    //         }else{
    //             return -1
    //         }
    //     })
    //     setStudents([...temp])
    // }



//     // Setter Function
//     function sortByKey(k){
//     setStudents(function(currentstudents){
//         var temp=currentstudents.sort((a,b)=>{
//             if(a[k]>b[k]){
//                 return 1
//             }else{
//                 return -1
//             }
//         })
//         return[...temp]
//     })
// }


// for next-5
function sortByKey(k){
    setStudents(function(currentstudents){
        var temp=currentstudents.sort((a,b)=>{
            if(a[k]>b[k]){
                return 1
            }else{
                return -1
            }
        })
        return[...temp]
    })
}
    function next5(){
     setStartIndex(startIndex+5);
     setEndIndex(endIndex+5);
    }

    function back(){
     setEndIndex(endIndex-5);
     setStartIndex(startIndex-5);
    }
     return (
        <div>
            
            <button onClick={()=>{next5()}} className='mb-3 rounded-3'>Next</button>
            <button onClick={()=>{back()}} className='mb-3 rounded-3' style={{marginLeft:"90%"}}>Back</button>
            
            <table  border="2"  className='table table-striped'>
            <thead>
                <tr>
                    <th></th>
                    <th onClick={()=>{sortByKey('name')}}>Name</th>
                    <th onClick={()=>{sortByKey('age')}}>Age</th>
                    <th onClick={()=>{sortByKey('gender')}}>Gender</th>
                    <th onClick={()=>{sortByKey('grade')}}>Grade</th> 

                     
                </tr>
                </thead>
                <tbody>
                   {
                    allstudents.slice(startIndex,endIndex).map((student)=>{
                      return (
                    <tr style={(student.gender==='Female')?{backgroundColor:"lightpink"}:{backgroundColor:"lightblue"}}>
                        {
                            student.gender==='Male' && (<td><img  width="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeatcmYRYsMNho5mAp9qySUzghxQYU_TPGw&s"/></td>)
                        }
                        {
                            student.gender==='Female' && (<td><img  width="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJryFTSQUV8Zuu_EGw2iUCpMbIIKWHBl2eQ&s"/></td>)
                        }
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.gender}</td>
                        <td>{student.grade}</td>
                    </tr>
                 )
                })
            }
            </tbody>
        </table>
        </div>
        
     )
}

export default StudentTable