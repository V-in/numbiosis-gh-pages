import React, { Component } from 'react';
import Plot from 'react-plotly.js';


class MyPlot extends Component{
    render(){
      return(
        <div>
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+points',
              marker: {color: 'red'},
            },
            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
          ]}
          layout={ {width: 600, height: 400, title: 'A Fancy Plot'} }
          />
          <p>ponto fixo</p>
          </div>
      );
    }
}

export default MyPlot;