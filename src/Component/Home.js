import React, { Component } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className>
            <div class="row wrapper">
                <div class="col-md-2 sidebar">
                    <div class="logo text-center">
                        <img src="OCA-logo.png" width="150" class="mt-3"></img>
                    </div>
                    <div class="menu">
                        <ul>
                            <li>
                                <a href="">
                                    <img src="home.png" class="img-fluid mr-3" width="20" alt="" /> <span class="pl-3">Home</span>
                                </a>
                                
                            </li>
                            <hr/>
                            <li class="nav-item dropdown">
                                <a class="nav-link" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false"> 
                                    <img src="chat.png" class="img-fluid mr-3" width="20" alt="" /> <span> SMS </span> 
                                    <img src="Union 6.png" class="img-fluid ml-5 img-alt text-end" width="10" alt="" />
                                </a>
                                <div class="collapse" id="collapseExample">
                                    <div class="card card-body">
                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-10 content">
                    <nav class="navbar mt-3">
                        <div class="container-fluid">
                            <form class="d-flex">
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-white icon-search" width="12px"><img src="search.png" width="12px" class="img-fluid" alt="" /></span>
                                    <input type="text" class="form-control form-search" placeholder="Any Help ?" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </form>
                            <div class="d-flex profile">
                                <div class="d-block text-right">
                                    <span>Hi Adjie !</span>
                                    <p>Adjie_g4ant3ng@banget.com</p>
                                </div>
                                <a class="navbar-brand d-flex"><img src="profile.png" width="40" class="img-fluid" alt=""/></a>
                            </div>    
                        </div>
                    </nav>
                    <div class="row">
                        <div class="welcome col-md-12">
                            <div class="card">
                                <div class="card-header bg-purple">
                                    
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title"> <b> Hello, Welcome to OCA! </b></h5>
                                    <small class="card-text">Let’s start make some noise and make your campaign great again! click here to spread your messages.</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="quota row">
                        <p class="mt-3">Remaining Quota</p>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-sm-3">
                                <div class="card">
                                    <div class="card-body p-2">
                                        <div class="row ">
                                            <div class="col-md-6 text-left">
                                                Calls
                                            </div>
                                            <div class="col-md-6 text-right">
                                                <span class="text-calls"> 1882783 </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div class="col-sm-3">
                                <div class="card">
                                    <div class="card-body p-2">
                                        <div class="row">
                                            <div class="col-md-6 text-left">
                                                Calls
                                            </div>
                                            <div class="col-md-6 text-right">
                                                1882783
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="card">
                                        <div class="card-body p-2">
                                            <div class="row">
                                                <div class="col-md-6 text-left">
                                                    Calls
                                                </div>
                                                <div class="col-md-6 text-right">
                                                    1882783
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="card">
                                        <div class="card-body p-2">
                                            <div class="row">
                                                <div class="col-md-6 text-left">
                                                    Calls
                                                </div>
                                                <div class="col-md-6 text-right">
                                                    1882783
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5 mb-0">
                        <div class="col-md-6 text-start">
                            <p>Recent Blast</p>
                        </div>
                        <div class="col-md-6 text-end">
                            <p>sort</p>
                        </div>
                    </div>
                    <hr class="mt-0" />
                    <table class="table table-borderless mt-1">
                            <thead>
                                <tr>
                                    <th scope="col">Id Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Campaign</th>
                                    <th scope="col">Total Blast</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row"></th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row"></th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row"></th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>

                </div>

            </div>        
        </div>
    )
}

export default Home