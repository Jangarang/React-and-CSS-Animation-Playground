import './App.css'
// import AnimatedImage from './components/AnimatedImage'
import DragonSlider from "./components/DragonSlice";

function App() {
 
  return (
    <div className="banner"> 
        <DragonSlider/>
      <div className="content">
            <h1>
                SPINNING DWAGONS
            </h1>
            <div className="author">
                <h2>John</h2>
                <h3>Used html and css from Lum Dev Code</h3>
                <h4>https://www.youtube.com/watch?v=yqaLSlPOUxM&t=606s</h4>

                
            </div>
            <div className="model"></div>
        </div>
    </div>
  )
}

export default App;
