import React from 'react';

const editExpensePage = (props) => {
    console.log('Props: ',props);
    return (
        <div>
            This is from the Edit Page id: { props.match.params.id }
        </div>
    )
};

export default editExpensePage;