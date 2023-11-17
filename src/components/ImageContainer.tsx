import { useState, useRef } from "react"
import Button from "./Button"



const ImageContainer = () => {

    const [image, setImage] = useState<string>('')
    const [validationMessage, setValidationMessage] = useState<string>('')
    const imageRef = useRef<HTMLImageElement>(null);
    
    
    const handleDownloadImage = () => {
        // Sprawdź, czy obraz został wgrany przed próbą pobrania
        if (image && imageRef.current) {
          const canvas = document.createElement("canvas");
          canvas.width = imageRef.current.width;
          canvas.height = imageRef.current.height;
    
          const context = canvas.getContext("2d");
    
          if (context) {
            context.drawImage(imageRef.current, 0, 0);
    
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "modified_image.png";
            link.click();
          }
        } else {
          return setValidationMessage("Cannot Download empty file")
        }
      };

        const handleUploadImage = () => {
            const input = document.createElement("input");
            input.type = "file";
        
            input.onchange = (e) => {
              const file = (e.target as HTMLInputElement)?.files?.[0];
        
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  const uploadedImage = reader.result as string;
                  setImage(uploadedImage);
                };
        
                reader.readAsDataURL(file);
              }
            };
        
            input.click();
          };

          

  return (
    <div>
        {image ? (
            <img ref={imageRef} src={image} alt="current image" />
        ): null}
        
        <div>
            <Button message="Save" onClick={handleDownloadImage}/>
            <Button message="Upload" onClick={handleUploadImage}/>
        </div>
        <h3>{validationMessage}</h3>
    </div>
  )
}

export default ImageContainer