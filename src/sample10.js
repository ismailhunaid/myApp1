import React, { Component } from 'react';
//import Sample11 from './sample11'

class Sample10 extends Component {
    constructor (props) {
super(props)

this.state={
    firstname:'',
    lastname:''

};

//this.handleSubmit = this.handleSubmit.bind(this);
//this.handleChange = this.handleChange.bind(this);


    }
 


handleChange = (event) => {
    
    const t = event.target;
    const n =t.name;
    const v =t.value;
this.setState ( {

   [n]: v
});

}

handleSubmit = (event) => {

    alert(JSON.stringify(this.state))
    alert(this.state.firstname);

    event.preventDefault();

}


    
    render() {
        return(
            <div> 

<h3>
                    this is sample 10 small form for practicing forms 
                </h3>
                
                
                    <form onSubmit={this.handleSubmit} >
                        <div>
  <label htmlFor="firstname"> Firstname:</label>
  <input type="text"  id="firstname" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>

    </div>
                        <div>
                    <label htmlFor="lastname">Lastname: </label>
                    <input type="text" id="lastname"  name="lastname" value={this.state.lastname} onChange={this.handleChange} />

                        </div>
     <input type="submit" value="Register" />

                    </form>

                    
                    
                    
                    

               
                 
                   
    

    </div>




                
               
                     

                
             
                

                
                   
     

    
               


               
            

                    
                    

   

        
       
   




                
               

            
        );
    }
}

export default Sample10;
