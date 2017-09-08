import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
          <div className = "jumbotron">
            <h1> This is Demo App with Shivraj < /h1>
            <Link to="about" className = "btn btn-primary"> Read more < /Link>
            </div>
        );
    }
}

export default HomePage;
