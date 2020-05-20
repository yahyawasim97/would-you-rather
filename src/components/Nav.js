import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav as BarNavigator,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink as Title,
  UncontrolledDropdown,
} from 'reactstrap';
import { authenticateUser } from '../actions/auth';

function Nav(props) {
  const onLogout = (e) => {
    e.preventDefault();
    props.authenticateUser(null);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { auth } = props;

  return (
    <div id="Nav">
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <BarNavigator className="ml-auto mr-auto" navbar>
            <NavItem>
              <Title tag={Link} to="/">
                Home
              </Title>
            </NavItem>
            <NavItem>
              <Title tag={Link} to="/add">
                New Question
              </Title>
            </NavItem>
            <NavItem>
              <Title tag={Link} to="/leaderboard">
                Leader Boards
              </Title>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <img src={auth.image.src} width="30px" alt="" />{' '}
                {auth.label}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={onLogout}>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </BarNavigator>
        </Collapse>
      </Navbar>
    </div>
  );
}

function mapStateToProps({ users, auth }) {
  return {
    users,
    auth,
  };
}

export default connect(mapStateToProps, { authenticateUser })(Nav);
