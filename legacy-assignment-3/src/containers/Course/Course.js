import React from "react";

class Course extends React.Component {
  const;
  render() {
    const query = new URLSearchParams(this.props.location.search);
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{query.get("title")}</h1>
        <p style={{ textAlign: "center" }}>
          You selected the Course with ID: {this.props.match.params.id}
        </p>
      </div>
    );
  }
}

export default Course;
