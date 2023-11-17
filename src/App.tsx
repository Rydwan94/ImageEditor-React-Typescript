import ImageContainer from "./components/ImageContainer";
import ImageEditorContainer from "./components/ImageEditorContainer";
import SettingsContainer from "./components/SettingsContainer";
import ImageEditContext from "./context/ImageEditContext";

function App() {
  return (
    <ImageEditContext>
      <ImageEditorContainer>
        <SettingsContainer />
        <ImageContainer />
      </ImageEditorContainer>
    </ImageEditContext>
  );
}

export default App;
