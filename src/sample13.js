import React, { useState }  from 'react';


 const Sample13 = () => {

    const [list] = useState([{
        name:'ismail',
        age:25
    }])
const list2 = list.map((item)=>{
    return(
        <div>
            <li> {item.name}</li>
            <li> {item.age}</li>
        </div>
    )
})

    return(
        <div>
            this is sample13 functional components using hooks 
    <h3> {list2}</h3>
        </div>
    )

 }
 export default Sample13;