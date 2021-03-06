import React from "react";

import { Switch, Route } from "react-router-dom";
import { ListPage, EditorPage, NotFoundPage, PostPage } from "pages";

const App = () => {
  return (
    <div>
      <p>Blog App</p>
      <p />
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route path="/page/:page" component={ListPage} />
        <Route path="/tag/:tag" component={ListPage} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/editor" component={EditorPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
