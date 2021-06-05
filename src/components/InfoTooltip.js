import React from 'react';


function InfoTooltip({isOpen, onClose, handleClickClose, notifyTitle, notifyType}) {
  return (
    <section className={`popup popup_style_opacity popup_type_tooltip ${isOpen ? 'popup_opened' : ''}`} onClick={handleClickClose}>
      <div className="popup__container popup__container_type_tooltip">
        <img className="popup__notify-success" src={notifyType}></img>
        <h2 className="popup__notify-title">{notifyTitle}</h2>
        <button className="popup__close-button popup__close-button_type_tooltip" type="button" onClick={onClose}></button>
      </div>
    </section>
  );
}

export default InfoTooltip;