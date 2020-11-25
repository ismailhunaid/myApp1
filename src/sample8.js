import React , { Component }  from 'react';


class Sample8 extends Component{
  
    render(){

        const { listOfQuranicFruits}  = this.props
        const newListOfFruits=listOfQuranicFruits.map((newList)=>{
            return(
                <div key={newList.id}>
                    <ol>
                   
                 <li> {newList.name} </li>
                        <li> {newList.discription} </li>
                        <li> {newList.use} </li>
                        <li> <img src={newList.image} alt={newList.name} /> </li>
                    </ol>

                </div>
            )
        })

        return(
            <div>
                <h2> Sapmple 8 inside sample7 component to passing data from parent to childen using props and class component</h2>
              
            
            <p>
                {newListOfFruits}
            </p>
         
            </div>
        )
    }
}
export default Sample8;
