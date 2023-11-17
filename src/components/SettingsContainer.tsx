import { useContext } from 'react';
import { Context } from '../context/ImageEditContext';

const SettingsContainer = () => {
  const {radiusNumber} = useContext(Context);


  

  console.log(radiusNumber);

  return (
    <div>
      <label htmlFor="">
        <input type="text" />
      </label>
      <label htmlFor="">
        <input type="text" />
      </label>
      <label htmlFor="">
        <input type="text" />
      </label>
    </div>
  );
};

export default SettingsContainer;
