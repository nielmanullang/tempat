import { Icon, Text, View } from 'native-base';
import React from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class Food extends React.Component {

    render() {
        let colorRating = '#03955E'
        let jenisTempat = '#FFB139'

        return (
            <View style={{ backgroundColor: '#FFF', borderRadius: 10, borderColor: '#868686', borderWidth: 0.5, width: WIDTH * 0.60, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 10, marginRight: 10 }}>
                <TouchableOpacity onPress={() => this.props._actionDetail(this.props.item)}>
                    <View horizontalRow style={{ flexDirection: 'row' }}>
                        {this.props.item._source.branch_images.image_url_thumb && <View style={{ flex: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: 150, width: WIDTH * 0.60, marginTop: 0 }}>
                                <Image source={{ uri: this.props.item._source.branch_images.image_url_thumb }} style={{ flex: 1, alignSelf: 'stretch', height: undefined, width: undefined, resizeMode: "cover" }} />
                            </View>
                            <View style={{ position: 'absolute', top: 10, left: 10, borderRadius: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 12, paddingRight: 12, backgroundColor: colorRating, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }}>
                                <Icon type="FontAwesome" name="star" style={{ color: '#FFF', fontSize: 11 }} />
                                <Text style={{ fontSize: 11, color: '#FFF', fontWeight: 'bold' }}>{' ' + this.props.item._source.rating_score}</Text>
                            </View>
                            <View style={{ position: 'absolute', top: 7, right: 10, borderRadius: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 12, paddingRight: 0, flexDirection: 'row' }}>
                                <Icon type="FontAwesome" name="heart" style={{ color: 'red', fontSize: 20 }} />
                            </View>
                            <View style={{ position: 'absolute', bottom: 0, left: 0, borderTopRightRadius: 20, paddingLeft: 10, paddingTop: 5, paddingBottom: 5, paddingRight: 10, flexDirection: 'row', backgroundColor: jenisTempat }}>
                                <Text style={{ fontSize: 11, color: '#FFF', fontWeight: 'bold' }}>{this.props.item._source.branch_group_activity[0].activity_group.group_name}</Text>
                            </View>
                        </View>}
                    </View>
                    <View style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 5 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 5, color: '#000000' }}>{this.props.item._source.brand.brand_name}</Text>
                        <Text style={{ fontSize: 14, marginTop: 5, color: '#9798A0' }}>{this.props.item._source._intersects.kecamatan.name + ', ' + this.props.item._source._intersects.kabupaten.name}</Text>
                        <Text style={{ fontSize: 12, marginTop: 5, color: '#868686' }}>{this.props.item._source.branch_group_activity[0].activity_group.group_name}</Text>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => this.props._actionBookNow(this.props.item)}>
                    <View style={{ paddingTop: 10, paddingBottom: 10, borderTopColor: '#868686', borderTopWidth: 0.5 }}>
                        <Text style={{ color: '#FF794A', fontWeight: 'bold', textAlign: 'center' }}>{'BOOK NOW'}</Text>
                    </View>
                </TouchableOpacity>
            </View >
        )
    }
}

export default Food;
