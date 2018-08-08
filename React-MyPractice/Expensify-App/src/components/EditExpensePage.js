import React from 'react';

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            Editing Expense with following ID: {props.match.params.id}
        </div>
    )
}

export default EditExpensePage;
