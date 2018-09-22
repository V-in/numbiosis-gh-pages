import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Sidebar } from "./components";
import {
  Header as SemanticHeader,
  Grid,
  Rail,
  Segment
} from "semantic-ui-react";
import { routes } from "./routes";
import "./App.css";

const Error404 = () => (
  <SemanticHeader>Error 404: Page not found.</SemanticHeader>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App-content'>
          <Header />
          <Grid centered columns={2}>
            <Grid.Column>
              <Segment padded={false}>
                <Switch>
                  {routes.map((elem, index) => (
                    <Route
                      key={index}
                      path={elem.path}
                      component={elem.component}
                    />
                  ))}
                  <Route component={Error404} />
                </Switch>
                <Rail position='right'>
                  <Route path='/' component={Sidebar} />
                </Rail>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
