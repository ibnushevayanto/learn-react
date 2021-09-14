import { Route } from "react-router-dom";

const Welcome = () => (
  <div>
    <h1>Welcome Page</h1>
    <Route path="/welcome/new-user">
      <p>Welcome New User</p>
    </Route>
  </div>
);

export default Welcome;
