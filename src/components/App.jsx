import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="home">
      <div className="img-wraper">
        <h2 className="home-header">Book Hub</h2>
      </div>
      <div className="quote-wraper">
        <div className="quote">
          <div className="quote-text">
            Sleep is good, he said, and books are better.
          </div>
          <div className="quote-credit">
            - George R.R. Martin
          </div>
        </div>
        <Link className="purchase-btn-link" to="/books"><button type="button" className="btn purchase-btn">Purchase Now!</button></Link>

      </div>
    </div>
  );
}
