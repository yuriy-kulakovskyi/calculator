import React from 'react';
import './Time.scss';

function FormattedDate(props) {
  let element;
  props.date.getMinutes() < 10 ? element = <p className="time__content">{props.date.getHours()}:0{props.date.getMinutes()}</p> : element = <p className="time__content">{props.date.getHours()}:{props.date.getMinutes()}</p>
  return element;
}

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    return (
      <div className='time'>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default Time;