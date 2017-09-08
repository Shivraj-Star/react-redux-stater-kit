import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  constructor() {
     super();
   }
    render() {
        return (
          <div className = "jumbotron">
            <h1> This is Homepage < /h1>
            <Link to="about" className = "btn btn-primary"> Read more < /Link>
            </div>
        );
    }
}

export default HomePage;
