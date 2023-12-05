import React from 'react';
import {
  Home,
  WishList,
  ProtectedRoute,
  AdminProtectedRoute,
  CartProtectedRoute,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage
} from './shop';
import {
  DashboardAdmin,
  Categories,
  Products,
  Orders,
  Users,
  AllProducts,
  MyMessage,
  Appointmentss
} from './admin';
import {
  UserProfile,
  UserOrders,
  SettingUser,
  MyMessageUser,
  MyAppointment
} from './shop/dashboardUser';

import Menu from './shop/home/Menu';
import About from '../components/shop/home/AboutUs';
import Features from '../components/shop/home/Features';
import Event from '../components/shop/home/Event';
import Services from '../components/shop/home/Services';
import Contact from '../components/shop/home/Contact';
import Appointment from '../components/shop/home/Appointment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Routing All page will be here */
const Routes = props => {
  return (
    <Router>
      <Switch>
        {/* Shop & Public Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/aboutUs" component={About} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/aboutUs" component={About} />
        <Route exact path="/wish-list" component={WishList} />
        <Route exact path="/products/:id" component={ProductDetails} />

        <Route
          exact
          path="/products/category/:catId"
          component={ProductByCategory}
        />
        <CartProtectedRoute
          exact={true}
          path="/checkout"
          component={CheckoutPage}
        />
        {/* Shop & Public Routes End */}

        {/* Admin Routes */}
        <AdminProtectedRoute
          exact={true}
          path="/admin/messages"
          component={MyMessage}
        />

        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard"
          component={DashboardAdmin}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/categories"
          component={Categories}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/products"
          component={Products}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/orders"
          component={Orders}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/users"
          component={Users}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/allProducts"
          component={AllProducts}
        />

        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/appointment"
          component={Appointmentss}
        />

        {/* Admin Routes End */}

        {/* User Dashboard */}
        <ProtectedRoute
          exact={true}
          path="/user/profile"
          component={UserProfile}
        />
        <ProtectedRoute
          exact={true}
          path="/user/messages"
          component={MyMessageUser}
        />
        <ProtectedRoute
          exact={true}
          path="/user/appointment"
          component={MyAppointment}
        />

        <ProtectedRoute
          exact={true}
          path="/user/orders"
          component={UserOrders}
        />
        <ProtectedRoute
          exact={true}
          path="/user/setting"
          component={SettingUser}
        />

        {/* User Dashboard End */}

        {/* 404 Page */}
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
