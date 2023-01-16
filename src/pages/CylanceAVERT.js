import React, { Component } from 'react'

export default class CylanceAVERT extends Component {
    

    state = {
        html: "",
      };
      componentDidMount() {
        const src = this.props.src;
        const html = `
            <video autoPlay muted loop>
                <source src=${src} />
            </video>
          `;
        this.setState({ html });
      }

  render() {
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: this.state.html }}></div>;
        </div>
    )
      
  }
}
