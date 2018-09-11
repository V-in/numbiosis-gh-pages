import React from 'react'
import { routes } from '../../routes'
import PropTypes from 'prop-types'
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

  renderContent = () => {
    let content = this.props.tabs[this.state.selectedIndex].content
    if ( content instanceof Function)
      return content()
    else
      return content
  }

  render(){
    return (
      <React.Fragment>
        <Menu attached='top' tabular>
          {this.props.tabs.map((elem, index) => <Menu.Item key={index} active={index == this.state.selectedIndex} content={elem.name} onClick={() => this.handleTabClick(index)}/>)}
        </Menu>
        <Segment vertical>
          {
            this.renderContent()
          }
        </Segment>
      </React.Fragment>
    )
  }
}

TabularPage.propTypes = {
  //Tabs 
  tabs: PropTypes.arrayOf(PropTypes.shape({
    //Name of the tab
    name: PropTypes.string,
    //Content as a React component or function that returns a React component 
    content: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  }))
}

export default TabularPage
