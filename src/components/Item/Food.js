import { Icon, Text, View } from 'native-base';
import React from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class Food extends React.Component {

    render() {
        return (
            <View style={{ backgroundColor: '#FFF', borderRadius: 10, borderColor: '#868686', borderWidth: 0.5 }}>
                <TouchableOpacity onPress={() => this.props._actionDetail(this.props.item)}>
                    <View horizontalRow style={{ flexDirection: 'row' }}>
                        {this.props.item.image && <View style={{ flex: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: 150, width: WIDTH * 0.60, marginTop: 0 }}>
                                <Image source={{ uri: this.props.item.image }} style={{ flex: 1, alignSelf: 'stretch', height: undefined, width: undefined, resizeMode: "cover" }} />
                            </View>
                            <View style={{ position: 'absolute', top: 10, left: 10, borderRadius: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 12, paddingRight: 12, backgroundColor: '#03955E', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }}>
                                <Icon type="FontAwesome" name="star" style={{ color: '#FFF', fontSize: 11 }} />
                                <Text style={{ fontSize: 11, color: '#FFF', fontWeight: 'bold' }}>{' 5.0'}</Text>
                            </View>
                            <View style={{ position: 'absolute', top: 7, right: 10, borderRadius: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 12, paddingRight: 0, flexDirection: 'row' }}>
                                <Icon type="FontAwesome" name="heart" style={{ color: 'red', fontSize: 20 }} />
                            </View>
                            <View style={{ position: 'absolute', bottom: 0, left: 0, borderTopRightRadius: 20, paddingLeft: 10, paddingTop: 5, paddingBottom: 5, paddingRight: 10, flexDirection: 'row', backgroundColor: '#FFB139' }}>
                                <Text style={{ fontSize: 11, color: '#FFF', fontWeight: 'bold' }}>{this.props.item.jenisTempat}</Text>
                            </View>
                        </View>}
                    </View>
                    <View style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 5 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>{this.props.item.name}</Text>
                        <Text style={{ fontSize: 14, marginTop: 5, color: '#9798A0' }}>{this.props.item.location + ', ' + this.props.item.locationKabupaten}</Text>
                        <Text style={{ fontSize: 12, marginTop: 5, color: '#868686' }}>{this.props.item.masakan}</Text>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => this.props._actionBookNow(this.props.item)}>
                    <View style={{ paddingBottom: 10, paddingTop: 10, borderTopColor: '#868686', borderTopWidth: 0.5 }}>
                        <Text style={{ color: '#FF794A', fontWeight: 'bold', textAlign: 'center' }}>{'BOOK NOW'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Food;
