import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
class Header extends React.Component {
  render() {
     return (
        <div>
           <h1>Header</h1>
        </div>
     );
  }
}

class Content extends React.Component {
  render() {
     return (
        <div>
           <h2>Content</h2>
           <p>The content text!!!</p>
        </div>
     );
  }
}

class Footer extends React.Component {
  render() {
     return (
        <div>
           <h2>Footer</h2>
           <p>The footer text!!!</p>
        </div>
     );
  }
}
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

function App() {
    return (
    <div>
      <Header />
        <Welcome name="Scary" />
        <Welcome name="Sporty" />
        <Welcome name="Baby" />
        <Welcome name="Ginger" />
        <Welcome name="Posh" />
        <Toggle />
        <Content />
        <Footer />
    </div>
    
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));