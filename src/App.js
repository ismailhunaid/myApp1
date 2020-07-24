import React ,{Component} from 'react';
import Sample1 from './sample1';
import Sample2 from './sample2';
import Sample3 from './sample3';
import Sample4 from './sample4';
import Sample5 from './sample5';
import Sample7 from './sample7';
import Sample10 from './sample10';
//import Sample11 from './sample11';
import Sample12 from './sample12';
import Sample13 from './sample13';
import Sample14 from './sample14';

class App extends Component{
 

  render(){

    return(
      <div>

    
      <div>

       
        <h1>
        this my root component 
        </h1>

     
<Sample1  name="Hatim"  age="28" qualification="Haafiz" />
                  
                    
        
        <Sample2 />
     
         
          <Sample3 />
       <div>
       <Sample4 /> 

       </div>
       <div>
         <Sample5 />
         </div>
         <div>
         <Sample7 />
         </div>
       
       
         <Sample10 />
       
       
       <Sample12 />
<Sample13 />
          </div>
          <Sample14 />
      </div>
    )
  }

}

export default App;
