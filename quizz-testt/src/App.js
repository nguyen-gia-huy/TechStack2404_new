import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListExams from './pages/ListExams';
import Contact from './pages/Contact';
import DetailExam from './pages/DetailExam';
import Transcript from './pages/Transcript';
import ChangePassword from './pages/ChangePassword';
import Admin from './pages/Admin';
import CreateExam from './pages/Admin/ManageExams/CreateExam';
import ManageUsers from './pages/Admin/ManageUsers';
import ManageFeedback from './pages/Admin/ManageFeedback';
import ManageExams from './pages/Admin/ManageExams';

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/list-exams' element={<ListExams/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/detail/idExam' element={<DetailExam/>} />
          <Route path='/transcript' element={<Transcript/>} />
          <Route path='/change-password' element={<ChangePassword/>} />
          <Route path='/admin' element={<Admin/>} >
              <Route path='exams' element={<ManageExams/>} />
              <Route path='exams/create' element={<CreateExam/>}/>
              <Route path='exams/update/:idDeThi' element={<CreateExam/>}/>
              <Route path='users' element={<ManageUsers/>} />
              <Route path='feedback' element={<ManageFeedback/>} />
          </Route>
          
      </Routes>

    </div>
  )
}

export default App;