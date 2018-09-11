import React from 'react'

const SecantMethodDescription = () => (
  <div>
    <h2>Método da Secante</h2>
    <div style={{textAlign: 'center'}}>
      <img src={require('../assets/images/secant_graph.png')} width={300}/>
    </div>
    <div style={{textAlign: 'justify'}}>
      <p>
        &emsp; Neste método partimos das duas aproximações iniciais <b>x0</b> e <b>x1</b> e determinamos a reta que passa pelos pontos <b>(x0, f(x0))</b> e <b>(x1, f(x1))</b>. A intersecção desta reta com o eixo <b>x</b> fornece o ponto <b>x2</b>. Em seguida é calculado uma nova aproximação para a raiz a partir dos pontos <b>(x1, f(x1))</b> e <b>(x2, f (x2))</b>. O processo se repete até que seja satisfeito o critério de parada.
      </p>
      <p>
        &emsp; Observe que não necessitamos da característica que é fundamental no método da falsa posição que é o teste do sinal. A raiz não necessita estar entre as duas aproximações iniciais <b>(x0 e x1)</b>. A convergência deste método é mais rápido que o da falsa posição.
      </p>
    </div>
  </div>
)

export default SecantMethodDescription
