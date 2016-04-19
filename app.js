import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import {Provider} from 'react-redux'
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer} from 'react-native-router-flux'

/**
 * Initial Store State 
 */
const initialStoreState = {
  user: {
    name: 'React Hacker',
    categories: [],
    liked: [],
    disliked: []
  },
  categories: ['Fail', 'Goats'],
  gifs: {
    Fail: [ 
      'http://i.imgur.com/J3I9Iu8.gif',
      'http://cdn.smosh.com/sites/default/files/legacy.images/smosh-pit/092010/dancefail-4.gif'
    ],
    Goats: [
      'http://p.fod4.com/p/media/849afa2424/TRAhQum6S0O9IQ6whDto_g8.gif',
      'https://media.giphy.com/media/fF1Eb1whwSzw4/giphy.gif'
    ]
  }
};

import configureStore from '../store'
const store = configureStore(initialStoreState);

/**
 * Views
 */
import Categories from './categories'
import Selector from './selector'
import Profile from './profile'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router sceneStyle={{backgroundColor:'#F7F7F7'}}>
          <Scene key="modal" component={Modal} >
              <Scene key="root">
                  <Scene 
                    key="categories" 
                    direction="vertical" 
                    component={Categories} 
                    title="Gif Categories" 
                    initial={true} 
                    style={{flex:1, backgroundColor:'transparent'}}/>
                  <Scene key="selector" component={Selector} title="TifGif" style={{flex:1, backgroundColor:'transparent'}}/>
                  <Scene key="profile" component={Profile} title="TifGif" style={{flex:1, backgroundColor:'transparent'}}/>
              </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81
  }
});
