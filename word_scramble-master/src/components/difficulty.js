import React, { Component } from 'react'
import '../styles/difficulty.css'
import img from '../styles/select1.png'
import Instruction from './instruction'




class Difficulty extends Component {

    constructor()
    {
        super()
        this.state = 
        {
            timed:'free',
            modal:null,
        }
    }
    render() {
            
        
        this.instruction = () =>
        {
            this.setState({modal:true})
        }

        this.close = () =>
        {
            this.setState({modal:false})
        }


         this.start = () =>
         {
             localStorage.setItem('dif',this.state.timed)
             this.props.history.push('/Game')
         }

         this.handle = (e) =>
         {
             
           if(e.target.id==='Timed')
           {
               document.getElementById('Timed').style.backgroundImage= `url(${img})`
               document.getElementById('free').style.backgroundImage= 'none'
            document.getElementById('TimedHard').style.backgroundImage= 'none'

               this.setState({timed:'timed'})
           }
           else if(e.target.id==='free')
           {
            document.getElementById('free').style.backgroundImage= `url(${img})`
            document.getElementById('Timed').style.backgroundImage= 'none'
            document.getElementById('TimedHard').style.backgroundImage= 'none'

               this.setState({timed:'free'})
           }
           else
           {
            document.getElementById('TimedHard').style.backgroundImage= `url(${img})`
            document.getElementById('Timed').style.backgroundImage= 'none'
            document.getElementById('free').style.backgroundImage= 'none'

               this.setState({timed:'TimedHard'})

           }
         }


         
        return (
            <div id='select'>
                
                   <h2 id='title'>WORD SCRAMBLE</h2> 
               
                <div id='diff'>
                    <h3 id='subHead'>Select Difficulty</h3>
                    
                    
                        <h2 id='free' onClick={(e)=>this.handle(e)}>FREE-PLAY MODE</h2>
                        <h2 id='Timed' onClick={(e)=>this.handle(e)}>TIMED MODE</h2>
                        <h2 id='TimedHard' onClick={(e)=>this.handle(e)}>TIMED MODE - HARD</h2>

                        {this.state.modal===true?
                        
                            <Instruction close={this.close}/>
                            :
                            null
                        }
                        <br/>
                        <button id='start' onClick={()=>this.start()}>PLAY!</button>
                        <br />
                        <br />
                        
                        <button id='instruction' onClick={()=>this.instruction()}>INSTRUCTIONS!</button>
              

                </div>
                
            </div>
        )
    }

}


export default Difficulty