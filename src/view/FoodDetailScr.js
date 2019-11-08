import { Container, Content, Header, Icon, Tab, Tabs, View } from 'native-base';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Toast from './../components/Toast';
import { apiCall, getAsyncStoreLoad } from './../redux/actions/commonAction';
import endPoint from './../redux/service/endPoint';

class FoodDetailScreen extends React.Component {
    static navigationOptions = { header: null }
    state = {
        accessToken: null,
        detail: []
    }

    componentDidMount = () => {
        getAsyncStoreLoad('accessToken', this.getAccessToken);
    }

    getAccessToken = (accessToken) => {
        this.setState({ accessToken }, () => { this.getDetail(accessToken) })
    }

    getDetail = (accessToken) => {
        const api = endPoint.branch + this.props.navigation.state.params.data;
        const header = {
            headers: {
                'Authorization': accessToken,
                'Content-Type': 'application/json'
            }
        }
        apiCall.get(api, header, this.responeFoodUpdate)
    }

    responeFoodUpdate = (callback) => {
        console.log('callback', callback);
        if (callback != null && callback.data.status == true) {
            let detail = callback.data.data
            console.log('detail', detail);
            this.setState({ detail })
        }
    }

    _actionDetail = () => {
        this.refs.defaultToastBottom.ShowToastFunction('action detail');
    }

    _seeAll = () => {
        this.refs.defaultToastBottom.ShowToastFunction('action see all');
    }

    _actionBookNow = () => {
        this.refs.defaultToastBottom.ShowToastFunction('action book now');
    }

    render() {
        return (
            <Container>
                <Header>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, paddingLeft: 10 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                                style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                                <Icon name="arrow-back" style={{ color: "#000" }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 8, paddingRight: 10, height: '100%', justifyContent: 'center' }}>
                            <Text style={{ color: "#000", fontSize: 22, fontWeight: 'bold' }}>{this.state.detail.branch_name}</Text>
                        </View>
                    </View>
                </Header>
                <Content style={{ backgroundColor: '#F6F6F6' }}>
                    <Tabs
                        initialPage={0}
                        tabBarUnderlineStyle={{ backgroundColor: '#6550C4', borderRadius: 10 }}
                    >
                        <Tab heading={'Happy Hours'} textStyle={{ color: '#384850', fontSize: 13 }} activeTextStyle={{ color: '#6550C4', fontSize: 13, fontWeight: 'bold' }}>
                            <View style={{ padding: 15, flexDirection: 'row', backgroundColor: '#6550C4' }}>
                                <Icon name="clock" style={{ color: "#DEC6F0", fontSize: 60 }} />
                                <View style={{ paddingLeft: 15, paddingTop: 5, flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 22, color: '#FFFFFF', fontWeight: 'bold' }}>{'Happy Hours!'}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 12, marginTop: 5, color: '#FFFFFF', textAlign: 'center' }}>{'Booked '}</Text>
                                        <Text style={{ fontSize: 12, marginTop: 5, color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold' }}>{1002}</Text>
                                        <Text style={{ fontSize: 12, marginTop: 5, color: '#FFFFFF', textAlign: 'center' }}>{' times since yesterday'}</Text>
                                    </View>
                                </View>
                            </View>
                        </Tab>
                        <Tab heading={'About'} textStyle={{ color: '#384850', fontSize: 13 }} activeTextStyle={{ color: '#6550C4', fontSize: 13, fontWeight: 'bold' }}>
                            <View style={{ padding: 15 }}>
                                <Text>{'Ini halaman detail About'}</Text>
                            </View>
                        </Tab>
                        <Tab heading={'Menu'} textStyle={{ color: '#384850', fontSize: 13 }} activeTextStyle={{ color: '#6550C4', fontSize: 13, fontWeight: 'bold' }}>
                            <View style={{ padding: 15 }}>
                                <Text>{'Ini halaman detail Menu'}</Text>
                            </View>
                        </Tab>
                        <Tab heading={'Reviews'} textStyle={{ color: '#384850', fontSize: 13 }} activeTextStyle={{ color: '#6550C4', fontSize: 13, fontWeight: 'bold' }}>
                            <View style={{ padding: 15 }}>
                                <Text>{'Ini halaman detail Reviews'}</Text>
                            </View>
                        </Tab>
                    </Tabs>
                </Content>
                <Toast ref="defaultToastBottom" position="bottom" />
            </Container>
        );
    }
}

export default FoodDetailScreen
