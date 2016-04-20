import React, {
  Component,
  View,
  Text,
  PropTypes
} from 'react-native';

class Counter extends Component {

  render() {

    let {preface, count} = this.props;

    return (
      <Text>{`${preface} ${count}`}</Text>
    );
  }

}

Counter.propTypes = {
  preface: PropTypes.string,
  count: PropTypes.number.isRequired
}

export default Counter;

