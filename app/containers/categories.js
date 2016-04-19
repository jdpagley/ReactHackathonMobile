import React, {
  Component,
  StyleSheet,
  View,
  PropTypes
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Button from 'react-native-button/Button'
import {Actions as RouterActions} from 'react-native-router-flux'
import * as actionCreators from '../actions' 

const styles = StyleSheet.create({
  active: {
    color: 'green'
  },
  inactive: {
    color: 'black' 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
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
      return (
        <Button key={category} style={btnStyles} onPress={() => this.handleSelection(category)}>
          {category}
        </Button>
      );
    });

    return (
      <View style={styles.container}>
        {categoryNodes}
        <Button onPress={() => RouterActions.selector()}>
          Find Your Perfect Matches 
        </Button>
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
