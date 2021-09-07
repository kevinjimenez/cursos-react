import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Home} from "../containers/Home/Home";
import {Checkout} from "../containers/Checkout/Checkout";
import {Information} from "../containers/Information/Information";
import {Payment} from "../containers/Payment/Payment";
import {Success} from "../containers/Success/Success";
import {NotFound} from "../containers/NotFound/NotFound";
import {Layout} from "../components/Layout/Layout";
import {AppContext} from "../context/AppContext";
import {useInitialState} from "../hooks/useInitialState";

function Routes() {

    const initialState = useInitialState()
    console.log(initialState)

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/checkout' component={Checkout}/>
                        <Route exact path='/checkout/information' component={Information}/>
                        <Route exact path='/checkout/payment' component={Payment}/>
                        <Route exact path='/checkout/success' component={Success}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export {Routes}
