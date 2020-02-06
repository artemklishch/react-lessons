import React, { Component } from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends Component{
  constructor(props){
    super(props);
    this.state = {
      elem: ''
    }
  }
  setColorName = colorName => {
    this.setState({
     elem:colorName
    });
  }
  clearColorField = () => {
    this.setState({
      elem:''
     }); 
  };
  render(){
    return (
      <div>
  <div className="picker__title">{this.state.elem}</div>
        <div>
          <button 
            className="picker__button picker__button_coral"
            onMouseOver={() => this.setColorName(CORAL)}
            onMouseOut={() => this.clearColorField()}   
          />

          <button 
            className="picker__button picker__button_aqua" 
            onMouseOver={() => this.setColorName(AQUA)}
            onMouseOut={() => this.clearColorField()}   
          />
          <button 
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.setColorName(BISQUE)}
            onMouseOut={() => this.clearColorField()}    
          />
        </div>
      </div>
    );
  }
}
export default ColorPicker;