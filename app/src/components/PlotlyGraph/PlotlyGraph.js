import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import PropTypes from 'prop-types'

class PlotlyGraph extends Component{
    render(){
      return(
        <div>
          <Plot
            data={[
              {
                x: this.props.x_s,
                y: this.props.fx_s,
                mode: 'markers',
                type: 'scatter',
                marker: {
                  size: 8,
                  color: this.props.x_s.map((elem, i) => i)
                },
              },
            ]}
            layout={{
              title: this.props.title,
              width: 600, 
              height: 400,
            }}
            />
          </div>
      );
    }
}

PlotlyGraph.propTypes = {
  x_s: PropTypes.array,
  fx_s: PropTypes.array,
  title: PropTypes.string
}

export default PlotlyGraph;
