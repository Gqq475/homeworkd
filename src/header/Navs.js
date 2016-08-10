import React, { PropTypes } from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
class Navs extends React.Component {
  render () {
    let styles={
      navitem:{
        marginRight:'60px',
        marginLeft:'10px'
      },
      navbar:{
        margin:'0'
      },
      nav:{
        width:'100%'
      }
    }
    return(
      <Navbar inverse style={styles.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav style={styles.nav}>
            <NavItem style={styles.navitem}eventKey={1} href="#">热门课程</NavItem>
            <NavItem style={styles.navitem}eventKey={2} href="#">专业技能</NavItem>
            <NavItem style={styles.navitem}eventKey={3} href="#">师资力量</NavItem>
            <NavItem style={styles.navitem}eventKey={4} href="#">课程设置</NavItem>
            <NavItem style={styles.navitem}eventKey={5} href="#">项目实训</NavItem>
            <NavItem style={styles.navitem}eventKey={6} href="#">明星学员</NavItem>
            <NavItem style={styles.navitem}eventKey={7} href="#">学员作品</NavItem>
            </Nav>
          <Nav pullRight/>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navs;
