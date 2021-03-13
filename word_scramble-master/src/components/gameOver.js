import React, { Component } from 'react'
import '../styles/gameOver.css'
class GameOver extends Component {
    
    constructor()
    {
        super()

        this.state = {
            guessed:localStorage.getItem('guessed').split(',') ,
            missed: localStorage.getItem('missed').split(',')
        }
    }
    
    render() {
        
     let gw =''
     let mw = ''
    this.genWrds = () =>
        {
            gw =  this.state.guessed.map((word,i) => <h2 id={i} key={i}>{word.toUpperCase()}</h2> )
            mw =  this.state.missed.map((word,i) => <h2 id={i} key={i}>{word.toUpperCase()}</h2>)
            return(gw)
        }

        this.push = (e) => 
        {
            if(e.target.id==='mm')
            {
            this.props.history.push('/')
            localStorage.removeItem('missed')
            }
            if(e.target.id=='cn')
            {
                localStorage.removeItem('missed')
                this.props.history.push('/Game')
            }
    
    }
        
        this.genWrds()
        return (
            <div id='gameOver'>
                <h2 id='go'>GAME OVER!</h2>
                <div id='results'>
                <h2 id='scre'>SCORE: <span>{localStorage.getItem('score')}</span></h2>
                 <div id='wrdscr'>
                     <div id='crtwrds'>
                     <div><h2 id='he'>CORRECT WORDS!</h2>
                     <hr /></div>
                     <br/>
                     <div id='hr'>
                         {gw}
                     </div>
                     
                     
                     </div>

                     <div id='msdwrds'>
                    <div><h2 id='he'>MISSED WORDS!</h2>
                    <hr />
                    </div>
                    <br/>

                     <div id='hr'>
                        {mw}
                        </div>

                    

                     </div>
                 </div>
                 <br/>
                 
                 <button onClick={(e)=>this.push(e)} id='mm'>MAIN MENU</button>
                 <button onClick={(e)=>this.push(e)} id='cn'>RETRY!</button>

                 
                </div>
              
                
            </div>
        )
    }
}


export default GameOver