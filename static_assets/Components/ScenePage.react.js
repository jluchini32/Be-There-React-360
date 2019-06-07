/**
 * @providesModule ScenePage.react
 */
'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  NativeModules,
  Environment,
    VrButton,
} from 'react-360';
import InfoButton from 'InfoButton.react';


const {AudioModule, VideoModule} = NativeModules;




const DATA_BASE2 = [
  {
    //INDEX 0 - ROCK
    type: 'photo',
    source: asset('homepage.jpg'),
    list:[
     
      { 
        type: 'video',
        text: 'Highly Suspect- Seretonia',
        source: {url: asset('highlysus.mp4').uri},
        audio: asset ('highlysuspect.mp3'),
        timeoutVariable: 1375,
        
      
      },
      { 
        type: 'video',
        text: 'Metallica- For Whom The Bells Tolls',
        source: {url: asset('metallica1.mp4').uri},
        audio: asset ('metallica1.mp3'),
        timeoutVariable: 555,
      },
      { 
        type: 'video',
        text: 'New Twisted Transistor 2.0 - Right Now',
        source: {url: asset('newtwisted.mp4').uri},
        audio: asset ('newtwisted.mp3')
      },
      { 
        type: 'video',
        text: 'Flogging Molly- Red Rocks',
        source: {url: asset('flogging.mp4').uri},
        audio: asset ('flogging.mp3')
      },

   ] 
  },
  {
    //INDEX 2 - ALT
    type: 'photo',
    source: asset('homepage.jpg'),
    // audio: asset(''),
    list: [
      { 
        type: 'video',
        text: 'Highly Suspect- Seretonia',
        source: {url: asset('highlysus.mp4').uri},
        audio: asset ('highlysuspect.mp3')
      },
      { 
        type: 'video',
        text: 'Stone Sour',
        source: {url: asset('stonesour.mp4').uri},
        audio: asset ('stonesour.mp3')
      },
    ]
  },

  {
    //INDEX 3 - EDM
    type: 'photo',
    source: asset('homepage.jpg'),
    audio: asset(''),
    list: [
        { 
        type: 'video',
        text: 'ODESZA- RED ROCKS',
        source: {url: asset('odesza.mp4').uri},
        audio: asset ('odesza.mp3')
      },
      // { 
      //   type: 'video',
      //   text: 'Flume',
      //   source: {url: asset('flume.mp4').uri},
      //   audio: asset ('flume.mp3')
      // },
    ]
  },
];




class ScenePage extends React.Component {
  static defaultProps = {
    index: 0,
  };

  componentWillMount() {
    VideoModule.createPlayer('myplayer');
    this._setData(this.props);
  }

  componentWillReceiveProps(nextProps) {
      this._setData(nextProps);
    
  }

  _onListClick = (listIndex) => {
    this.props.setBandIndex(listIndex);
  };


    async _setData(nextProps){
    
    const data = nextProps.isBand ? DATA_BASE2[nextProps.index].list[nextProps.bandIndex] : 
    DATA_BASE2[nextProps.index];
    

    // const data = DATA_BASE2[nextProps.index];
    if (data.type == 'photo') {

      Environment.setBackgroundImage(data.source, {format: '2D'});
    } else {
    
      setTimeout(()=>{
        VideoModule.play('myplayer', {
          source: data.source,
        
        });
        Environment.setBackgroundVideo('myplayer');
      }, data.timeoutVariable)
      //1387

      
    }
    if (data.audio) {
      // play an environmental audio
     AudioModule.playEnvironmental({
        source: data.audio,
        volume: 0.5,
      });
    } else {
      AudioModule.stopEnvironmental();
    }

    this.setState({data: data});
  }

  render() {
    console.log("were in the render function");
    const data = this.state.data;
    // console.log(data);
    const list = [];
    
    for (let i = 0; i < data.list.length; i++) {
      list.push(
      
          
          <InfoButton key={i} text={data.list[i].text} style={styles.listView} onClick = {()=>{this._onListClick(i)}}>
          </InfoButton>
        );
    }
  
    return (
      <View style={styles.container}>
        {this.props.bandIndex ? null : list}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },

  listView: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 4,
    borderRadius: 10,
    height: 60,
    padding: 25,
    margin: 2,
    fontSize: 80,
  },



});

module.exports = ScenePage;