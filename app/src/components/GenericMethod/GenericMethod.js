import React from 'react'
import PropTypes from 'prop-types'
import { chunk } from 'lodash'
import { PlotlyGraph } from '../'
import { TabularPage } from '../'
import {
  Form,
  Segment,
  Input,
  Button
} from 'semantic-ui-react'

class GenericMethod extends React.Component {
  state = {
    success: false,
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  onSubmit = () => {
    try{
      this.setState({
        result: this.props.f(this.state)
      }, this.setState({success: true}))
    }
    catch(error) {
      console.warn(error)
    }
  } 

  renderPlotPage = () => {
    let {
      fields
    } = this.props

    return (
      <React.Fragment>
        <Segment vertical>
          <Form onSubmit={this.onSubmit} >
            {
              chunk(fields, 3).map((outer, i) => (
                <Form.Group widths='equal' key={i}>
                  {outer.map( ({ label, name, placeholder }, j) => (
                    <Form.Field key={j} required control={Input} fluid label={label} name={name} placeholder={placeholder} onChange={this.handleChange}/>
                  ))}
                </Form.Group>
              ))

            }
            <Form.Button primary type='submit' content='CALCULAR'/>
          </Form>
        </Segment>
        {
          this.state.success &&
          <Segment vertical>
            {this.renderPlot()}
          </Segment>
        }
      </React.Fragment>
    )
  }

  renderPlot = () => (
    this.state.success && 
    <div>
      <PlotlyGraph x_s={this.state.result.x_s} fx_s={this.state.result.fx_s} title='Secante'/>
      <b>Resultado final:</b> {this.state.result.x}
    </div>
  )

  render = () => {
    return (
      <TabularPage tabs={[
        {
          name: 'Descrição',
          content: this.props.description
        },
        {
          name: 'Aplicação',
          content: this.renderPlotPage
        }
      ]}/>
    )
  }
}

GenericMethod.propTypes = {
  //Title of the implemented method
  title: PropTypes.string,
  //Element to render at method description page
  description: PropTypes.element,
  //Fields required by the method. These will be visible under state after submission
  fields: PropTypes.arrayOf(PropTypes.shape({
    //Name of the field in state
    name: PropTypes.string,
    //Placeholder
    placeholder: PropTypes.string,
    //Label above input
    label: PropTypes.string
  })),
  //Function that will be called with user inputs as argument. It should return {x, x_s, fx_s}
  f: PropTypes.func
}

export default GenericMethod

