import React from 'react';

const NotFound = () => {
  return (
    <div className="text-center">
      <i className="fas fa-exclamation-triangle fa-10x text-danger" />
      <h1 className="display-5">404 Page Not found</h1>
      <p className="lead">Page does not exist</p>
    </div>
  );
};

export default NotFound;
