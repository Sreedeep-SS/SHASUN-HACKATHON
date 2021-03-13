import React, { Component } from 'react'
import data from './Words.json'
import '../styles/game.css'
import Timer from './Timer'
import { Link } from 'react-router-dom'
class Game extends Component {
    constructor()
    {
        super()
        this.state= {
            
            disabled:[0,0,0,0,0,0,0,0,0,0,0,0],
            typing:[],
            word :'',
            guessed: [],
            wordsLeft:[],
            letters: [],
            seconds:180000,
            score:0,
            three:[],
            four:[],
            five:[],
            six:[],
            disabledButtons:[],
            error:null,
            random:'',
            scoreDisplay:'',
            displayedWords : [],
            btns:[],
            level:1,
            
            
        }
       
        


    }
    componentDidMount = () =>
    {
        this.random()     
    }
    
  

    render() {

        
    
        
        const words  = Object.keys(data)
        let values =data[this.state.random]


        this.shuffle=() =>{
            
            if(this.state.wordsLeft.length===0)
            {
                localStorage.setItem('missed',values)
            }
    
            let array = this.state.random.split('')
            var shuffled = array.sort(() => Math.random() - 0.5)
            
            if(shuffled.join('')===this.state.random)
            {
            
            this.shuffle()
            }
            else
            {
            shuffled= shuffled.join('').replace(/[^A-Z0-9]/ig, "");
            this.setState({word:shuffled})
            this.resetword()
            }
        }
                 


    this.random =() =>
    {
            
        if(localStorage.getItem('dif')==='TimedHard')
        {
            document.getElementById('skip').style.display='none'
        }
        
     
        let rand= words[Math.floor(Math.random()*words.length)];

        
        if(rand.length>=7 && rand.length<=12 && this.state.displayedWords.includes(rand)===false)
        {
            console.log(rand)   
            this.setState({displayedWords:[...this.state.displayedWords,rand]})
            this.setState({random:rand}, () => this.shuffle())

        }
        else
        {
            this.random()
        }
   
    }

                     
      




    this.letterClicked = (e) =>
    {
        let a = this.state.disabled.slice()
        a[e.target.id] = 1
        this.setState({disabledButtons:[...this.state.disabledButtons,e.target.id]})
        this.setState({disabled:a})
        document.getElementById(e.target.id).style.backgroundColor='#F53F32'
        document.getElementById(e.target.id).style.color='black'

        this.setState({typing:this.state.typing+e.target.value.toUpperCase()})
        this.setState({btns:[...this.state.btns,e.target.id]})
       
    }
    

    

  

    this.reset=()=>
    {
      this.setState({typing:''})
      let a = [0,0,0,0,0,0,0,0,0,0,0,0]
      this.setState({disabled:a})
      this.random()

    }





     this.resetword = () =>
     {
        this.setState({typing:''})
        let a = [0,0,0,0,0,0,0,0,0,0,0,0]
        this.setState({disabled:a})
        console.log(this.state.btns)
        if(this.state.btns.length>0)
        {
        this.state.btns.forEach((i)=>{
           
            document.getElementById(i).style.backgroundColor='#fccde2'
            document.getElementById(i).style.color='#0e153a'
 
    
    })} 
    
    this.setState({btns:[]})
         
     }





     this.genButtons = () =>
     {
     let word = this.state.word
     let alph = word.split('').map((letter,i) => <button id={i} value={letter} key={i}  disabled={this.state.disabled[i]===1?true:false} onClick={(e,i) => this.letterClicked(e,i)} style={{width:'50px',height:'45px',border:'2px black solid',borderRadius:'4px',marginLeft:'5px',backgroundColor:'#fccde2',color:'#0e153a',fontSize:'16px',fontWeight:'bold',boxShadow:'2px 2px 5px black',textShadow:'0.5px 1px black'}}>{letter.toUpperCase()}</button>)
     return alph
     }
 
 
 

     this.leftWords = () =>
     {
         this.state.guessed.forEach((e1)=>{

            if(values.includes(e1)===true)
            {
                const indx = values.indexOf(e1)
                console.log(values[indx])
                 values.splice(indx,1)

            }
         })

         this.setState({wordsLeft:values},()=>{
         localStorage.setItem('missed',this.state.wordsLeft)

         })

     }





     this.enter = () =>{
        
        let x = this.state.typing.toLowerCase()
        
        
        if(x.length===0)
        {
            this.setState({error:'Enter a Word!'})
            setTimeout(()=>
            { 
                this.setState({error:''}) 
            }
            
            
            , 2000);
          this.resetword()
            
        }
        else
        {
        if(x.length>2)
        {
            if(x.length>=7)
            {
                this.setState({error:'Word Should Not Exceed Seven Letters!'})
                setTimeout(()=>
                { 
                    this.setState({error:''}) 
                }
                
                
                , 2000);
            }

        if(values.includes(x) || this.state.guessed.includes(x))
        {
            

            if(this.state.guessed.includes(x)===false)
            {
           this.setState({guessed:[...this.state.guessed,x]}, ()=>
           {
            this.leftWords()
           })
        
           if(x.length===3)
           {
               if(!this.state.three.includes(x))
               {
               this.setState({three:[...this.state.three,x]})
               this.setState({score:this.state.score+5},()=>
               {
                if(this.state.score>=100*this.state.level)
                {
                    this.setState({level:this.state.level+1} ,()=>{
                            if(this.state.level===2)
                            {
                                this.setState({seconds:150000})
                                this.reset()
                            }
                            else if(this.state.level===3)
                            {
                                this.reset()
                                
                                this.setState({seconds:120000})
                            }
                            else if(this.state.level===4)
                            {
                                this.reset()

                                this.setState({seconds:90000})
                            }
                            else
                            {
                                this.reset()

                                this.setState({seconds:60000})
                            }

                    })
                    
                }
               })
               }
               else
               {
                this.setState({error:'Word Already Exist!'})
                setTimeout(()=>
                { 
                    this.setState({error:''}) 
                }
                
                
                , 2000);
               }
        }
           if(x.length===4)
           {
            if(!this.state.four.includes(x))
            {
            this.setState({four:[...this.state.four,x]})
            this.setState({score:this.state.score+10},()=>{
                if(this.state.score>=100*this.state.level)
                {
                    this.setState({level:this.state.level+1} ,()=>{
                        if(this.state.level===2)
                        {
                            this.reset()

                            this.setState({seconds:150000})
                            

                        }
                        else if(this.state.level===3)
                        {
                            this.setState({seconds:120000})
                            this.reset()

                        }
                        else if(this.state.level===4)
                        {
                            this.setState({seconds:90000})
                            this.reset()

                        }
                        else
                        {
                            this.setState({seconds:60000})
                            this.reset()

                        }

                })
                
                }
                }
            )

            }
            else
            {
             this.setState({error:'Word Already Exist!'})
             setTimeout(()=>
             { 
                 this.setState({error:''}) 
             }
             
             
             , 2000);
            }
           }
            if(this.state.typing.length===5)
           {
            if(!this.state.five.includes(x))
            {
            this.setState({five:[...this.state.five,x]})
            this.setState({score:this.state.score+20}, () =>
            {
                if(this.state.score>=100*this.state.level)
                {
                    this.setState({level:this.state.level+1} ,()=>{
                        if(this.state.level===2)
                        {
                            this.reset()
                            this.setState({seconds:150000})
                        }
                        else if(this.state.level===3)
                        {
                            this.setState({seconds:120000})
                            this.reset()

                        }
                        else if(this.state.level===4)
                        {
                            this.setState({seconds:90000})
                            this.reset()

                        }
                        else
                        {
                            this.setState({seconds:60000})
                            this.reset()

                        }

                })
                
                }
            } )

            }
            else
            {
             this.setState({error:'Word Already Exist!'})
             setTimeout(()=>
             { 
                 this.setState({error:''}) 
             }
             
             
             , 2000);
            }           }
           if(this.state.typing.length===6)
           {
            if(!this.state.six.includes(x))
               {
               this.setState({six:[...this.state.six,x]})
               this.setState({score:this.state.score+100}, () => {
                if(this.state.score>=100*this.state.level)
                {
                    this.setState({level:this.state.level+1} ,()=>{
                        if(this.state.level===2)
                        {
                            this.reset()

                            this.setState({seconds:150000})
                        }
                        else if(this.state.level===3)
                        {
                            this.setState({seconds:120000})
                            this.reset()

                        }
                        else if(this.state.level===4)
                        {
                            this.setState({seconds:90000})
                            this.reset()

                        }
                        else
                        {
                            this.setState({seconds:60000})
                            this.reset()

                        }

                })
                
                }
               })

               }
               else
               {
                this.setState({error:'Word Already Exist!'})
                setTimeout(()=>
                { 
                    this.setState({error:''}) 
                }
                
                
                , 2000);
               }
           }
           


        

           
           this.resetword()
           }

           else
           {
            this.setState({error:'Word Already Exists!'})
            setTimeout(()=>
            { 
                this.setState({error:''}) 
            }
            
            
            , 2000);
          this.resetword()

           }
         
        }
        else
        {
            this.setState({error:'Enter a Valid English Word!'})
            if(this.state.score>0)
            {
                if(this.state.score===1)
                {
                    this.setState({score:0})

                }
                else
                {
                this.setState({score:this.state.score-2})
                }
            }

                
            setTimeout(()=>
            { 
                this.setState({error:''}) 
            }
            
            
            , 2000);
          this.resetword()
        }

     }
     
     else
     {
        this.setState({error:"Single And Two Letter Words Don't Count!"})
        if(this.state.score>0)
            {
                if(this.state.score===1)
                {
                    this.setState({score:0})

                }
                else{
                this.setState({score:this.state.score-2})
                }
        
        }
        setTimeout(()=>
        { 
            this.setState({error:''}) 
        }
        
        
        , 2000);
        this.resetword() 
    }
    }

 

}



     this.setTimeHandler = (data) => {
	
		this.setState((st) => {
			return {
				seconds: data.total,
			}
		})
    }
    




    this.backspace = () =>
    {
    
    let y = this.state.typing.split('')
    y.pop()
    this.setState({typing:y.join('')})
    let z = this.state.disabledButtons.pop()
    let d = this.state.disabled 
    d[z] = 0
    this.setState({disabled:d})
    if(this.state.btns.length>0)
    {
    let p = this.state.btns.pop()
    document.getElementById(p).style.backgroundColor='#fccde2'
    document.getElementById(p).style.color='#0e153a'
    }

    }








this.end = () =>
{
    localStorage.setItem('score',this.state.score)
    localStorage.setItem('guessed',this.state.guessed)
    this.props.history.push('/GameOver')
    
}

this.GameOver = () =>
 {
   if(this.state.seconds!==1000 && this.state.seconds>1000)
   {
   
   }
   else
   {
    setTimeout(()=>
    { 
    this.end()   
        
    }
    
    
    , 2000);

    console.log(this.state.seconds)
   }
 }







        return (
            <div id='game'>
            
                <h1 id='wg'>Word Scramble</h1>
                
            <div id='ts'>
                <div id='score'>
                    <h5>SCORE:</h5>
                    <h4 id='scr'>{this.state.score}</h4>
                </div>
                <div id='timer'> 
                
                
    
                <h5 id='sec'>   
                {
                localStorage.getItem('dif')==='timed'?
                <Timer 
              onTimerEndHandler={this.GameOver()} 
              seconds={this.state.seconds} 
               setTimeHandler={this.setTimeHandler} />
                :
                null
                
          
                }
                {
                                  localStorage.getItem('dif')==='TimedHard'?
                                  <Timer 
                                onTimerEndHandler={this.GameOver()} 
                                seconds={this.state.seconds} 
                                 setTimeHandler={this.setTimeHandler} />
                                  :
                                  null
                                  
                }


                </h5>
                </div>
                <div id='level'>
                    <h5>LEVEL:</h5>
                    <h4 id='lvl'>{this.state.level}</h4>
                
                </div>
            </div>    
            <br />               
            <br />               
               
        <div id='words'>
            {this.state.typing}

        </div>
               
               <br />
               <br />

                <div id='keyboard'>
                {this.genButtons()}
                </div>

                <br /><br />
                <div><h2 id='error'>{this.state.error}</h2></div>
                <br />
                <button onClick={()=>this.enter()} id='enter'>ENTER</button>&nbsp;
                <button onClick={()=>this.backspace()} id='backspace'>BACKSPACE</button>
                <br /><br/>
                <button onClick={()=>this.shuffle()} id='jumble'>JUMBLE</button>&nbsp; 
                 <button  onClick={()=>this.reset()} id='skip' >SKIP</button> &nbsp;
                 <button onClick={()=>this.end()} id='end'>END GAME!</button>
                

                 <div id='wordBoxes'>

                     <div id='three'>
                         

                     <h5 id='head'>THREE LETTER WORDS</h5>
                     <hr />
                     <div id='rr'>
                     {this.state.three.map((words,i)=> <h2 key={i}> {words.toUpperCase()} </h2>)}
                 
                     </div>
                     </div>

                     <div id='four'>

                     <h5 id='head'>FOUR LETTER WORDS</h5>
                     <hr />
                     <div id='rr'>
                     {this.state.four.map((words,i)=> <h2 key={i}> {words.toUpperCase()} </h2>)}
                     </div>


                    </div>

                    <div id='five'>

                     <h5 id='head'>FIVE LETTER WORDS</h5>
                     <hr />
                     <div id='rr'>
                     {this.state.five.map((words,i)=> <h2 key={i}> {words.toUpperCase()} </h2>)}
                     </div>
                    </div>


                    <div id='six'>

                     <h5 id='head'>SIX LETTER WORDS</h5>
                     <hr />
                     <div id='rr'>
                     {this.state.six.map((words,i)=> <h2 key={i}> {words.toUpperCase()} </h2>)}
                     </div>
                    </div>


                 </div>

                

            </div>
        )
     
    }

}

export default Game 