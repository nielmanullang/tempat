import { View } from "native-base";
import React from 'react';
import { Image, StatusBar } from 'react-native';
import { client_id, client_secret, grant_type } from './../../app.json';
import splashscreen from './../assets/images/splashscreen.jpg';
import { apiCall, getAsyncStoreSave, resetNavigation } from './../redux/actions/commonAction';
import endPoint from './../redux/service/endPoint';

class SplashScreen extends React.Component {
    static navigationOptions = { header: null }

    state = {

    }

    componentDidMount = () => {
        setTimeout(() => {
            this._requestLogin()
        }, 500)
    }

    _requestLogin = () => {
        const api = endPoint.login
        const data = {
            grant_type: grant_type,
            client_id: client_id,
            client_secret: client_secret
        }
        const header = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        apiCall.post(api, data, this.responeLogin, header);
    }

    responeLogin = (callback) => {
        console.log('callback', callback);
        if (callback != null && callback.status == 200) {
            let result = callback.data.token_type + ' ' + callback.data.access_token
            getAsyncStoreSave('accessToken', result, () => resetNavigation('HomePage', this.props.navigation))
        }
    }

    render() {
        return (
            <View>
                <StatusBar hidden />
                <Image source={splashscreen} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
            </View>
        );
    }
}

export default SplashScreen
