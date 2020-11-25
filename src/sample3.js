import React ,{Component} from 'react';

class Sample3 extends Component {

   state = {
        items : [
            {
                name:'chicken Masto kabab',
                description:'Creamy chicken kabab, marinated in green spices to tantalise your taste buds',
                price:1000,
                id:1
            },
           {
               name:'MUTTON KOFAT KABAB',
               description:'Spicy mutton kabab marinated in reg and green spices to give a punch of flowers',
               price:2000,
               id:2
           },
           {
            name:'JOJA SHASHLIK BOTI',
            description:'Creamy based chunks of chicken, grilled with vegetables on skewers',
            price:3000,
            id:3
           },

            
        ]
    }

    

    

    render(){
        
        const newItem = this.state.items.map((value) =>{

            return (

                <div>   
                <div key={value.id}> </div>

           <ol>
               <li> name : {value.name} </li>
               <li> description: {value.description} </li>
               <li> price : {value.price} </li>
           </ol>
               

            </div>
                
            )
        })
    





        return(
            <div>
                <b> sample 3 using map to create a list from an array</b>

                <div>
                    {newItem}
                </div>
            </div>

        )
    }
}

export default Sample3;
