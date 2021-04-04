import React from "react";
import style from "./Courses.module.css";
import Course from "../Course/Course";
import { Route } from "react-router-dom";

class Courses extends React.Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  selectCourse(id, title) {
    this.props.history.push({
      pathname: `${this.props.match.url}/${id}`,
      search: `?title=${title}`,
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Amazing Udemy Courses</h1>
        <section className={style.Courses}>
          {this.state.courses.map((course) => {
            return (
              <article
                onClick={this.selectCourse.bind(this, course.id, course.title)}
                className={style.Course}
                key={course.id}
              >
                {course.title}
              </article>
            );
          })}
        </section>
        <Route path={`${this.props.match.url}/:id`} component={Course} />
      </div>
    );
  }
}

export default Courses;
