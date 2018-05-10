import React, {Component} from 'react';
import './App.css';
import Counter from './components/Counter'
import Chat from './components/Chat'


class App extends Component {

    render() {

        return (
            <div>
                <Counter/>
                <hr/>
                <Chat/>
            </div>
        );
    }
}

export default App;