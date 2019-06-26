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
            isOn: true,
            clicks:1
        })
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
        }), 1);
      }


      stopTimer() {
        this.setState({isOn: false,clicks:1})
        clearInterval(this.timer)
      }

      resetTimer() {
        this.setState({time: 0})
      }

      lapTimer() {
        if(this.state.clicks<= 5) {
           this.setState({clicks: this.state.clicks+1})
           localStorage.setItem(this.state.clicks,this.state.time)
        }
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
            isOn: false,
            clicks:1,
          });
       this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.lapTimer = this.lapTimer.bind(this)
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
            <Button color="primary"  onClick={this.lapTimer}>Lap</Button>
            <span>{localStorage.getItem(1)}</span><br/>
            <span>{localStorage.getItem(2)}</span><br/>
            <span>{localStorage.getItem(3)}</span><br/>
            <span>{localStorage.getItem(4)}</span><br/>
            <span>{localStorage.getItem(5)}</span><br/>
        </React.Fragment>)
    }
}



export default Index