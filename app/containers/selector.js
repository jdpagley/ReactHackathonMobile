import React, {
  Component,
  StyleSheet,
  View,
  Image,
  PropTypes
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Actions as RouterActions} from 'react-native-router-flux'
import * as actionCreators from '../actions' 
import Button from 'react-native-button/Button'

const styles = StyleSheet.create({
  activeGif: {
    width: 400,
    height: 300
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});

class Selector extends Component {

  constructor (props) {
    super(props);
    this.getGifs = this.getGifs.bind(this);
    this.state = {
      activeIndex: 0,
      gifs: this.getGifs()
    };
  }

  render() {

    const {user} = this.props;
    const {gifs, activeIndex} = this.state;

    return (
      <View style={styles.container}>
        <Image source={{uri:gifs[activeIndex]}} style={styles.activeGif}/>
        <Button onPress={() => this.handleLike(gifs[activeIndex])}>
          Like 
        </Button>
        <Button onPress={() => this.handleDislike(gifs[activeIndex])}>
          Disike 
        </Button>
      </View>
    );
  }

  getGifs() {

    let {gifs, user} = this.props;
    let list = [];

    /**
     * Concat list of gifs based on selected user categories
     */
    user.categories.forEach((category) => {
      list = list.concat(gifs[category]);
    });

    var currentIndex = list.length, temporaryValue, randomIndex;

    /**
     * Randomly shuffle gifs
     */ 
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = list[currentIndex];
      list[currentIndex] = list[randomIndex];
      list[randomIndex] = temporaryValue;
    }

    return list; 
  }

  handleLike(gif) {

    let {actions} = this.props;
    let {gifs, activeGifIndex} = this.state;

    let newActiveIndex = this.state.activeIndex++;
    
    this.setState({activeGifIndex: newActiveIndex});
    actions.like(gif);

    //When we hit the end of the array go to profile view
    if ((gifs.length - 1) <= newActiveIndex) return RouterActions.completion();

  }

  handleDislike(gif) {

    let {actions} = this.props;
    let {gifs, activeGifIndex} = this.state;

    let newActiveIndex = this.state.activeIndex++;
    
    this.setState({activeGifIndex: newActiveIndex});
    actions.dislike(gif);

    //When we hit the end of the array go to profile view
    if ((gifs.length - 1) <= newActiveIndex) return RouterActions.completion();

  }

}

Selector.propTypes = {
  user: PropTypes.object.isRequired,
  gifs: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const {user, gifs} = state;
  return {user, gifs};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector)
