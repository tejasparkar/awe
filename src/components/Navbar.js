import React from 'react';
import Navbar from '@trendmicro/react-navbar';
import { StickyContainer, Sticky } from 'react-sticky';
const NavBar = () => {
    return (
        <div>
        <StickyContainer>
            <header className={styles.siteHeader}>
                <Anchor>
                    <i className={styles.banner} />
                    <h1 className={styles.title}>Product Name</h1>
                </Anchor>
            </header>
            <Sticky>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Nav
                        navStyle="navbar"
                        activeKey={state.tab}
                        onSelect={actions.selectTab}
                    >
                        <NavItem className="text-center" style={{ minWidth: 72 }}>
                            <i className="fa fa-star" style={{ color: '#fff' }} />
                        </NavItem>
                        <NavDropdown
                            autoOpen
                            noCaret
                            eventKey="dashboard"
                            title="Dashboard"
                        >
                            <MenuItem eventKey="dashboard.1">Menu Item 1</MenuItem>
                            <MenuItem eventKey="dashboard.2">Menu Item 2</MenuItem>
                            <MenuItem eventKey="dashboard.3">Menu Item 3</MenuItem>
                            <MenuItem eventKey="dashboard.4">Menu Item 4</MenuItem>
                        </NavDropdown>
                        <NavDropdown
                            autoOpen
                            noCaret
                            eventKey="administration"
                            title="Administration"
                        >
                            <MenuItem eventKey="administration.1">Menu Item 1</MenuItem>
                            <MenuItem eventKey="administration.2">Menu Item 2</MenuItem>
                            <MenuItem eventKey="administration.3">Menu Item 3</MenuItem>
                            <MenuItem eventKey="administration.4">
                                Menu item 4
                                <MenuItem eventKey="administration.4.1">
                                    Second level item one
                                </MenuItem>
                                <MenuItem eventKey="administration.4.2">
                                    Second level item two
                                </MenuItem>
                            </MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </Sticky>
            <header id="header" class="d-flex align-items-center">
            <div class="container">
        
              
              <div class="logo d-block d-lg-none">
                <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
              </div>
        
              <nav class="nav-menu d-none d-lg-block">
                <ul class="nav-inner">
                  <li class="active"><a href="index.html">Home</a></li>
                  <li class="drop-down"><a href="">About</a>
                    <ul>
                      <li><a href="#about">About Us</a></li>
                      <li><a href="#team">Team</a></li>
        
                      <li class="drop-down"><a href="#">Deep Drop</a>
                        <ul>
                          <li><a href="#">Deep Drop Down 1</a></li>
                          <li><a href="#">Deep Drop Down 2</a></li>
                          <li><a href="#">Deep Drop Down 3</a></li>
                          <li><a href="#">Deep Drop Down 4</a></li>
                          <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#services">Services</a></li>
        
                  <li class="nav-logo"><a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a></li>
        
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#contact">Contact</a></li>
        
                </ul>
              </nav>
        
            </div>
          </header>
        </StickyContainer>
       
        </div>
    );
}

export default NavBar;
