import React, {
  Component,
  StyleSheet,
  View,
  Text,
  PropTypes
} from 'react-native';
import {connect} from 'react-redux'
import {Actions as RouterActions} from 'react-native-router-flux'
import Button from '../button.js';
import Counter from '../components/counter'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19E3C6',
  },
  text: {
    marginTop: 10,
    color: '#D7FDFF',
    fontSize: 20,
    fontWeight: '600',
  },
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
        <Counter style={styles.text} preface="Total Likes:" count={user.liked.length} />
        <Counter style={styles.text} preface="Total Dislikes:" count={user.disliked.length} />
        <Text style={styles.text}>All figs have been picked!</Text>
        <Button onPress={RouterActions.profile} text="My Profile" />
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
