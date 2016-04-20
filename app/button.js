import React, {
  Component,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  PropTypes
} from 'react-native';

class Button extends Component {

  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.button}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 8,
    backgroundColor: '#D7FDFF',
    margin: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FF7FBF',
    fontSize: 20,
    fontWeight: '600',
  },
});

Button.propTypes = {
  text: React.PropTypes.string,
  onPress: React.PropTypes.func
}

export default Button;
