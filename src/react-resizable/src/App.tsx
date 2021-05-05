import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {Resizable} from 'react-resizable'

function App() {
    const [column, setColumn] = useState([
        {
            head: 1,
            key: 1,
            width: 100
        },
        {
            head: 2,
            key: 2,
            width: 200
        }
    ])

    const handleResize = (e: any) => {
        console.log(e)
    }


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Hello Vite + React!</p>
                <table>
                    <thead>
                    {
                        column.map(({head, key, width}, index) => (
                            <Resizable
                                key={key}
                                width={width}
                                height={0}
                                onResize={handleResize}
                            >
                                <th>{head}</th>
                            </Resizable>
                        ))
                    }
                    </thead>
                </table>
            </header>
        </div>
    )
}

export default App
