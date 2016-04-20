import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Login from './login'
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
  categories: ['Cats', 'Goats', 'StarWars', 'Trump'],
  gifs: {
    Cats: [
      'http://i.giphy.com/W8krmZSDxPIfm.gif',
      'http://i.giphy.com/LaH30pQFwXJ7i.gif',
      'http://i.giphy.com/c7kqZMtzMLpG8.gif',
      'http://i.giphy.com/p6DsF6TrStko8.gif'
    ],
    Goats: [
      'http://i.giphy.com/xT0BKvuvDLDDYK0fO8.gif',
      'http://i.giphy.com/3oEdvbdNAFFA8XZzSo.gif',
      'http://i.giphy.com/iteH7x9sWBccM.gif',
      'http://i.giphy.com/11kHba1r2SK7AY.gif'
    ],
    StarWars: [
      'http://i.giphy.com/10juQ7fAaQjuHS.gif',
      'http://i.giphy.com/iXQ8SgaMQAgtq.gif',
      'http://i.giphy.com/3o7abIn8H8TTzmQrcc.gif',
      'http://i.giphy.com/Ov5NiLVXT8JEc.gif'
    ],
    Trump: [
      'http://i.giphy.com/6kVhzpAV3TMCQ.gif',
      'http://i.giphy.com/jSB2l4zJ82Rvq.gif',
      'http://i.giphy.com/CQwNwVTNNLC6Y.gif',
      'http://i.giphy.com/xT0BKvuvDLDDYK0fO8.gif'
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
import Completion from './completion'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router sceneStyle={{backgroundColor:'#F7F7F7'}}>
          <Scene key="modal" component={Modal} >
              <Scene key="root">
              <Scene key='login' direction='vertical' component={Login} initial={true} style={{flex:1, backgroundColor:'transparent'}}/>
                  <Scene
                    key="categories"
                    direction="vertical"
                    component={Categories}
                    title="Fig Trees"
                    style={{flex:1, backgroundColor:'transparent'}}/>
                  <Scene key="selector" component={Selector} title="Fig Finder" style={{flex:1, backgroundColor:'transparent'}}/>
                  <Scene key="completion" component={Completion} title="Fig Full" style={{flex:1, backgroundColor:'transparent'}}/>
                  <Scene key="profile" component={Profile} title="Fig Bucket" style={{flex:1, backgroundColor:'transparent'}}/>
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
