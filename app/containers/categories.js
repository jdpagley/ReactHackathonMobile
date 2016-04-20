import React, {
  Component,
  StyleSheet,
  View,
  PropTypes,
  Text,
  TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Button from 'react-native-button/Button'
import {Actions as RouterActions} from 'react-native-router-flux'
import * as actionCreators from '../actions'

const styles = StyleSheet.create({
  active: {
    height: 60,
    borderRadius: 8,
    borderColor: '#FF7FBF',
    borderWidth: 2,
    backgroundColor: '#FF7FBF',
    margin: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactive: {
    height: 60,
    borderRadius: 8,
    borderColor: '#D7FDFF',
    borderWidth: 2,
    backgroundColor: 'transparent',
    margin: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeText: {
    color: '#D7FDFF',
    fontSize: 20,
    fontWeight: '600',
  },
  inactiveText: {
    color: '#D7FDFF',
    fontSize: 20,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19E3C6',
  },
  nextButton: {
    height: 60,
    borderRadius: 8,
    borderColor: '#FF7FBF',
    borderWidth: 2,
    backgroundColor: '#FF7FBF',
    margin: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#D7FDFF',
    fontSize: 20,
    fontWeight: '600',
  },
});

class Categories extends Component {

  constructor (props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  render() {

    const {categories, user} = this.props;

    let categoryNodes = categories.map((category) => {
      let btnStyles = user.categories.indexOf(category) !== -1 ? styles.active : styles.inactive;
      let btnTextStyles = user.categories.indexOf(category) !== -1 ? styles.activeText : styles.inactiveText;
      return (
        <TouchableHighlight
          key={category} style={btnStyles} onPress={() => this.handleSelection(category)}>
          <Text style={btnTextStyles}>
            {category}
          </Text>
        </TouchableHighlight>
      );
    });

    return (
      <View style={styles.container}>
        {categoryNodes}
        <TouchableHighlight style={styles.nextButton} onPress={() => RouterActions.selector()}>
          <Text style={styles.nextButtonText}>Find Your Perfect Matches</Text>
        </TouchableHighlight>
      </View>
    );
  }

  handleSelection(category) {

    const {actions, user} = this.props;

    /**
     * If category doesn't exist in user category list then add it.
     * If it does alreayd exist then remove it.
     */
    if (user.categories.indexOf(category) === -1) {
      actions.addCategory(category);
    } else {
      actions.removeCategory(category);
    }

  }

}

Categories.propTypes = {
  user: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const {categories, user, dispatch} = state;
  return {categories, user};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
