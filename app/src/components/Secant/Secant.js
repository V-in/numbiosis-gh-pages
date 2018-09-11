import React from 'react'
import { PlotlyGraph } from '../'
import {
  Form,
  Segment,
  Input,
  Button
} from 'semantic-ui-react'

class Secant extends React.Component {
  state = {
    success: false,
    x_s: [],
    fx_s: []
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  onSubmit = () => {
    this.setState({
      success: true
    })
    this.secante()    
  } 

  render() {
    return (
      <React.Fragment>
        <Segment vertical>
          <Form onSubmit={this.onSubmit}>
          <Form.Group widths='three'>
              <Form.Field required control={Input} fluid label='Função' name='f' placeholder='x**2 + x' onChange={this.handleChange}/>
              <Form.Field required control={Input} fluid label='Primeiro x' name='x0' placeholder='0.0' onChange={this.handleChange}/>
              <Form.Field required control={Input} fluid label='Segundo x' name='x1' placeholder='1.0' onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field required control={Input} fluid label='Tolerância' name='tol' placeholder='10e-3' onChange={this.handleChange}/>
              <Form.Field required control={Input} fluid label='Iterações' name='N' placeholder='3' onChange={this.handleChange}/>
            </Form.Group>
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

  renderPlot = () => {
    return(
      this.state.success && 
      <div>
        <PlotlyGraph x_s={this.state.x_s} fx_s={this.state.fx_s} title='Secante'/>
        <b>Resultado final:</b> {this.state.x}
      </div>
    )
    
  }

  secante(){
    let {
      f,
      x0,
      x1, 
      tol,
      N
    } = Object.assign({}, this.state) 
     /* 
        Params:
            f -> Função em string
            a -> Limite A
            b -> Limite B
            tol -> Tolerância de erro
            N -> Quantidade máxima de iterações
    */

    /*
        Especificacao das Funções 
        --exp(2) -> e^2, exp(x) -> e^x
        --log(x) -> ln(x), log10(x) -> log(x)
        --cos(x),tan(1/2),sin(x)
        
        Ex1:
            f -> -42 + 686.7*(1 - exp(-6*c/35))/c
            a -> 12
            b -> 16
            tol -> 1e-5
            N -> 100
        
        Ex2:
            f -> -0.016 + (x + 4)/((-2*x + 42)**2*(-x + 28))
            a -> 0
            b -> 20
            tol -> 5e-3
            N -> 100
        Ex3:
            f ->x * log10(x) -1
            x0 -> 2
            x1 -> 3
            tol -> 2e-10
            N -> 100
    */
    
    // Adicionar a chamada do método correspondente de Math
    f = f.replace(/(cos|sin|tan|exp|log|log10|log2)/, 'Math.$1');

    // Expressão regular para isolar a variável da função
    let regexVar = /([a-zA-Z][\w]*) ?([\+\-\/\*]|$|\))/
    
    // tentativa de identificar a variável
    let variavel = regexVar.exec(f);

    // Caso não encontre a variável
    if(!variavel) {
        console.log('Não foi possível encontrar a variável!');
    }

    // Remove símbolos inválidos da variável
    variavel = variavel[0].replace(/\W+/, '');

    // converte o erro para valor
    tol = parseFloat(tol).toFixed(20);
    console.log(tol);
    // Criando uma arrow function a partir da string
    f = eval('('+ variavel +') => ' + f);

    // Verficar se a função foi escrita corretamente
    try {
        f(1)
    } catch (Error) {
        console.log("A função não está correta!");
        return;
    }

    // Valor da função nos extremos
    let f_before = f(x0);
    console.log(f_before);
    let f_after = f(x1);
    console.log(f_after);
    // Verificando se os sinais do intervalo
    // if(fa*fb > 0) {
    //     console.log("A função deve ter sinais opostos em A e B!");
    //     return;
    // }

    /*
        Flag para previnir a obtenção da raiz antes do
        intervalo ter sido suficiente reduzido
    */
    let done = false;

    let i = 0;
    let fx;

    let x_s = [];
    let fx_s = [];

    let x

    while (!done && i < N) {
        x = ((x0 * f_after)-(x1 * f_before))/(f_after - f_before)
        fx = f(x);
        x_s.push(x);
        fx_s.push(fx);

        console.log("(x["+i+"] = "+ x +  ") f(x)=  " + fx +
         " | f("+i+")= " + f_before + " | f("+i+")= " + f_after);

        f_before = f_after;
        x0 = x1;
        f_after = fx;
        x1 = x;
        if(Math.abs(fx) < tol){
            done = true;
        }

        i++;
    }

    console.log("Solução Encontrada: " + x);
    /*
        retorno especifica:
            raiz encontrada: x
            todas as raizes obtidas pelas iterações: x_s
            todos os fs das razes obtidas: fx_s    
    */
    this.setState({ x, x_s, fx_s });
  }

}

export default Secant

