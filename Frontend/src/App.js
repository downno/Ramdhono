import {BrowserRouter, Routes, Route} from "react-router-dom";
import TopicList from "./components/TopicList";
import AddTopic from "./components/AddTopic";
import EditUser from "./components/EditUser";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import PrivateRoutes from "./Util/PrivateRoutes";
import NotFound from "./components/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes/>}>
         <Route path="edit/:id" element={<EditUser/>}/>
           <Route path="/topic" element={<TopicList/>}/>
        </Route>
        
       
        <Route path="/" element={<Welcome/>}/>
        <Route path="/add" element={<AddTopic/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
