import { BrowserRouter,Route } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Mainbody from './Components/MainBody/mainBody';
import AddNoteButton from './Components/atoms/addNoteButton/addNoteButton';
import AddNote from './Components/AddNote/AddNote';
import EditNote from './Components/EditNote/EditNote';
import EditCheckList from './Components/EditCheckList/EditCheckList';


function App() {
  return (
    <div className="App">

        <BrowserRouter>

            <Navbar/>
            <AddNoteButton/>
            
            <div className='main-body-div'>

                
                <Route exact path='/'> <Mainbody type='notes'/> </Route>
                <Route path='/archive'> <Mainbody type='archive'/> </Route>
                <Route path='/trash'> <Mainbody type='trash'/> </Route>
                <Route path='/add-note'> <AddNote/> </Route>
                <Route path='/edit-note'> <EditNote/> </Route>
                <Route path='/edit-checklist'> <EditCheckList/> </Route>

                
            </div>
          
        </BrowserRouter>

          
    </div>
  );
}

export default App;
