import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ isOpen, children, onClose, title }) => {
  if(!isOpen)return null;
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h4 className="dialog__title">{title}</h4>
        <button className="dialog__close-btn" onClick={onClose}>+</button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};
export default Dialog;

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};
Dialog.defaulrProps = {
  isOpen: false,
  title: ''
};
