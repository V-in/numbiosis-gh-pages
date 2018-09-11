import React from 'react'
import { PlotlyGraph } from '..'
import { GenericMethod } from '..'
import { muller } from '../../functions'
import MullerMethodDescription from '../../misc/MullerMethodDescription'
import {
  Form,
  Segment,
  Input,
  Button
} from 'semantic-ui-react'

class MullerMethod extends React.Component {
  render() {
    return (
      <GenericMethod title='Método de Muller'
                     description={<MullerMethodDescription/>}
                     f={muller}
                     fields={fieldsConfig}/>
    )
  }
}

const fieldsConfig = [
  {
    name: 'f',
    placeholder: 'x**2 - 6',
    label: 'Função'
  },
  {
    name: 'x0',
    placeholder: '0',
    label: 'Primeiro X'
  },
  {
    name: 'x1',
    placeholder: '4',
    label: 'Segundo X',
  },
  {
    name: 'tol',
    placeholder: '2e-10',
    label: 'Tolerância',
  },
  {
    name: 'N',
    placeholder: '5',
    label: 'Iterações'
  },
]

export default MullerMethod

