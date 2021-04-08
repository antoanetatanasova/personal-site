import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../../components/Home/Home';
import Login from './../../components/Login/Login';
import StudiesPage from "./../Studies/StudiesPage";
import PublicationsPage from "./../Publications/PublicationsPage";
import RolesPage from "./../Roles/RolesPage";
import Quiz from './../Quiz/Quiz';
import AddPublicationPage from '../AddPublication/AddPublicationPage';
// import EditPublicationPage from '../EditPublication/EditPublicationPage';
import { auth } from '../../utils/firebase';
import Register from './../../components/Register/Register';
import NotFound from './../NotFound/NotFound'
import AddRolePage from '../AddRole/AddRolePage';


const Main = ({user}) => {
    return (<Router>
        <main>
            <Route path='/' exact component={Home} />
            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={Login} />
            <Route path="/logout" render={props => {
                auth.signOut();
                props.history.push('/');
                }} />
            <Route path='/research' component={StudiesPage} />
            <Route path='/publications' exact component={PublicationsPage}/>
            <Route path='/publications/add' component={AddPublicationPage} />
            {/* <Route path='/publications/edit/:id' component={EditPublicationPage} /> */}
            <Route path='/roles' exact component={RolesPage} />
            <Route path='/roles/add' component={AddRolePage} />
            <Route path='/game' component={Quiz} />
            <Route path='/404' component={NotFound} />
        </main>
    </Router>
    )
}

export default Main;
