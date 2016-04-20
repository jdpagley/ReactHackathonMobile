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
import Button from '../button.js';

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
        {error}
        <Image style={styles.logo}
            source={require('../assets/fig_logo2x.png')} />

        <TextInput
          style={styles.input}
          onChangeText={email => this.setState({user})}
          value={username} />

        <Button
					onPress={this.loginEmail}
					text="you won't regret this" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#19e3c6'
  },
  input: {
    alignSelf: 'center',
    borderRadius: 8,
    height: 60,
    width: 256,
    borderColor: '#d7fdff',
    borderWidth: 2,
    marginTop:10,
    fontFamily: 'Avenir',
    paddingLeft:10,
    color:'#888',
  },
  button:{
    marginTop:10,
    borderRadius:10
  },
  logo:{
    alignItems:'center',
    marginBottom: 20
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
