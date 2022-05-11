import React, { useState, useReducer } from 'react';
import Modal from '../Modal';

// reducer function
import { reducer } from '../reducer';
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};
const Annonce = () => {
  const [now,setNow] = useState('');  
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'onClick={() =>{
          const hour= new Date().getHours();
          const minute= new Date().getMinutes();
          const time=hour+":"+minute;
          setNow(time)
        }}>add </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <p id='time'>{now}</p>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Annonce;
