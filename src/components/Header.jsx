import React from 'react';
import { Container, Dropdown, FormControl, Navbar, Badge, Nav } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{height: "80px"}}>
        <Container>
            <Navbar.Brand>
                <Link to ='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width: "500px"}}
                    placeholder="Search a product"
                    className='m-auto'
                />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='success'>
                        {<FaShoppingCart color="white" fontSize="25px" />}
                        <Badge>100</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 370}}>
                        <span style={{padding: 10}}>Cart is Empty</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header
