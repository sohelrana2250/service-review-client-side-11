import React from 'react';
import useTitle from '../../Hook/useTitle';

const Error = () => {
    useTitle('Error-404');
    return (
        <div>
            <h1>Page Error 404</h1>
            <h2>Server-Error 404 to  499</h2>
            <h5>Something is Wrong Please Try Again</h5>

        </div>
    );
};

export default Error;