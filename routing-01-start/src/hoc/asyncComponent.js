import React from "react";
const asyncComponents = (importProps) => {
  return class extends React.Component {
    state = {
      component: null,
    };
    componentDidMount() {
      importProps().then((res) => {
        this.setState({ component: res.default });
      });
    }
    render() {
      const Component = this.state.component;
      return this.state.component ? <Component {...this.props} /> : null;
    }
  };
};

export default asyncComponents;
