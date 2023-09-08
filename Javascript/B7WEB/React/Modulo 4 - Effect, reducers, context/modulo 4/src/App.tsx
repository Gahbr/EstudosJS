import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Video from './pages/VideoPage'
import Page from './pages/page'

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Video/>}/>
        <Route path='Reducer' element={<Page/>}/>
      </Routes>
   </BrowserRouter>
  )
}
export default App;