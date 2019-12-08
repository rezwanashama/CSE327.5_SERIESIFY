import React, {Component} from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Button, Icon } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
export class FBLogin extends Component {

    componentClicked = () => console.log("clicked");

    responseFacebook = response => {
      this.props.onAuth(response.accessToken);
      console.log(response)
    }


  render() {
    let fbContent;

    fbContent = (<FacebookLogin
        appId="354559358572182"
        autoLoad={true}
        fields="name,email"
        scope="public_profile,email"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
        render={renderProps => (
            <Button type="primary" onClick={renderProps.onClick} style={{ fontSize: '17px' }}><Icon type="facebook" theme="filled" style={{ fontSize: '20px' }} />Login with Facebook</Button>
        )}
      />)


    return (
      <div>
       
      </div>
    )
  }
}




const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (token) => dispatch(actions.authSocialLogin(token)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FBLogin);