import Search from './pages/Search'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Terms } from 'components/Verification/Terms/Terms'
import Signup from './components/Verification/Signup' 
import Signin from 'components/Verification/Signin'
import UserIntroduction from 'components/UserProfile/UserIntroduction/UserIntroduction'
import UserProfile from 'components/UserProfile/UserProfile/UserProfile'
import HostEvent from 'pages/HostEvent'
import HomePage from 'pages/HomePage'
import NavBar from 'components/NavBar/NavBar'
import ManageEvent from 'pages/ManageEvent'
import PrivateRoute from 'components/PrivateRoute'


const standardLayout = (Component) => {
    return (
        <>
            <NavBar/>
            <div className="content">
                <Component/>
            </div>
        </>
    );
};


const App = () => {
    
    return (
        <div className="App">
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path='signin' element={<Signin />} />
                    <Route path="terms" element={<Terms />} />

                    <Route path='introduction' element={<UserIntroduction />}/>

                    <Route element={<PrivateRoute/>}>
                        <Route path="search" element={standardLayout(Search)} />
                        <Route path='profile' element={standardLayout(UserProfile)} />
                        <Route path='host-event' element={standardLayout(HostEvent)} />
                        <Route path='manage' element={standardLayout(ManageEvent)} />
                    </Route>

                </Routes>
        </div>
    );
}
 
export default App;
