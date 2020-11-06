import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';

import Search from "./Search";

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to='https://rohandeysarkar.github.io/google-clone/'>About</Link>
                    <Link to='https://rohandeysarkar.github.io/google-clone/'>Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to='https://rohandeysarkar.github.io/google-clone/'>Gmail</Link>
                    <Link to='https://rohandeysarkar.github.io/google-clone/'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className="home__body">
                <img
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    alt=""
                />
                <Search />
            </div>
                
        </div>
    )
}

export default Home
