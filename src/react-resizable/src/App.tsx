import React, {useState} from 'react'
import './App.css'
import {Resizable, ResizeCallbackData} from 'react-resizable'

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

    const handleResize = (index: number) => (_: any, {size}: ResizeCallbackData) => {
        column[index] = {
            ...column[index],
            width: size.width
        }
        setColumn([...column])
    }


    return (
        <div className="App">
            <table width='100%' border={1}>
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
        </div>
    )
}

export default App
