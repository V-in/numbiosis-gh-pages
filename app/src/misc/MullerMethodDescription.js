import React from 'react'

const MullerMethodDescription = () => (
  <div>
    <h2>Método da Muller</h2>
    <div style={{textAlign: 'center'}}>
      <img src={require('../assets/images/secant_graph.png')} width={300}/>
    </div>
    <div style={{textAlign: 'justify'}}>
      <p>
        &emsp; O Método de Muller é uma técnica modificada do Método da Secante, mas que ao invés de estimar a raiz de uma função prolongando uma reta através de dois pontos, utiliza-se de uma parábola através de três pontos para aproximação da derivada.
      </p>
      <p>
        &emsp; Embora este algoritmo seja válido na busca de raízes de polinômios (também pode aproximar raízes complexas), ele pode ser utilizado para encontrar raízes de outras classes de funções, da mesma forma que o Método da Secante. Assim, o método converge relativamente rápido em geral, além de que a estimativa para a raiz é melhor pelo Método de Muller do que pelo das Secantes.
      </p>
    </div>
  </div>
)

export default MullerMethodDescription
