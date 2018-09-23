import React from 'react'
import './Sidebar.css'
import { 
  Container,
  Menu,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { routes } from 'routes/'

const Sidebar = ({ location }) => (
  <Menu link vertical floated='right'>
    {routes.map((elem, index) => (
      <Menu.Item key={index} as={Link} to={elem.path} active={location.pathname == elem.path}>{elem.sidebarName}</Menu.Item>
    ))}
  </Menu>
)

export default Sidebar
