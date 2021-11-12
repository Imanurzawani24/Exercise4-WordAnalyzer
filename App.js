import React, {Component} from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor(){
  super();
   this.state = {
    word: ' ',
    consonants: 0,
    vowels: 0,
    characters: 0
   }
  }

  analyzeword = () => {
    let word = this.state.word;
    let consonants =0;
    let vowels =0;
    let characters=0;

    characters=word.length;

    for (let i=0;i<=word.length;i++){
      if((word.charAt(i).match(/[aeiouAEIOU]/))){
          vowels++;
      }
      else if((word.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))){
          consonants++;
      }
    consonants: 0,
      this.setState({characters:characters,vowels:vowels,consonants:consonants});

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.header}>A Word Analyzer</Text>
          <br></br>
          <TextInput style={styles.input}onChangeText={(word) => this.setState({word})} placeholder='Detect'/>
          <Button style={styles.contents}onPress={this.analyzeword} title='Analyze'/>
          <br></br>
          <Text style={styles.contents}>Word                        : {this.state.word}</Text> 
          <Text style={styles.contents}>No of Consonants    : {this.state.consonants}</Text>
          <Text style={styles.contents}>No of Vowels            : {this.state.vowels}</Text>
          <Text style={styles.contents}>No of Characters      : {this.state.characters}</Text>
        </View>
      </View>);
  }
}
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#e0ffff',
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 5,
    },

    contents: {
      fontSize: 15,
      textAlign: 'left',
      marginBottom: 5,

    },

    input: {
      height: 40,
      margin: 5,
      textAlign: 'center',
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#FFFFFF',
    }
      
  });