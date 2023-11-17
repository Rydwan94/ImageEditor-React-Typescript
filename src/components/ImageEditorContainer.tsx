

import React from 'react'

const ImageEditorContainer = ({children} : {children:React.ReactNode}) => {
  return (
    <div className='flex justify-center items-center h-screen w-full' >
        {children}
    </div>
  )
}

export default ImageEditorContainer