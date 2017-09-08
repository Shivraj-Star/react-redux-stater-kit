import React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component {
  constructor() {
     super();
   }
    render() {
        return (
          <div className = "jumbotron">
            <h1> This is About Page < /h1>
            <Link to="" className = "btn btn-primary"> Read more < /Link>
            </div>
        );
    }
}
export default AboutPage;
