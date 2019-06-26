import React  from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ms from "pretty-ms";
import Clock from 'react-live-clock';

class Index extends React.Component {


    startTimer() {
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time,
            isOn: true
        })
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
        }), 1);
      }


      stopTimer() {
        this.setState({isOn: false})
        clearInterval(this.timer)
      }

      resetTimer() {
        this.setState({time: 0})
      }


    setTime(){
  
        let currentdate = new Date();
        let hours = currentdate.getUTCHours()+2    
      
          
          if( hours >= 24 ){ hours -= 24; }
          if( hours < 0   ){ hours += 12; }
    
          hours = hours + "";
          if( hours.length == 1 ){ hours = "0" + hours; }
    
          
          let minutes = currentdate.getUTCMinutes();
    
          
          minutes = minutes + "";
          if( minutes.length == 1 ){ minutes = "0" + minutes; }
    
          let seconds = currentdate.getUTCSeconds();
          //console.log(hours, minutes, seconds)
          this.setState({
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            time: 0,
            start: 0,
            isOn: false
          });
      }

      componentWillMount(){
        this.setTime();
        /*window.setInterval(function () {
            this.setTime();
          }.bind(this), 1000);*/
      }

      componentDidMount(){
        this.setState({
            time: 0,
            start: 0,
            isOn: false
          });
       this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
     }

    
     

    render() {
        

        let start = (this.state.time == 0) ?
      <Button onClick={this.startTimer}>start</Button> :
      null
    let stop = (this.state.isOn) ?
      <Button onClick={this.stopTimer}>stop</Button> :
      null
    let reset = (this.state.time != 0 && !this.state.isOn) ?
      <Button onClick={this.resetTimer}>reset</Button> :
      null
    let resume = (this.state.time != 0 && !this.state.isOn) ?
      <Button onClick={this.startTimer}>resume</Button> :
      null

        return (<React.Fragment>
            
            <Button color="primary"  >Timer Project</Button>
            
            
            <div >
                <label>Real - Time : </label>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Berlin'} />
            </div>
            

            <h3>timer: {ms(this.state.time)}</h3>
            {start}
            {resume}
            {stop}
            {reset}
        </React.Fragment>)
    }
}



export default Index