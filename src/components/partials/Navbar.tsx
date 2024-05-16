import React from 'react'
import { Logo } from '../common/Logo'

export const Nav = () => {
    return (
        <>
            <nav className="relative container mx-auto p-6">
                <div className="logo-area"></div>
                <div className="">
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Pricing</a>
                    <a href="#">Support</a>
                    <a href="#">Contact</a>
                    <div className="buttons">
                        <button>Get Started!</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
