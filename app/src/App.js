import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Header, Sidebar } from './components'
import { Container, Rails, Sticky, Grid, Rail, Segment, Image} from 'semantic-ui-react'
import { routes } from './routes'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className='App-content'>
          <Route path='/' component={Header}/>
          <Grid centered columns={2}>
            <Grid.Column>
              <Segment>
                {routes.map((elem,index)=>(
                  <Route path={elem.path} component={elem.mainComponent}/>
                ))}
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
