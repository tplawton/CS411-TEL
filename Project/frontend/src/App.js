import {BrowserRouter, Routes, Route} from 'react-router-dom'


import OAuth from './pages/OAuth'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <div className='pages'>
        <Routes>
          <Route
            path='/'
            element={<OAuth/>}
          />
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
