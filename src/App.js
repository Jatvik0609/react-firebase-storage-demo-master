import './Main.css';
import FileUpload from './component/FileUpload';

function App() {

  return (
    <div className='App'>
      <div className="row">
        <div className="main">
          <h2>Upload the File</h2>
          <span className="break"></span>

          <FileUpload></FileUpload>
        </div>
      </div>
    </div>
  );
}

export default App;
