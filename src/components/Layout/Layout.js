import React from "react";
import { Link, Outlet } from "react-router-dom";
import AuthStatus from "../AuthStatus/AuthStatus";
import { Li, Ul } from './styled'

function Layout() {
  return (
    <div>
      <AuthStatus />
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/login">Login</Link>
        </Li>
        <Li>
          <Link to="/protected">User Área</Link>
        </Li>
      </Ul>
      <Outlet />
    </div>
  );
}


export default Layout;
