
import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import './style/style.scss'

import { Header } from './components/Header'
import { Footer } from './components/Footer'


import { Home } from './pages/Home'
import { Market } from './pages/Market.'
import { ItemDetails } from './pages/ItemDetails'
import { Dashboard } from './pages/Dashboard'
import { SellerDetails } from './pages/SellerDetails'
import { UserRegister } from './pages/UserRegister'

function App() {
  return (
    <div>
      <header className="blue">
        <Header />
      </header>
      <main>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Market} exact path="/market" />
          <Route component={ItemDetails} path="/itemDetails/:id" />
          <Route component={Dashboard} path="/dashboard" />
          <Route component={SellerDetails} path="/sellerDetails" />
          <Route component={UserRegister} path="/userRegister" />
        </Switch>
      </main>
      <Footer />
      <div>
        check
      </div>
    </div>
  );
}

export default App;
