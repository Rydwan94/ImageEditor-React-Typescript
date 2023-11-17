import React from 'react'
import { createContext, useState, Dispatch, SetStateAction } from 'react';

export interface ImageContext {
  blurNumber: number;
  setBlurNumber: Dispatch<SetStateAction<number>>;
  radiusNumber: number;
  setRadiusNumber: Dispatch<SetStateAction<number>>;
}

interface ImageEditContextProps {
  children: React.ReactNode;
}

export const Context = createContext({} as ImageContext);

const ImageEditContext = ({ children }: ImageEditContextProps) => {
  const [blurNumber, setBlurNumber] = useState(0);
  const [radiusNumber, setRadiusNumber] = useState(0);

  return (
    <Context.Provider
      value={{
        blurNumber:blurNumber,
        setBlurNumber,
        radiusNumber:radiusNumber,
        setRadiusNumber,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ImageEditContext