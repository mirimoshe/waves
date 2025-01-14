import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/menu';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Student from './components/Student/student';
import Camera from './components/Camera/camera';
import Group from './components/Groupes/group';
import Tasks from './components/Tasks/tasks';

function App() {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/student' element={<Student />} />
        <Route path='/camera' element={<Camera />} />
        <Route path='/groupes' element={<Group />} />
        <Route path='/tasks' element={<Tasks />} />
      </Routes>
    </>
  );
}

export default App;
