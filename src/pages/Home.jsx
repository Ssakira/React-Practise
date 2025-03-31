import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow-sm">
            <h1 className="text-center text-primary mb-4">Welcome to React tutorial</h1>
            <p className="lead text-center">
            React is a JavaScript library, developed by Meta (formerly Facebook), used for building user interfaces, particularly for web applications, by allowing developers to create reusable UI components and manage data efficiently. 
            </p>
            <div className="text-center mt-4">
              <button className="btn btn-success btn-lg">Lets start</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
