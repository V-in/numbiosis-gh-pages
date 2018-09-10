import React from 'react'
import { routes } from '../../routes'
import {
  Menu,
  Segment
} from 'semantic-ui-react'

class TabularPage extends React.Component{
  state = {
    selectedIndex: 0,
  }

  handleTabClick = (index) => {
    this.setState({ selectedIndex: index }, () => console.log(this.state))
  }

  render(){
    return (
      <React.Fragment>
        <Menu attached='top' tabular>
          {this.props.tabs.map((elem, index) => <Menu.Item key={index} active={index == this.state.selectedIndex} content={elem.name} onClick={() => this.handleTabClick(index)}/>)}
        </Menu>
        <Segment vertical>
          {this.props.tabs[this.state.selectedIndex].content}
        </Segment>
      </React.Fragment>
    )
  }
}

export default TabularPage
