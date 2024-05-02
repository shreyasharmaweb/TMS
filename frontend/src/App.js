import Login_main from "./components/Login_main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import System_User from "./components/System_User";
import Orgs from "./components/Orgs";
import OrgNew from "./components/OrgNew";
import Userform from "./components/Userform";
import AllUsers from "./components/AllUsers";
import OrganisationUser from "./components/OrganisationUser";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login_main />} />
        <Route path="/System_User" element={<System_User/>}/>
        <Route path="/Orgs" element={<Orgs/>}/>
        <Route path="/Orgnew" element={<OrgNew/>}/>
        <Route path="Organitional_user" element={<OrganisationUser/>}/>
        <Route path="/Userform/:key" element={<Userform />}/>
        <Route  path="/Allusers" element={<AllUsers />}/>
      </Routes>
    </Router>
    
  );
}
export default App;

