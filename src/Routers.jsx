import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import SearchPage from './SearchPage';
import SearchResultsPage from './SearchResultsPage';
import SearchResultPage from './SearchResultPage';
import App from './App';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <App>
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/search"/>}
                    />
                    <Route path="/search" component={SearchPage}/>
                    <Route path="/search-results" component={SearchResultsPage}/>
                    <Route exact path="/search-results/:resultId" component={SearchResultPage}/>
                </App>
            </Switch>
        </Router>
    );
};

export default Routers;
