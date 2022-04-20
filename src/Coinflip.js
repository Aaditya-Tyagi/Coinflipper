import React, { Component } from 'react'
import Coin from './Coin'
import "./Coinflip.css"
import { choice } from './Helper'

class Coinflip extends Component{
   static defaultProps = {
    coins:[ {side:"heads", imgSrc:"https://tinyurl.com/react-coin-heads-jpg"},
            {side:"tails", imgSrc:"https://tinyurl.com/react-coin-tails-jpg"}
    ]};
    constructor(props){
        super(props)
        this.state={
          nflips:0,
          nheads:0,
          ntails:0,
          currCoin:null,
        }
       
        this.handleClick=this.handleClick.bind(this);
    }
   Tossing(){
       const newCoin=choice(this.props.coins);
    this.setState(st=>{
        return{
            currCoin:newCoin,
            nflips:st.nflips+1,
            nheads:st.nheads +(newCoin.side==="heads"?1:0),
            ntails:st.ntails +(newCoin.side==="tails"?1:0)

        }
    }) }
    
   handleClick(){
       this.Tossing();
   }
    render(){
       return(    
            <div className='Coinflip'>
            <h1>Lets flip a Coin!!</h1>
          <div>  {this.state.currCoin&&<Coin info={this.state.currCoin}/>}</div> 
            <button onClick={this.handleClick}>Flip Coin!</button>
            <p>Out of {this.state.nflips},There have been {this.state.nheads} heads and {this.state.ntails} Tails.</p>
         </div>
        )
    }
}
export default Coinflip;