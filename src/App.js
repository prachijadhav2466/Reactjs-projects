import './Components/Style.css';

function App() {
  
  return (
    <div className='Main'>
    
    <h1>Log-In Portal</h1>
      <input type="text" id="name" placeholder="Name"></input><br></br>
      <input type="text" placeholder="Email"></input><br></br>
      <button type="submit" onClick={()=>{
        alert("Hello")
      }}>Submit</button>
     
    </div>
    
  );
}

export default App;
