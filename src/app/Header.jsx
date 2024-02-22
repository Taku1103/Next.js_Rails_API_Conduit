"use client";

import React from "react";
import Link from "next/link";
import Logout from "./components/Logout";
import Cookie from 'js-cookie';

const Header = () => {
  let username = Cookie.get('username');
  return (
    <div className=" bg-gray-900">
      <header>
        <nav className="navbar navbar-light text-color">
          <div className="container">
            <a className="navbar-brand" href="/">
              conduit
            </a>
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                <Link className=" active" href="/">
                  Home
                </Link>
              </li>
              {username ? (
                <>
                  <li className="nav-item">
                    <Link className="" href="/articles/new">
                      Create Article
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Logout />
                  </li>
                  <li className="nav-item text-white">
                    Login_user : {username}
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="" href="/login">
                      Log in
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="" href="/register">
                      Sign up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
