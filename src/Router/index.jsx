import {
    Navigate,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
 import Admin from "../Scense/admin/Admin/Admin";
  import Layout from "../Scense/admin/layout/Layout";
  import Dashboard from "../Scense/dashboard/Dashboard";
  import Products from "../Scense/admin/products/Products";
  import Customers from "../Scense/customers/Customers";
  import Transactions from "../Scense/admin/transactions/Transaction";
  import Geography from "../Scense/admin/geography/Geography";

  import Overview from "../Scense/admin/overview/Overview";
  import Daily from "../Scense/daily/Daily";
 import Monthly from "../Scense/admin/monthly/Monthly";
  import Breakdown from "../Scense/admin/breakdown/Breakdown";
  import Performance from "../Scense/admin/performance/Performance";
  
  const NotFound = () => <div>404 - Page Not Found</div>;
  
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/monthly" element={<Monthly />} />
        <Route path="/breakdown" element={<Breakdown />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  
  export default Router;
  