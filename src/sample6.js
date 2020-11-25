import React from 'react';

const Sample6 = (props) => {

    const { Fruits } = props;
    // const fruitList = Fruits.map ((list) => {
    //     return(
    //         <div key={list.id}>
    //             <ol>
    //     <li> name:{list.name}</li>
    //     <li> description:{list.discription}</li>
    //     <li> use:{list.use}</li>
    //     <li> image: <img src={list.image} alt={list.name} width="5%" /> </li>

    //             </ol>

    //         </div>
    //     )
    // })

    const fruitList = Fruits.map((list) => {

        return (
            <div key= {list.id} > 
        <h2> name :{list.name}  </h2> 
        </div>
        )
    })[2]


    return (
        <div>
            <p>  this is sample 6 functional Component </p>
    <p> {fruitList}</p>
        </div>
               
    )
}


export default Sample6;
