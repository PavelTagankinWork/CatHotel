import './App.css';
import {BrowserRouter, Routes ,Route} from "react-router-dom";
import { MainLayout } from './layouts/MainLayout';
import Main from './components/main/Main';
import Catalogue from './components/catalogue/Catalogue';
import SingleRoom from './components/catalogue/cards/rooms/SingleRoom';
import CatsData from './A_Data';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout/>}>
              <Route index element={<Main/>}/>
              <Route path='catalogue' element={<Catalogue/>} />
              <Route path='catalogue/:slug' element={<SingleRoom/>}></Route>
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
