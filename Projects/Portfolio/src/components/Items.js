import React from 'react';

const Items = (props) => (
    <header>
        <h1>A Thing I've Done</h1>
        <p>This page is for the id of { props.match.params.id }</p>
    </header>
);

export default Items;