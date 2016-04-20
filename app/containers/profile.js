import React, {
  Component,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableHighlight,
  PropTypes
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Button from 'react-native-button/Button'
import {Actions as RouterActions} from 'react-native-router-flux'
import * as actionCreators from '../actions'

const styles = StyleSheet.create({
  username: {
    marginTop: 80,
    fontSize: 30 ,
  },
  gif: {
    width: 400,
    height: 300
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    marginTop: 30,
    height: 400
  },
  likeButton: {
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
  likeButtonText: {
    color: '#D7FDFF',
    fontSize: 20,
    fontWeight: '600',
  },
  dislikeButton: {
    height: 60,
    borderRadius: 8,
    borderColor: '#19e3c6',
    borderWidth: 2,
    backgroundColor: '#19e3c6',
    margin: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dislikeButtonText: {
    color: '#D7FDFF',
    fontSize: 20,
    fontWeight: '600',
  },
});

class Selector extends Component {

  constructor (props) {
    super(props);
    this.getGifNodes = this.getGifNodes.bind(this);
    this.handleShowLikes = this.handleShowLikes.bind(this);
    this.handleShowDislikes = this.handleShowDislikes.bind(this);
    this.state = {
      active: 'liked'
    };
  }

  render() {

    const {user} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.username}>{user.username}</Text>
        <TouchableHighlight
          onPress={this.handleShowLikes}
          style={styles.likeButton}>
            <Text style={styles.likeButtonText}>Likes</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.handleShowDislikes}
          style={styles.dislikeButton}>
            <Text style={styles.dislikeButtonText}>Dislikes</Text>
        </TouchableHighlight>
        <ScrollView style={styles.scrollView}>
          {this.getGifNodes(user[this.state.active])}
        </ScrollView>
      </View>
    );

  }

  handleShowLikes() {
    this.setState({active: 'liked'});
  }

  handleShowDislikes() {
    this.setState({active: 'disliked'});
  }

  getGifNodes(gifs) {

    if (!gifs) return <Text>No Gifs</Text>

    return gifs.map((gif, i) => {
      console.log('getGifNodes: ', gif, i);
      return <Image key={i} source={{uri: gif}} style={styles.gif}/>
    });

  }
}

Selector.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const {user} = state;
  return {user};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector)
