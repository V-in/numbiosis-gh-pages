import React from 'react'
import { PlotlyGraph } from 'components'
import { GenericMethod } from 'components'
import { muller } from 'functions'
import MullerMethodDescription from 'misc/MullerMethodDescription'
import {
  Form,
  Segment,
  Input,
  Button,
  Message,
  Table,
  Label,
} from 'semantic-ui-react'
import { chunk } from 'lodash'

class MullerMethod extends React.Component {
  render() {
    return (
      <GenericMethod title='Método de Muller'
                     description={<MullerMethodDescription/>}
                     renderResult={renderData}
                     f={muller}
                     fields={fieldsConfig}/>
    )
  }
}

const renderData = (data) => {
  if(data.error != undefined){
    console.log(data.error)
    return (
      <Message negative>
        <Message.Header>Algo inesperado aconteceu!</Message.Header>
        <p>{data.error}</p>
      </Message>
    )
  }
  else{
      return renderTable(data.data)
  }
}

const renderTable = (data) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Iteracao</Table.HeaderCell>
        <Table.HeaderCell>Real</Table.HeaderCell>
        <Table.HeaderCell>Imaginario</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    {
      chunk(data).map((elem, index) => {
        return (
          <Table.Row key={index}>
            <Table.Cell>
              {index}
            </Table.Cell>
            <Table.Cell>{elem[0]}</Table.Cell>
            <Table.Cell>{elem[1] || 0}</Table.Cell>
          </Table.Row>
        )
      })
    }

  </Table>
)

const fieldsConfig = [
  {
    name: 'f',
    placeholder: 'x**2 - 6',
    label: 'Função'
  },
  {
    name: 'p0',
    placeholder: '0',
    label: 'Primeiro X'
  },
  {
    name: 'p1',
    placeholder: '4',
    label: 'Segundo X',
  },
  {
    name: 'p2',
    placeholder: '6',
    label: 'Terceiro X',
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

