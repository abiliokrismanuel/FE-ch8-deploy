/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import {render,screen} from '@testing-library/react';
import App from "../App";
import React from "react";


describe('component test', () => {
    test('must have Navbar', () => {
        const component = render(<App/>)
        const navabar = component.getByTestId('Navbar')
        expect(navabar).toBeInTheDocument()
    })

    test('must have Search menu', () => {
        const component = render(<App/>)
        const Searchmenu = component.getByTestId('Search-Menu')
        expect(Searchmenu).toBeInTheDocument()
    })

    test('must have footer', () => {
        const component = render(<App/>)
        const Footer = component.getByTestId('Footer')
        expect(Footer).toBeInTheDocument()
    })
});

describe ("image alt", () => {
    test("must have Car alt", () => {
        const component = render(<App/>)
        const img = component.getByAltText('Car')
        expect(img).toBeInTheDocument()
    })

    test("must have Logoatas alt", () => {
        const component = render(<App/>)
        const Logo = component.getByAltText('Logoatas')
        expect(Logo).toBeInTheDocument()
    })

    test("must have facebook alt", () => {
        const component = render(<App/>)
        const facebook = component.getByAltText('facebook')
        expect(facebook).toBeInTheDocument()
    })

    test("must have instagram alt", () => {
        const component = render(<App/>)
        const instagram = component.getByAltText('instagram')
        expect(instagram).toBeInTheDocument()
    })

    test("must have twitter alt", () => {
        const component = render(<App/>)
        const twitter = component.getByAltText('twitter')
        expect(twitter).toBeInTheDocument()
    })

    test("must have email alt", () => {
        const component = render(<App/>)
        const email = component.getByAltText('email')
        expect(email).toBeInTheDocument()
    })

    test("must have twitch alt", () => {
        const component = render(<App/>)
        const twitch = component.getByAltText('twitch')
        expect(twitch).toBeInTheDocument()
    })

})

// alt="facebook" /></Link>
//                 <Link to="#"><img src="/images/icons/ig.svg" alt="instagram" /></Link>
//                 <Link to="#"><img src="/images/icons/twitter.svg" alt="twitter" /></Link>
//                 <Link to="#"><img src="/images/icons/mail.svg" alt="email" /></Link>
//                 <Link to="#"><img src="/images/icons/twitch.svg" alt="twitch"