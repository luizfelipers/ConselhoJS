import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    advice:'',
  };

  componentDidMount(){
   // console.log('Component Did really mount');
    this.fetchAdvice()
   
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=> {
const {advice} = response.data.slip;

      console.log(advice)
      this.setState({advice});
    })
    .catch((err)=>{
      console.log(err)
    });
  }


  render() {const {advice} = this.state;

    return (


      <div className="App">
        <div className='titulo'>
          <h1>App Conselhos</h1>
        </div>
        
        <br></br>
        <div className='card'>
            <h2 className='heading'>{advice}</h2>
       <button className='botao' onClick={ this.fetchAdvice() }>
         Me dê conselho!</button> 
        
      </div>
        </div>
       
    );
  }


}

export default App;
