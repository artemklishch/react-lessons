import React, { Component } from 'react';

class ColorPicker extends Component{
  setColorName = colorName => {
    const elem = document.querySelector('.picker__title');
    elem.textContent = colorName;
  }
  clearColorField = () => {
    const elem = document.querySelector('.picker__title');
    elem.textContent = '';
  };
  render(){
    return (
      <div>
        <div className="picker__title"></div>
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