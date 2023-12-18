import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GallaryHeader from './components/GallaryHeader'; 
import GallaryBody from './components/GallaryBody';


function App(props) {

  let data = props.data;

  return (
    <div>
      {/* adding header component */}
      <GallaryHeader />

      {/* adding body component and props as imageData */}
      <GallaryBody imageData = {data} />
      
      {/* adding footer component */}
      <GallaryFooter/>
    </div>
  )
}

export default App;
