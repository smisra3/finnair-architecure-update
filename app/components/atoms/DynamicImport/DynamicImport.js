import React from 'react';

const DynamicImport = fn => {
  return class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { component: null };
    }
    async componentDidMount() {

    }
    render() {
      
    }
  }
};

export default DynamicImport;