import React, { Component } from 'react';
import './App.css';


class Sample4 extends Component{

    constructor (props){

super (props)

this.state = {

    movies: [
        {
            id:1,
            moviename:'Avengers Endgame',
            type:'Action',
            image:'assets/images/avengers.jpeg',
        

        },

        {
            id:2,
            moviename:'Star Wars',
            type:'Action',
            image:'assets/images/starwars.jpeg',

        },
        {

            id:3,
               moviename:'SpiderMan',
               type:'Action',
               image:'assets/images/spiderman.jpeg',
        },
        {
            id:4,
            moviename:'once upon a time in Hollywood',
            type:'comedy',
            image:"assets/images/once.jpeg",

        },
    ]


}
    }





    render(){

        const newMovies = this.state.movies.map(( list ) => {

            return (
            
                
                <div key = {list.id}> 
             


        <ol className="List">


        <li> name : {list.moviename}</li>
        <li> type : {list.type} </li> 
        <li className="App" > <img src ={list.image} alt={list.type} width="2%" title="abc" />                              </li>

        
     
     </ol>
           </div>
      
      

 
       

         

                      
                
            )
        });

        return(
            <div>
                {newMovies}



            </div>
        )
    }
} 





   
























  
        
            


    








 


export default Sample4;
