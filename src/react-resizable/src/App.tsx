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

    const handleResize = (index: number) => (e: any, aaa: any) => {
        console.log(e, aaa)
        column[index] = {
            ...column[index],
            width: aaa.size.width
        }
        setColumn([...column])
    }


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Hello Vite + React!</p>
                <table border={1}>
                    <thead>
                    <tr>
                        {
                            column.map(({head, key, width}, index) => (
                                <Resizable
                                    key={key}
                                    width={width}
                                    height={0}
                                    onResize={handleResize(index)}
                                >
                                    <th width={width}>{head}</th>
                                </Resizable>
                            ))
                        }
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    </tbody>

                </table>
            </header>
        </div>
    )
}

export default App
