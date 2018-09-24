import React from 'react'
import { Image } from 'semantic-ui-react'

const Numbiosis = () => (
    <div>
        <h1>O projeto</h1>
        <div style={{textAlign: 'center'}}>
            <Image avatar src={require('../assets/images/sisenex-logo.png')} size='large'/>
        </div>
        <div>
            <p>
                &emsp;O projeto Numbiosis tem como objetivo facilitar o aprendizado e utilização de métodos
                numéricos atráves da introdução de uma interface minimalista e funcional que apresenta
                explanação de múltiplos métodos de análise numérica e possibilidade de aplicação dos mesmos.
            </p>
            <p>
                &emsp;Para utilizar dessa aplicação escolha um método na aba lateral direita. Para em seguida
                executá-la basta escolher a opção Aplicação; na nova tela serão apresentadas as entradas necessarias 
                como um formulário; ao preenche-lo clique submeter.
            </p>

        </div>
    </div>
)

export default Numbiosis