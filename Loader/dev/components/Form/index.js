import React, { useState } from 'react';
import Button from '../Button';

import './style.css';


const Form = ({ item = {}, type = '', addFromProps }) => {
    const [name, setName] = useState(item.textName || '');
    const [text, setText] = useState(item.text || '');
    const [isShowForm, handleShowForm] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value);
        } else {
            setText(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: item.id || Date.now(),
            textName: name,
            text,
        };

        addFromProps(data);
        setName('');
        setText('');
        handleShowForm(!isShowForm);
    }

    return (
        isShowForm ? (
            <form
                className={`form ${type}`}
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />

                <label htmlFor="text">Comment</label>
                <textarea
                    name="text"
                    id="text"
                    value={text}
                    onChange={handleChange}
                />

                <Button>Post</Button>
            </form>
        ) : null
    );
};

export default Form;