/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Button,
    TextInput,
    Text,
    View,
    Picker,
    Alert
} from 'react-native';

export default class Lab3 extends Component {
    constructor() {
        super()
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.arr = [];
        this.state = {
            object: '',
            dataSource: ds.cloneWithRows(this.arr),
        }
    }


    _pop() {
        Alert.alert('Warning !', 'Are you sure to pop?', [
            { text: 'Yes', onPress:()=> this._confirmPop('Yes'), style: 'positive' },
            { text: 'No', onPress:()=> this._confirmPop('No'), style: 'negative' }
        ])

    }
    _confirmPop(text) {
        if (text == 'Yes') {
            this.arr.pop();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.arr)
            })
        }
    }
    _push(rowData) {
        this.arr.push(rowData);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.arr)
        })

    }
    render() {
        return (
            <View>

                <TextInput
                    value={this.state.object}
                    onChangeText={(text) => this.setState({ object: text })}
                />
                <View style={styles.zero}>
                <View style={styles.stylebutton}>
                <Button onPress={() => this._push(this.state.object)} title="Push"></Button>
                </View>
                <View style={styles.stylebutton1}>
                <Button onPress={() => this._pop()} title="Pop"></Button>
                </View>
                </View>
                <ListView style={styles.liststyle}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                    >
                    </ListView>

            </View>
        )
    }

}

const styles = StyleSheet.create({
	 zero: {
        flexDirection: 'row',
        borderWidth: 2,
        width: 300,
        height: 41
    },

	stylebutton: {
        flex: 50,
        borderWidth: 2,
        flexDirection: 'column',
  },
  stylebutton1: {
        flex: 50,
        borderWidth: 2,
        flexDirection: 'column',
  },
  liststyle: {
        marginTop: 20,

        flexDirection: 'row',
        borderWidth: 2,
        width: 350,
        height: 400
    },

});

AppRegistry.registerComponent('Lab3', () => Lab3);
