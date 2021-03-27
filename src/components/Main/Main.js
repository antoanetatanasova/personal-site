import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../../components/Home/Home';
import StudiesPage from "./../Studies/StudiesPage";
import PublicationsPage from "./../Publications/PublicationsPage";
import RolesPage from "./../Roles/RolesPage";


const Main = () => {
    return (<Router>
        <main>
            <Route path='/' exact component={Home} />
            <Route path='/research' component={StudiesPage} />
            <Route path='/publications' component={PublicationsPage} />
            <Route path='/roles' component={RolesPage} />
        </main>
    </Router>
    )
}

export default Main;
