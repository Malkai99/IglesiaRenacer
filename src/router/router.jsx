import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Media from '../pages/Media'
import Protocolo from '../pages/Protocolo'
import BackImportant from '../pages/BackImportant'
import SearchChurch from '../pages/SearchChurch'
import WeBelieve from '../pages/WeBelieve'

export const Router = () => {
    return(
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/media' component={Media} />
            <Route path='/protocolo-covid' component={Protocolo} />
            <Route path='/busco-iglesia' component={SearchChurch} />
            <Route path='/volviendo-a-casa' component={BackImportant} />
            <Route path='/creemos' component={WeBelieve} />
        </Switch>
    )
}