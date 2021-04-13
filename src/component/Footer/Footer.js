import React from 'react';
import {Navbar,Container ,NavbarBrand} from 'react-bootstrap';
export default function Footer() {
    return (
        <div className="fixed-bottom">
            <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand>Footer</NavbarBrand>
                </Container>
            </Navbar>
        </div>
    )
};