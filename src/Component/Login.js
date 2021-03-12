import React, { Component } from "react";
import { Link } from "react-router-dom";
// import React from 'react';
const Login = () => {
    return (
        <div className>
                    <div class="d-flex flex-lg-row flex-column-reverse margin login">
                        <div class="card card1 mt-4">
                            <div class="row justify-content-center">
                                <div class="col-md-8 col-8 my-4 ">
                                    <div class="logo text-center">
                                        <img class="img-fluid" width="278" src="oca.png"/>
                                    </div>

                                    <div class="small-title mt-4 text-center mb-3">
                                        <p>Welcome Back, Please login into your account</p>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <form>
                                                <div class="mb-3 text-left">
                                                    <label for="exampleFormControlInput1" class="form-label">Username / Email</label>
                                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Adjie_g4ant3ng@banget.com"/>
                                                </div>
                                                <div class="mb-3 text-left">
                                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                                    <input type="password" class="form-control" id="exampleFormControlInput1" value="aasdasdss"/>
                                                </div>
                                            </form>

                                            <div class="d-grid gap-2">
                                                <Link to="/home" class="d-grid gap-2">
                                                <button class="btn btn-block btn-login mt-4">Sign In</button>
                                                </Link>
                                                
                                                
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="card card2">
                            <img src="bg2.png" class="img-fluid"/>
                        </div>
                    </div>
        </div>
    )
}

export default Login