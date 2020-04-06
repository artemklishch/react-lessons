import React, { PureComponent } from 'react';

class Numbers extends PureComponent {
   render() {
      return (
         <div className="number">
            <span className="number__title">All numbers</span>
            <span className="number__value">{this.props.number}</span>
         </div>
      );
   }
};
export default Numbers;