import React from 'react';

const Form = () => (
    <div className="input-group mb-3 col-xl-4 mt-3">
        <input type="text" className="form-control" placeholder="Find a recipe..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        <div className="input-group-append">
            <button className="btn btn-secondary" type="button" id="button-addon2">Search</button>
        </div>
    </div>
    );

export default Form;