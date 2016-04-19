import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Image
} from 'react-native';


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../actions'
import { Actions } from 'react-native-router-flux'

class LoginScreen extends Component {
  state = {
    username: 'hacker'
  };

  loginEmail = () => {
    const {username} = this.state;

    this.props.actions.addUser(username);
    this._routeToCategory(username);
    //Actions.main();
  };
  _routeToCategory(user){
    console.log('passing user to category: ', user);
    Actions.categories({user: user});
  }

  render() {
    const {username} = this.state;
    const { user } = this.props;

    let error;
    if (user.errorMessage !== '') {
      console.log('user', user, user.errorMessage);
      error = <Text style={{backgroundColor: 'red'}}>{user.errorMessage}</Text>;
    }

    return (
      <View style={styles.container}>
        <View>
          {error}
          <Image style={styles.icon}
              source={require('../assets/fig_logo2x.png')} />
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={email => this.setState({user})}
            value={username}
          />
          <TouchableHighlight 
					 onPress={this.loginEmail}
					style={styles.button}>
					<Text style={styles.buttonText}> SUBMIT </Text>
				</TouchableHighlight>

         
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:200
  },

  input: {
    alignSelf: 'center',
    height: 44,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  icon:{
  	width:400,
  	
  }
});

function mapStateToProps(state) {
  const { user } = state;

  return {
    user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);