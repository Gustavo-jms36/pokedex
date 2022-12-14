import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slices/name.slice';

const InputName = () => {
    const [userName, setUserName] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const enterName = (e) => {
        dispatch(changeName(userName))
        navigate('/pokedex')
    }


    return (
        <div>
            <h1>Input Name</h1>
            <input 
            type="text"
            onChange={e => setUserName(e.target.value)}
            value={userName} />
            <button onClick={enterName}>Enter</button>


        </div>
    );
};

export default InputName;