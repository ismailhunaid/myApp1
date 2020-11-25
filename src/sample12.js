import React , {Component} from 'react'

class Sample12 extends Component {
    constructor (props){
        super(props)
        
this.state ={
    profile:'my name is ismail',
}
    }
handleChange =(event) => {
    console.log(this.state.profile)
    this.setState(
        {profile:'my name is burhanuddin'}

    )
}
    render(){
        return(
            <div>
                Sample12
                {this.state.profile}
                <button onClick={() => this.handleChange()}> onClick </button>


            </div>
        )
    }
}



export default Sample12;
