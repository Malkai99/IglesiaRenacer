import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MiDia from '../pages/MiDia'
import Protocolo from '../pages/Protocolo'


export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/mi-dia' component={MiDia} />
                <Route path='/protocolo-covid' component={Protocolo} />
                <Route path='/busco-iglesia' component={SearchChurch} />
                <Route path='/volviendo=4-a' component={BackImportant} />
            </Switch>
        </BrowserRouter>
    )
}