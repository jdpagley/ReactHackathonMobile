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
      '../assets/gifs/cats/brandycat.gif',
      '../assets/gifs/cats/catboxes.gif',
      '../assets/gifs/cats/catpizza.gif',
      '../assets/gifs/cats/kittendance.gif'
    ],
    Goats: [
      '../assets/gifs/goats/goatbed.gif',
      '../assets/gifs/goats/goatchew.gif',
      '../assets/gifs/goats/goatkiss.gif',
      '../assets/gifs/goats/goatpushup.gif'
    ],
    StarWars: [
      '../assets/gifs/star_wars/cats.gif',
      '../assets/gifs/star_wars/chewie.gif',
      '../assets/gifs/star_wars/lea.gif',
      '../assets/gifs/star_wars/thumbsup.gif'
    ],
    Trump: [
      '../assets/gifs/trump/alf.gif',
      '../assets/gifs/trump/donaldgrump.gif',
      '../assets/gifs/trump/makeamericagreat.gif',
      '../assets/gifs/trump/sexytrump.gif'
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
                    initial={true} 
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
