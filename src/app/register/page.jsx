"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const register = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async (e) => {
    console.log("userクリエイトボタンおされ");
    e.preventDefault();

    const URL = "https://tk-22.net";

    await fetch(`${URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { username, email, password } }),
    });
    // console.log("Username:", username);
    // console.log("Email:", email);
    // console.log("Password:", password);
    router.push("/");
    router.refresh();
  };

  return (
    <div>
      <div class="auth-page bg-black">
        <div class="container page">
          <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
              <h1 class="text-xs-center">Sign up</h1>
              <p class="text-xs-center">
                <a href="/login">Have an account?</a>
              </p>

              {/* <ul class="error-messages">
                <li>That email is already taken</li>
              </ul> */}

              <form onSubmit={createUser}>
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
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
