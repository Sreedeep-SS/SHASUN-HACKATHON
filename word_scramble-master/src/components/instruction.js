import React, { Component } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import '../styles/instruction.css'

 class Instruction extends Component {
    constructor()
    {
        super()
        this.state = {
            open:true
        }
    }


    render() {


        this.handleClose = () =>
        {
            this.setState({open:false})
            this.props.close()
        } 

        return (
            <div>
        <Modal
        id='modal'
        open={this.state.open}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.state.open}>
          <div id='inst'>
              <h3 id='gi'>GAME INSTRUCTIONS!</h3>
              <hr />
            <div id='lst'>
                <ul>
                    
                    <li>In <b>FREE-PLAY</b> mode there is no time limit.</li><br />
                    <li>In <b>TIMED</b> mode you will have <b>3 Mins</b> at <b>Level 1</b> and <b>30 Sec </b> will be reduced in further levels.</li><br />
                    <li>In <b>TIMED MODE-HARD</b> words cannot be <b>skipped</b>.</li><br />
                   <li>From <b>Level 5</b> the time will be reduced to <b>1 Min</b>.</li><br />
                    <li>A jumbled word will be displayed on screen.</li><br />
                    <li>You have to form <b>Three,Four,Five or Six </b> letter words from the jumbled word.</li><br />
                    <li>For each incorrect word <b>2 Points</b> will be reduced from the score.</li><br />
                    <li>Score <b>100 Points</b> in each level to move on to the next level.</li><br />
                    <li><b>5 Points</b>,<b>10 Points</b>,<b>20 Points</b> and <b>100 Points</b> will be awarded 
                    to each correct <b>Three</b>,<b>Four</b>,<b>Five</b> and <b>Six</b> letter words respectively.
                    </li><br />



                    





                </ul>

            </div>

                
          </div>
        </Fade>
      </Modal>
    </div>
        )
    }
}


export default Instruction