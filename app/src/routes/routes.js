import React from 'react'
import SecantMethodDescription from '../misc/SecantMethodDescription'
import { secant } from '../functions'
import { TabularPage, GenericMethod } from '../components'
import { SecantMethod } from '../components'

const routes = [
  {
    sidebarName: 'Metodo secante',
    path: '/secante',
    component: () => <SecantMethod />
  },
  {
    sidebarName: 'Example Page',
    path: '/example',
    component: () => <TabularPage tabs={[
      {
        name: 'Foo',
        content: <h1>First tab</h1>
      },
      {
        name: 'Bar',
        content: <h1>Second tab</h1>
      }
    ]}/>
  }
]

export default routes
