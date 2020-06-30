import React from 'react';

// So this is the same as the 'Dashboard' function except it uses ES6 syntax (which is just the latest)

/*
    OLD SYNTAX BUT STILL PERFECTLY VALID
    function Input(placeholder) = { FUNCTION }
*/

const Input = ({ placeholder }) => (
    <input placeholder={placeholder} />
);

export default Input;