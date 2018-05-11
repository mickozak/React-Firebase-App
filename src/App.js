import React, {Component} from 'react';
import './App.css';
import Counter from './components/Counter'
import Chat from './components/Chat/Chat'
import Auth from './components/Auth/index'


class App extends Component {

    render() {

        return (
            <div>
                <Auth>
                    <Chat/>
                </Auth>
            </div>
        );
    }
}

export default App;