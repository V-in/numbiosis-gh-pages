import React from 'react'
//import SecantMethodDescription from '../misc/SecantMethodDescription'
//import { secant } from '../functions'
import { TabularPage, GenericMethod } from '../components'
import { SecantMethod } from '../components'
import { MullerMethod } from '../components'
import { RegulaFalsiMethod } from '../components'

const routes = [
  {
    sidebarName: 'Principal',
    path: '/principal',
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
  },
  {
    sidebarName: 'Método da Falsa Posição',
    path: '/falsa_posicao',
    component: () => <RegulaFalsiMethod />
  },
  {
    sidebarName: 'Método Secante',
    path: '/secante',
    component: () => <SecantMethod />
  },
  {
    sidebarName: 'Método Muller',
    path: '/muller',
    component: () => <MullerMethod />
  },
  ///*
]

export default routes
