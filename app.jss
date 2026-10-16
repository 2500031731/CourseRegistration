import {Link, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <div style={{display:'inline-block', margin:'10px', alignItems:'center',
        border:'2px solid red', borderRadius:'5px', padding:'10px'
      }}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}
function Home(){
  return(
    <h1>Welcome to Home Page</h1>
  )
}

function About(){
  return(
    <h1>Welcome to About Page</h1>
  )
}
export default App