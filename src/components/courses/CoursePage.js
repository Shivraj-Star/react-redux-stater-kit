import React,{PropTypes} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

class CoursePage extends React.Component {
  constructor(props,context) {
     super(props,context);

     this.state = {
       course:{domain:"",language:""}
     };

     this.domainChange = this.domainChange.bind(this);
     this.languageChange = this.languageChange.bind(this);
     this.save = this.save.bind(this);
   }

   domainChange(event){
     const course =this.state.course;
     course.domain = event.target.value;
     this.setState({course:course});
   }

   languageChange(event){
     const course =this.state.course;
     course.language = event.target.value;
     this.setState({course:course});
   }

   // 1. way to dispatch event
   //  save(){
   //    this.props.dispatch(courseActions.createCourse(this.state.course));
   //  }

   //  2. mapDispatchToProps is another approach to dispach event
  //  save(){
  //    this.props.createCourse(this.state.course);
  //  }


   //  3. mapDispatchToProps is another approach to dispach event
   save(){
     this.props.actions.createCourse(this.state.course);
     this.setState({course:{domain:"",language:""}});
   }

   courseRow(course,index){
     return (<div className="list-group col-md-6">
              <div className="list-group-item col-md-12" key={index}>{course.domain} - {course.language}</div>
            </div>);
   }

    render() {
          let spacing ={
            margin: "15px"
          };

          let focus =true;

          return (
          <div>
            <div className="col-md-12 page-header">
            <b className="text-uppercase text-info">Welcome to Add Course pages </b>
            </div>
            {this.props.courses.map(this.courseRow)}
            <div className="col-sm-6 col-sm-offset-3">
            <div className="panel panel-info">
            <div className="panel-heading"> Add Courses</div>
            <div className="panel-body">
            <div className="col-md-12 form-group">
              <input type="text" className="form-control"  onChange={this.domainChange} value={this.state.course.domain} placeholder="Enter Domain Name" autoFocus={focus} />
            </div>
            <div className="col-md-12 form-group">
              <input type="text" className="form-control"  onChange={this.languageChange} value={this.state.course.language} placeholder="Enter Language Name" />
            </div>
            <div className="col-md-12 text-center">
            <button className="btn btn-info" onClick={this.save} style={spacing}>Save Course</button>
            <button className="btn btn-danger">cancel</button>
            </div>

            </div>
            </div>
            </div>
            </div>
        );
    }
}

CoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses:PropTypes.array.isRequired
};

let mapStatetoProps = (state,ownProps) => {
  return {
    courses:state.courses
  };
};

// let mapDispatchToProps = (dispatch) =>{
//   return {
//     createCourse: course =>dispatch(courseActions.createCourse(course))
//   };
// };

let mapDispatchToProps = (dispatch) =>{
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(CoursePage);
