import React, { Component } from 'react';

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
            onMouseOver={() => this.setColorName('Coral')}
            onMouseOut={() => this.clearColorField()}   
          />

          <button 
            className="picker__button picker__button_aqua" 
            onMouseOver={() => this.setColorName('Aqua')}
            onMouseOut={() => this.clearColorField()}   
          />
          <button 
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.setColorName('Bisque')}
            onMouseOut={() => this.clearColorField()}    
          />
        </div>
      </div>
    );
  }
}
export default ColorPicker;