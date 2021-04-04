import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../../components/Home/Home';
import Login from './../../components/Login/Login';
import StudiesPage from "./../Studies/StudiesPage";
import PublicationsPage from "./../Publications/PublicationsPage";
import RolesPage from "./../Roles/RolesPage";
import Quiz from './../Quiz/Quiz';
import AddPublicationPage from '../AddPublication/AddPublicationPage';
import EditPublicationPage from '../EditPublication/EditPublicationPage';
import { auth } from '../../utils/firebase';
import Register from './../../components/Register/Register';


const Main = () => {
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
            <Route path='/publications' exact component={PublicationsPage} />
            <Route path='/publications/add' component={AddPublicationPage} />
            {/* <Route path='/publications/edit/:id' component={EditPublicationPage} /> */}
            <Route path='/roles' component={RolesPage} />
            <Route path='/game' component={Quiz} />
        </main>
    </Router>
    )
}

export default Main;
