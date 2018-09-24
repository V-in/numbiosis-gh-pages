import React from 'react'
import { List, Image } from 'semantic-ui-react'

const About = () => (
  <List>
    <List.Item>
      <Image avatar src={require('../assets/images/avatar-male.png')} />
      <List.Content>
        <List.Header as='a'>Vinicius Misael</List.Header>
        <List.Description>
        Graduando em Ciencia da Computação
        </List.Description>
      </List.Content>
    </List.Item>
    
    <List.Item>
      <Image avatar src={require('../assets/images/avatar-female.png')} />
      <List.Content>
        <List.Header as='a'>Karina Villarim</List.Header>
        <List.Description>
        Graduanda em Engenharia da Computação
        </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <Image avatar src={require('../assets/images/avatar-female.png')} />
      <List.Content>
        <List.Header as='a'>Dayane Felix</List.Header>
        <List.Description>Graduanda em Ciencia da Computação</List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <Image avatar src={require('../assets/images/avatar-male.png')} />
      <List.Content>
        <List.Header as='a'>Lucas Lucena</List.Header>
        <List.Description>Graduando em Engenharia da Computação</List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <Image avatar src={require('assets/images/avatar-male.png')} />
      <List.Content>
        <List.Header as='a'>Lucas N Nóbrega</List.Header>
        <List.Description>Graduando em Engenharia da Computação</List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <Image avatar src={require('assets/images/avatar-male.png')} />
      <List.Content>
        <List.Header as='a'>Gabriel Belarmino</List.Header>
        <List.Description>Graduando em Ciencia da Computação</List.Description>
      </List.Content>
    </List.Item>
   
    <List.Item>
      <Image avatar src={require('assets/images/avatar-male.png')} />
      <List.Content>
        <List.Header as='a'>Almir Cassemiro</List.Header>
        <List.Description>Graduando em Engenharia da Computação</List.Description>
      </List.Content>
    </List.Item>

  </List>
)

export default About