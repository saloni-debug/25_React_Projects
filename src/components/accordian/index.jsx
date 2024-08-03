import { useState } from 'react';
import data from './data';
import './style.css';

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);


    const handleSingleSelect = (id) => {
        setSelected(selected === id ? null : id)
    }

    const handleMultipleSelect = (id) => {
        let newMultiple = [...multiple]

        if (newMultiple.includes(id)) {
            newMultiple = newMultiple.filter((i) => i !== id)
        } else {
            newMultiple.push(id)
        }
        setMultiple(newMultiple)
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>Enable Multi Selection</button>
            <div classname="accordian">
                {
                    data && data.length > 0 ?
                        data.map((item) => (
                            <div className='item'>
                                <div className='title'>
                                    <h3>{item.question}</h3>
                                    <span className='icon' onClick={
                                        enableMultiSelect
                                            ? () => handleMultipleSelect(item.id)
                                            : () => handleSingleSelect(item.id)}>+</span>
                                </div>
                                {enableMultiSelect
                                    ? multiple.includes(item.id)
                                        ? <div className='content'>{item.answer}</div>
                                        : null
                                    : selected === item.id
                                        ? <div className='content'>{item.answer}</div>
                                        : null
                                }
                            </div>
                        ))
                        : <div>No data found</div>
                }
            </div>

        </div>
    );
}
