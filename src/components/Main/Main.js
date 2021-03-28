import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../../components/Home/Home';
import StudiesPage from "./../Studies/StudiesPage";
import PublicationsPage from "./../Publications/PublicationsPage";
import RolesPage from "./../Roles/RolesPage";
import Quiz from './../Quiz/Quiz';


const Main = () => {
    return (<Router>
        <main>
            <Route path='/' exact component={Home} />
            <Route path='/research' component={StudiesPage} />
            <Route path='/publications' component={PublicationsPage} />
            <Route path='/roles' component={RolesPage} />
            <Route path='/secret-zone' component={Quiz} />
        </main>
    </Router>
    )
}

export default Main;
