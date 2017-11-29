import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>  (
        <Modal
            isOpen={!!props.selectedOptions}
            onRequestClose={ props.handleClearSelectedOptions }
            contentLabel={'Selected Option'}
            closeTimeout={4000}
            className='modal'
        >
        
            <h3 className='modal__title'>Selected Option</h3>
            {props.selectedOptions && <p className='modal__body'>{ props.selectedOptions }</p>}
            <button className='button' onClick={ props.handleClearSelectedOptions }>Okay!</button>
        </Modal>
);

export default OptionModal;
