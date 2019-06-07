import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  Environment,
  VrButton,
} from 'react-360';
import InfoButton from 'InfoButton.react';
import ScenePage from 'ScenePage.react';
import BackButton from 'BackButton.react';



// referencing an asset from 'static_assets' directory


// The root react component of the app
export default class BasicAppTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      bandIndex: null,
      isBand: false,
      
    };
  }

  _onClick = (index) => {
    this.setState({index: index});
  };

  setBandIndex = (bandIndex) => {
    console.log("IN SET BAND INDEX");
    console.log(bandIndex);
    this.setState({
      bandIndex: bandIndex,
      isBand: true
    })
  }


  render() {

    const sceneButtons = [];
    // for (const i = 1; i < SCENE_COUNT; i++) {
      sceneButtons.push(
        <InfoButton
          style={styles.button}
          key = {0}
          index = {0}
          text={`Rock`}
          onClick={() => { this._onClick(0); } }
        />
      )

      sceneButtons.push(
        <InfoButton
          style={styles.button}
          key = {1}
          index = {1}
          text={`Alternative`}
          onClick={() => { this._onClick(1); } }
        />
      )
      sceneButtons.push(
        <InfoButton
          style={styles.button}
          key = {2}
          index = {2}
          text={`Electronic`}
          onClick={() => { this._onClick(2); } }
        />
      )

      // console.log(sceneButtons.props.index,' this is index' )

    //VIEWS
    return (


      // Panel Box
      <View style={styles.panel}>

      {/* Greeting box */}
      <View>
        <Text style={styles.hellobox}>
        Click One of The Genres Below
        </Text>
      </View>
    

{/* Renders genre text based on state       */}
    <View>
      { 
        this.state.index === 0 ?
        <Text style={styles.hellobox}>
        [ROCK]
        </Text>

            : this.state.index  === 1 ? 
              <Text style={styles.hellobox}>
              [ALT]
              </Text> 

                : this.state.index === 2 ? 
                  <Text style={styles.hellobox}>
                  [EDM]
                  </Text> 
                    
                      : null
        }
    </View>
    


      {/* Genre Buttons row 1 */}
        <View style={styles.section}>  
          {sceneButtons}
        </View>

      {/* Genre Buttons row 2
        <View style={styles.section}>  
          {sceneButtons2}
        </View>  */}

       
        <View style={styles.scenePage}>
          <ScenePage
            setBandIndex={this.setBandIndex}
            bandIndex={this.state.bandIndex}
            isBand={this.state.isBand}
            index={this.state.index}
            />
        </View>
      
         {/* Back button */}
         <View >
         {
           this.state.isBand === true ? 
     
               <BackButton>
               </BackButton>
 
                   : null
         }
         </View>


      </View>


    ); 
  }
};


// defining StyleSheet
const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  section: {
    padding: 5,
    width: 750,
    backgroundColor: 'black',
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
    borderColor: 'red',
  },
  scenePage: {
    padding: 5,
    width: 600,
    height: 300,
    backgroundColor: 'black',
    borderColor: 'red',
    borderRadius: 5,
  },
  hellobox: {
    fontSize: 60,
    fontWeight: '800',
    color: 'black',
    marginBottom: 25,
    alignItems: 'center', 
    justifyContent: 'center',
  },

});


AppRegistry.registerComponent('BasicAppTemplate', () => BasicAppTemplate);
AppRegistry.registerComponent('BackButton', () => BackButton);