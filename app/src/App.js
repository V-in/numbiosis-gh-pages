import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Header, Sidebar, TabularPage } from './components'
import { Container, Input, Header as SemanticHeader, Rails, Sticky, Button, Menu, Grid, Rail, Segment, Image} from 'semantic-ui-react'
import { routes } from './routes'
import logo from './logo.svg';
import './App.css';

const Error404 = () => (
  <SemanticHeader>Error 404: Page not found.</SemanticHeader>
)

class App extends Component {
  render(){
    return (
      <Router>
        <div className='App-content'>
          <Header/>
          <Grid centered columns={2}>
            <Grid.Column>
              <Segment  padded={false}>
                <Switch>
                  {routes.map(elem => <Route path={elem.path} component={elem.component}/>)}
                  <Route component={Error404} />
                </Switch>
                <Rail position='right'>
                  <Route path='/' component={Sidebar}/>
                </Rail>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </Router>
    )
  }
}

export default App;
