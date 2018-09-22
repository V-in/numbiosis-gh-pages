import React from 'react'
import { PlotlyGraph } from '..'
import { GenericMethod } from '..'
import { regula_falsi } from '../../functions'
import RegulaFalsiMethodDescription from '../../misc/RegulaFalsiMethodDescription'
import {
  Form,
  Segment,
  Input,
  Button
} from 'semantic-ui-react'

class RegulaFalsiMethod extends React.Component {
  render() {
    return (
      <GenericMethod title='Método da Falsa Posição'
                     description={<RegulaFalsiMethodDescription/>}
                     f={regula_falsi}
                     fields={fieldsConfig}/>
    )
  }
}


 /* 
        Params:
            f -> Função em string
            a -> Valor Inicial A
            b -> Valor Inicial B
            c -> Valor Inicial C
            tol -> Tolerância de erro
            N -> Quantidade máxima de iterações
  */

const fieldsConfig = [
  {
    name: 'f',
    placeholder: 'x**2 - 6',
    label: 'Função'
  },
  {
    name: 'a',
    placeholder: '0',
    label: 'a'
  },
  {
    name: 'b',
    placeholder: '4',
    label: 'b',
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

export default RegulaFalsiMethod

