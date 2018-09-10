import React from 'react'

const routes = [
  {
    sidebarName: 'Home',
    path: '/',
    mainComponent: () => (<span>Home</span>)
  },
  {
    sidebarName: 'Vinicius',
    path: '/vinicius',
    mainComponent: () => (<span>{text}</span>)
  },
]

var text = 'Método da Falsa Posição:	a partir de um intervalo [a, b], seja f(x) uma função contínua no dado intervalo e sua raiz pertence a [a, b], tal que f(raiz) = 0. Este método procura particionar o intervalo [a, b], na interseção da reta que une os pontos (a, f(a)) e (b, f(b)) com o eixo x. Escolhe-se então um novo subintervalo conforme for a variação do sinal da curva f.	Primeiro, deve-se escolher um intervalo tal que f(a).f(b) < 0 (teste de sinal), dessa forma sabemos que a função corta o eixo x. Depois, calculamos a média aritmética ponderada (xm) entre a e b, com pesos |f(b)| e |f(a)|, respectivamente. Por último, multiplicamos f(a) com f(xm), se o resultado for menor que 0, a raiz pertence a [a, xm], maior que 0, a raiz pertence a [xm, b], e se for igual a 0, a raiz é xm. Com os novos intervalos obtidos, repetimos o segundo passo até acharmos uma boa aproximação da raiz da função.	O Método da Falsa Posição estima o “ponto médio” do intervalo pela interseção de uma reta secante. Ele é eficiente em considerar a magnitude de f(a) e f(b), ou seja, que ponto está mais próximo à raiz, já que partimos do princípio de que a raiz deve estar mais próxima do ponto que apresenta o menor valor da função.Método da Secante:	neste método partimos das duas aproximações iniciais x0 e x1 e determinamos a reta que passa pelos pontos (x0, f(x0)) e (x1, f(x1)). A intersecção desta reta com o eixo x fornece o ponto x2. Em seguida é calculado uma nova aproximação para a raiz a partir dos pontos (x1, f(x1)) e (x2, f (x2)). O processo se repete até que seja satisfeito o critério de parada.	Observe que não necessitamos da característica que é fundamental no método da falsa posição que é o teste do sinal. A raiz não necessita estar entre as duas aproximações iniciais (x0 e x1). A convergência deste método é mais rápido que o da falsa posição.	xk+1 = (xk+1.f(xk) - xk.f(xk-1)) / f(xk) - f(xk-1)Método de Muller:	O Método de Muller é uma técnica modificada do Método da Secante, mas que ao invés de estimar a raiz de uma função prolongando uma reta através de dois pontos, utiliza-se de uma parábola através de três pontos para aproximação da derivada.	Embora este algoritmo seja válido na busca de raízes de polinômios (também pode aproximar raízes complexas), ele pode ser utilizado para encontrar raízes de outras classes de funções, da mesma forma que o Método da Secante. Assim, o método converge relativamente rápido em geral, além de que a estimativa para a raiz é melhor pelo Método de Muller do que pelo das Secante'
text = text + text + text

export default routes
