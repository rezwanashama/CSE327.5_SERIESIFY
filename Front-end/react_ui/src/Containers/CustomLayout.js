import React, {Component} from 'react'
import {Layout, Menu} from 'antd';
import SearchBar from '../Components/SearchBar';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const {Header, Content, Footer} = Layout;
class CustomLayout extends Component {

  logout=()=>{
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Layout>
          <Header
            style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%'
          }}>
            <div className="logo"/>
            <Menu
              theme="dark"
              mode="horizontal"
              // defaultSelectedKeys={['4']}
              style={{
              lineHeight: '64px'
            }}>
              <Menu.Item key="1"><Link to="/user">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/watchlist">Watchlist</Link></Menu.Item>
              <Menu.Item key="3">Recommendation</Menu.Item>
              <Menu.Item  key="4" ><Link to="/">Trending</Link></Menu.Item>
              
              {
                  this.props.isAuthenticated ?
                  
                  <Menu.Item key="6" onClick={this.logout}>
                      Logout
                  </Menu.Item>
  
                  :
  
                  <Menu.Item key="7">
                      <Link to="/login">Login</Link>
                  </Menu.Item>
              }
              
              <Menu.Item className="SearchMenu" style={{float:'left'}} key="5" selectable='false' ><SearchBar /></Menu.Item>
              
            </Menu>
          </Header>
          <Content
            style={{
            padding: '0 50px',
            marginTop: 64
          }}>

           <div
              style={{
              background: '#fff',
              padding: 24,
              minHeight: 380
            }}>
              
              {/* all the props passed to this class will be displayed in this area */}
              {this.props.children}

            </div>
          </Content>
          <Footer style={{
            textAlign: 'center'
          }}>SERIESIFY ©2019</Footer>
        </Layout>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));