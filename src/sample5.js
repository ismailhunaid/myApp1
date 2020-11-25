import React ,{ Component } from 'react';
import Sample6 from './sample6'


 class Sample5 extends Component {
     constructor (props) {
         super(props)

         this.state ={
             quranicFruits :[
                 { 
                     id:1,
                     name : 'dates',
                     discription:'Date trees typically reach about 21–23 metres (69–75 ft) in height,[7] growing singly or forming a clump with several stems from a single root system.',
                     use:'beneficial',
                     image:'assets/images/fruits/dates.jpeg'

                 },
                 {
                    id:2,
                     name:'banana',
                     discription:'A banana is an edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.',
                     use:'beneficial',
                     image:'assets/images/fruits/banana.jpeg'
                 },
                 {
                    id:3,
                    name : 'olives',
                    discription:'The olive, known by the botanical name Olea europaea, meaning "European olive", ',
                    use:'beneficial',
                    image:'assets/images/fruits/olives.jpeg'

                 },
                 {
                    id:4,
                    name : 'grapes',
                    discription:'A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis.',
                    use:'beneficial',
                    image:'assets/images/fruits/grapes.jpeg'
                 },
                 {
                    id:5,
                    name : 'pomegranate',
                    discription:'The pomegranate (Punica granatum) is a fruit-bearing deciduous shrub in the family Lythraceae, subfamily Punicoideae, that grows between 5 and 10 m (16 and 33 ft) tall.',
                    use:'beneficial',
                    image:'assets/images/fruits/pomegranate.jpeg'

                 },
                 {
                    id:6,
                    name : 'fig',
                    discription:'Ficus carica is an Asian species of flowering plant in the mulberry family, known as the common fig. It is the source of the fruit also called the fig and as such is an important crop in those areas where it is grown commercially.',
                    use:'beneficial',
                    image:'assets/images/fruits/figs.jpeg'
                 }

             ]

         }
     }


     render(){
         return(
             <div>
                 <h1> this is a parent component for sample 6 </h1>

                 <p> <b>
                 <Sample6 Fruits={this.state.quranicFruits}/>
                 </b>
                    
                 </p>
             </div>
         )
     }
 }




 
export default Sample5;

