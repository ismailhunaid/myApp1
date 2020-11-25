
import React, { Component } from 'react';
//import Sample11 from './sample11'

class Sample1 extends Component{



    render(){


        const menu = this.props.age; // single variable
        const saal = this.props.age;

const {name,age , qualification} = this.props; // destructuring 

        return(
            <div>
                <div>  my name is : {menu} </div>
                <div> my age is : {saal} </div>
                <div> my Qualification is : {this.props.qualification} </div>

                <div> my name is : {name} </div>
                <div> my age is : {age} </div> 
                <div> my qualification is : {qualification} </div>
                <div> my qualification is : {this.props.qualification} </div>
                {/*  direct <div> my qualification is : {this.props.qualification} </div>  */}
               
            </div>
        )
    }
}





    

       
    
    
     

export default Sample1;