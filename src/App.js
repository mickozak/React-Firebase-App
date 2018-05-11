import React, {Component} from 'react';
import './App.css';
import Counter from './components/Counter'
import Chat from './components/chat/Chat'
import Auth from './components/auth'


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