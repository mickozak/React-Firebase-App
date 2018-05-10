import React from 'react'
import {database} from '../firebase'

class Counter extends React.Component {
    state = {
        counter: 0
    }

    componentDidMount() {
        database.ref('/Counter')        //metoda firebase
            .on(    //zamiast get
                'value',
                (snapshot) => {
                    this.setState({
                        counter: snapshot.val()
                    })
                }
            )  //once podobnie jak addeventlisener  once jednorazowo on ielorazowo, wywołuje snapshot - urywek - rob to jak zmieni sie to w bazie danych
    }

    saveToDb = (data) => database.ref('/Counter').set(data) //zamiast put


    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={() => this.saveToDb(this.state.counter - 1)}>-</button>
                <button onClick={() => this.saveToDb(this.state.counter + 1)}>+</button>
            </div>
        )
    }
}

export default Counter