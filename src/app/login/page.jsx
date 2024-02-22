"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    console.log("loginボタンおされ");
    e.preventDefault();

    const URL = "https://tk-22.net";

    const res = await fetch(`${URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ session: { username, email, password } }),
    });

    const data = await res.json();

    // console.log("Username:", username);
    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("res_data:", data);


    // // トークンとユーザー情報をsessionStorageに保存
    // let storage = sessionStorage;

    // // storage.setItem("user", data.user);
    // storage.setItem("token", data.token);
    // storage.setItem("user_id", data.user.id);
    // storage.setItem("username", data.user.username);

    // トークンとユーザー情報をcookieに保存
    document.cookie = `token=${data.token}; path=/`;
    document.cookie = `user_id=${data.user.id}; path=/`;
    document.cookie = `username=${data.user.username}; path=/`;

    // console.log(`${storage["username"]}`);

    router.push("/");
    router.refresh();
  };

  return (
    <div>
      <div class="auth-page bg-black">
        <div class="container page">
          <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
              <h1 class="text-xs-center">Log in</h1>
              <p class="text-xs-center">
                <a href="/register">create an account?</a>
              </p>

              {/* <ul class="error-messages">
                <li>That email is already taken</li>
              </ul> */}

              <form onSubmit={loginUser}>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  class="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
