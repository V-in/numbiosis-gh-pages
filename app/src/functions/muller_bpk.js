 const muller = ({ f, a, b, c, tol, N }) => {
     /* 
         Params:
             f -> Função em string
             a -> Valor Inicial A
             b -> Valor Inicial B
             c -> Valor Inicial C
             tol -> Tolerância de erro
             N -> Quantidade máxima de iterações
     */

     // Adicionar a chamada do método correspondente de Math
     f = f.replace(/(cos|sin|tan|exp|log10|log|log2)/, 'Math.$1');
 
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
     console.log("tol: "+tol);
     // Criando uma arrow function a partir da string
     f = eval('('+ variavel +') => ' + f);
  
     // Verficar se a função foi escrita corretamente
     try {
         f(1)
     } catch (Error) {
         console.log("A função não está correta!");
         return;
     }
 
     var i;
     var resultado;
 
     let x_s = [];
     let iteracao_de_recorrencia = [];
 
 
     for (i = 0;i<=N;i += 1)
     {
         console.log(f(c))
         var f0 = f(a);
         var f2 = f(c);
         var f1 = f(b);
         var h0 = b - a;
         var h1 = c - b;
         var d0 = (f1 - f0)/h0;
         var d1 = (f2 - f1)/h1;
 
         var c = f2;
         var a = (d1 - d0)/(h1 + h0);
         var b = a*h1 -d1;
 
         var r0 = ((-2*c) / (b + Math.abs(Math.sqrt(b*b - 4*a*c))));
         var r1 = ((-2*c) / (b - Math.abs(Math.sqrt(b*b - 4*a*c))));
 
         if (b > 0){
             resultado = c + r0;
         }
         else{
             resultado = c + r1;
         }
 
         var m = resultado*100;
         var n = c*100;
         m = Math.floor(m);
         n = Math.floor(n);
         if (m == n)
             break;
 
         a = b;
         b = c;
         c = resultado;
 
         x_s.push(resultado)
         /*
         if (i > N)
         {
             console.log("A Raiz nao pode ser encontrada utilizando o metodo de Muller")
             alert("A Raiz nao pode ser encontrada utilizando o metodo de Muller")
             break;
         }
         */
     }
     if (i <= N){
         console.log("O valor da raiz eh " + resultado)
         alert("O valor da raiz eh " + resultado) 
         
     }
     
     for(i=0;i<=x_s.length;i++)
         iteracao_de_recorrencia.push(i)
         
     /*
         retorno especifica:
             raiz encontrada: x
             todas as raizes obtidas pelas iterações: x_s
             todos os fs das razes obtidas: fx_s    
     */
     return ({x: resultado, x_s: x_s, iteracao_de_recorrencia: iteracao_de_recorrencia})
 }
 
 muller({
    f: '16*x**4-40*x**3+5*x**2+20*x+6',
    a: 0.5,
    b: -0.5,
    c: 0.0,
    tol: '2e-10',
    N: '5',
})