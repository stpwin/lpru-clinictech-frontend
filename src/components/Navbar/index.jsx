import React, { Component } from 'react'
import { Navbar, Nav } from "react-bootstrap";
import {  NavLink} from "react-router-dom";

export default class Navigation extends Component {
  render() {

    return (
      <Navbar collapseOnSelect bg='dark' variant='dark' expand='lg'>
        {/* <Navbar.Brand href='#home'>หน้าแรก</Navbar.Brand> */}
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-center'
        >
          <Nav justify className='justify-content-center' variant='pills'>
            <NavLink exact  to='/'>
              หน้าแรก
            </NavLink>
            <NavLink  to='/about'>
              เกี่ยวกับ
            </NavLink>
            <NavLink  to='/clinic'>
              คลินิคออนไลน์
            </NavLink>
            <NavLink  to='/services'>
              บริการและหลักเกณฑ์
            </NavLink>
            <NavLink  to='/specialist'>
              ข้อมูลผู้เชี่ยวชาญ
            </NavLink>
            <NavLink  to='/downloads'>
              เอกสารดาวน์โหลด
            </NavLink>
            <NavLink  to='/project'>
              โครงการ
            </NavLink>
            {/* <NavLink  to='/contactus'>
              ติดต่อเรา
            </NavLink> */}

            {/* <LinkContainer to='/signup'>
              <NavItem>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to='/login'>
              <NavItem>Login</NavItem>
            </LinkContainer> */}
          </Nav>
          {/* <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-light'>Search</Button>
        </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
