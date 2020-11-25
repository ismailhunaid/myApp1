import React ,{ Component } from 'react';
import { Fruits}  from './shared/shared'
import Sample8 from './sample8';
import Sample9 from './sample9';

class Sample7 extends Component{

    constructor(props){
        super(props)

        this.state = {
            listOfQuranicFruits:Fruits
        }
    }
    render(){
        return(
            <div>
         
         
         
           <h4> this is sample7 a practice to passing data from parent to children 
               using class component</h4>
            

          
<p>
   <Sample8 listOfQuranicFruits={this.state.listOfQuranicFruits}/>
   <Sample9 listOfQuranicFruits={this.state.listOfQuranicFruits}/>
</p>
</div>
        )

    }
}

export default Sample7;
