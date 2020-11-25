import React from 'react';

const Sample9= (props) => {

    const { listOfQuranicFruits} =props 

    const newList = listOfQuranicFruits.map((items)=>{
        return(
            <div key={items.id}>
         
                  <ol>
        <li> {items.name}</li>
        <li> {items.discription}</li>
        <li> {items.use}</li>
        <li> <img src={items.image} alt={items.name} title={items.name} width="60px" /> </li>

                  </ol>
        
 
                    
                        
                
          
            </div>
        )
    })
    return(
        <div>
            <h1>
                this is Sample9 functional component for receiving props from sample7 
                not this is a functional component and  we dont use this whie using functional component
            </h1>

           <div>
           {newList}

           </div>
              
             
         
        </div>
    )
}
export default Sample9;
