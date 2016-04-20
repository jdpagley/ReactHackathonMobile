import React, {
  Component,
  StyleSheet,
  View,
  Text,
  PropTypes
} from 'react-native';
import {connect} from 'react-redux'
import {Actions as RouterActions} from 'react-native-router-flux'
import Button from 'react-native-button/Button'
import Counter from '../components/counter'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});

class Completion extends Component {

  constructor (props) {
    super(props);
  }

  render() {

    const {user} = this.props;

    console.log('completion screen: ', user);

    return (
      <View style={styles.container}>
        <Counter preface="Total Likes:" count={user.liked.length} /> 
        <Counter preface="Total Dislikes:" count={user.disliked.length} /> 
        <Text>All figs have been picked!</Text>
        <Button onPress={RouterActions.profile}>My Profile</Button>
      </View>
    );
  }

}

Completion.propTypes = {
  user: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  const {user} = state;
  return {user};
}

export default connect(mapStateToProps)(Completion)
