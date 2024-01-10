import React from "react";
import InputMask from "react-input-mask";

interface InputPhoneNumberMaskProps {
  mask: string;
}

const InputPhoneNumberMask: React.FC<InputPhoneNumberMaskProps> = (props) => {
  return (
    <React.Fragment>
      <InputMask mask={props.mask} className="form-control input-color" />
    </React.Fragment>
  );
};

export { InputPhoneNumberMask };
