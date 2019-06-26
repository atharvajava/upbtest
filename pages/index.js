import React  from 'react';
import { Button , Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { saveAs } from 'file-saver';

var FileSaver = require('file-saver');

class Index extends React.Component {
  

    constructor(props) {
        super(props)
        this.state =  {
            time: 0,
            start: 0,
            isOn: false,
            clicks:1,
            currentTime:Date.now(),
            laps:new Object()
        }
        this.state.lapTime= setInterval(() => this.setState({
            currentTime: Date.now()
          }), 1);
        
        console.log(new Date(this.state.currentTime))
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.lapTimer = this.lapTimer.bind(this)
        this.export = this.export.bind(this)
        
    }

    startTimer() {
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time,
            isOn: true,
            clicks:1,
            laptime:undefined
        })
        this.state.lapTime= setInterval(() => this.setState({
          time: Date.now() - this.state.start,
        }), 1);
      }


      stopTimer() {
        this.setState({isOn: false,clicks:1, laps:new Object()})
        clearInterval(this.state.lapTime)
      }

      resetTimer() {
        this.setState({time: 0, laps:new Object()})
      }

      lapTimer() {
        let laps = this.state.laps;
        if(this.state.clicks<= 5) {
            let d = new Date(this.state.time)
            let time = d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() + 
                   " "+ d.getHours()+":"+d.getMinutes()+":"+
                   d.getSeconds()+" "+d.getMilliseconds();
           laps[this.state.clicks]=time;
           this.setState({clicks: this.state.clicks+1 , laps:laps})
        }
      }

      export() {
        let laps = this.state.laps;
        console.log(laps)
        var blob = new Blob([JSON.stringify(this.state.laps)], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "laps.json");
      }

      componentWillMount(){
        
      }

      componentDidMount(){
       
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

      let d = new Date(this.state.currentTime)
      let currentTime = d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() + 
             " "+ d.getHours()+":"+d.getMinutes()+":"+
             d.getSeconds()+" "+d.getMilliseconds();

        return (<React.Fragment>
            <Container>
                <br/>
            <Button color="primary"  >Timer Project</Button>
            <h3>timer: {this.state.time}</h3>
            <h3>Current Time : {currentTime}</h3>
            &nbsp;&nbsp;&nbsp;{start}&nbsp;&nbsp;&nbsp;
            {resume} &nbsp;&nbsp;&nbsp;
            {stop} &nbsp;&nbsp;&nbsp;
            {reset} &nbsp;&nbsp;&nbsp;
            <Button color="primary"  onClick={this.lapTimer} disabled={this.state.time==0 || this.state.clicks==6}>Lap</Button>
            <Button color="primary" onClick={this.export} disabled={this.state.clicks==1}>Export</Button>
            &nbsp;&nbsp;&nbsp;{Object.keys(this.state.laps).map((item,i)=>(
            <p key={item}>{item}: {this.state.laps[item ]}</p>)
            )}
            </Container>
            
        </React.Fragment>)
    }
}



export default Index