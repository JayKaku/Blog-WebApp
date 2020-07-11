import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage";
import Category from "./components/category";
import BlogPage from "./components/blogpage";
import Page from "./components/Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/category" component={Category} />
        <Route
          path={[
            "/history",
            "/music",
            "/photography",
            "/travel",
            "/fitness",
            "/events",
          ]}
          component={BlogPage}
        />
      </Switch>
    </Router>
  );
}

export default App;

/* Switch: for not rendering all the other like / i.e. HomePage when it matches it stops
   So as it is read form left /category the slash is encountered and it stops rendereing and displays HomePage

*/
