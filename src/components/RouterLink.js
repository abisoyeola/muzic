import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Features from '../Pages/Features'
import Home from '../Pages/Home'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import ActiveButton from './ActiveButton'
import styles from './RouterLink.css'
import Lock from './lock.png'


const RouterLink = () => {
    return (
        <Router>
            <div className='container'>
                <nav className='nav'>
                    <div style={{ flex: 2 }}>
                        <ul>

                            <li>
                                <Link to="/">Muzic</Link>
                            </li>
                        </ul>


                    </div>
                    <div style={{ flex: 4 }}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/features">Features</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', flex: 2, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <ul>
                            <li>
                                <Link to="/signin"><ActiveButton btn={stylesBtn.signIn} content={<img src={Lock} width={24} />} /></Link>
                            </li>
                            <li>
                                <Link to="/signup"><ActiveButton btn={stylesBtn.signupbtn} content={'Sign Up'} /></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/features' element={<Features />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </Router >
    )
}

export default RouterLink


const stylesBtn = {
    signupbtn: {
        color: 'blue',
        padding: 15,
        width: 120,
        borderStyle: 'none',
        border: 'none',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
    },
    signIn: {
        padding: 10,
        color: 'blue',
        width: 50,
        borderStyle: 'none',
        border: 'none',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    }
}
