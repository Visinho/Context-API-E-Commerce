import React from 'react';
import { Container, Dropdown, FormControl, Navbar, Badge, Nav } from 'react-bootstrap';
import "./styles.css"
import { AiFillDelete } from 'react-icons/ai';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { Button } from 'react-bootstrap';

const Header = () => {

    const { state: { cart }, dispatch, productDispatch} = CartState();
  
    return (
    <Navbar bg="dark" variant="dark" style={{height: "80px"}} fluid>
        <Container>
            <Navbar.Brand>
                <Link to ='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width: "500px"}}
                    placeholder="Search a product"
                    className='m-auto'
                    onChange={(e) => 
                        productDispatch({
                            type: "SORT_BY_SEARCH",
                            payload: e.target.value,
                        })
                    }
                />
            </Navbar.Text>
            <Nav fluid>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='success'>
                        {<FaShoppingCart color="white" fontSize="25px" />}
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 265}}>
                    {
                        cart.length > 0 ? (
                            <>
                            {cart.map((prod) => (
                                <span className='cartitem' key={prod.id}>
                                    <img
                                    src={prod.image}
                                    className="cartItemImg"
                                    alt={prod.name}
                                    />
                                    <div className='cartItemDetail'>
                                        <span>{prod.name}</span>
                                        <span>${prod.price.split(".")[0]}</span>
                                    </div>
                                        <AiFillDelete
                                        fontSize="20px"
                                        style={{ cursor: "pointer"}}
                                        onClick={() =>
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: prod,
                                            })
                                        }
                                /> 
                                </span>
                            ))}
                            <Link to="/cart">
                                <Button style={{ width: "95%", margin: "0 10px"}}>
                                    Go To Cart
                                </Button>
                            </Link>
                            </>
                        ) : (
                            <span style={{padding: 10}}>Cart is Empty!</span>
                        )
                    }
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header
