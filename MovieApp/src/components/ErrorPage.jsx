// ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#1F222A', color: 'white' }}>
            <h1 className="display-1">Oops!</h1>
            <h2>Something went wrong.</h2>
            <p className="mt-3">We're sorry, but the page you're looking for doesn't exist or an error has occurred.</p>
            <Link to="/" className="btn btn-outline-light mt-3">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;
