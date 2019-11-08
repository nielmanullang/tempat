import { Container, Content, Icon, Text, View } from 'native-base';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import Food from './../components/Item/Food';
import Place from './../components/Item/Place';
import Toast from './../components/Toast';
import { apiCall, getAsyncStoreLoad } from './../redux/actions/commonAction';
import endPoint from './../redux/service/endPoint';

class HomePageSrc extends React.Component {
  static navigationOptions = { header: null }
  state = {
    populerPlace: [
      {
        name: 'Lapangan Futsal Patoenk',
        image: 'https://i0.wp.com/malangtoday.net/wp-content/uploads/2018/11/Lapangan-futsal-Foto-istimewa.jpeg',
        location: 'Gandaria City',
        locationKabupaten: 'Jakarta Selatan',
        jenis: 'Futsal',
        jenisTempat: 'Sports',
        rating: '4.5',
        booked: 1002,
        points: [
          {
            time: '09:00-12:00',
            discount: 10
          },
          {
            time: '12:00-16:30',
            discount: 40
          },
          {
            time: '16:30-22:00',
            discount: 50
          }
        ]
      },
      {
        name: 'Salon Kecantikan ',
        image: 'https://1.bp.blogspot.com/-1OsADMUYNVs/WGSX2k9PDqI/AAAAAAAALiI/Pd__h-VYrKEY8uFTIOTGaLGa2UUR2g52QCLcB/s1600/bitebrands-jenis-macam-beauty-hair-salon-kecantikan-barbershop-kapster-05.jpg',
        location: 'Setiabudi',
        locationKabupaten: 'Jakarta Selatan',
        jenis: 'Salon',
        jenisTempat: 'Beauty',
        rating: '5.0',
        booked: 1003,
        points: [
          {
            time: '09:00-12:00',
            discount: 5
          },
          {
            time: '12:00-16:30',
            discount: 30
          },
          {
            time: '16:30-22:00',
            discount: 60
          }
        ]
      },
    ],
    accessToken: null,
    foodUpdate: []
  }

  componentDidMount = () => {
    getAsyncStoreLoad('accessToken', this.getAccessToken);
  }

  getAccessToken = (accessToken) => {
    this.setState({ accessToken }, () => { this.getFoodUpdate(accessToken) })
  }

  getFoodUpdate = (accessToken) => {
    const api = endPoint.search;
    const header = {
      headers: {
        'Authorization': accessToken,
        'Content-Type': 'application/json'
      },
      params: {
        'page': 1,
        'class': 'provinsi',
        'idx': 11,
        'per_page': 10,
        'query': 'coffee',
      }
    }
    apiCall.get(api, header, this.responeFoodUpdate)
  }

  responeFoodUpdate = (callback) => {
    console.log('callback', callback);
    if (callback != null && callback.data.status == true) {
      let foodUpdate = callback.data.data
      this.setState({ foodUpdate })
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

  _actionDetailFood = (data) => {
    console.log('data', data);
    this.props.navigation.navigate('FoodDetail', { data: data._source.slug })
  }

  _actionBookNowFood = () => {
    this.refs.defaultToastBottom.ShowToastFunction('action book now');
  }

  render() {
    return (
      <Container>
        <Content>
          <View>
            <View>
              <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>{'Deals of The Day'}</Text>
                <TouchableOpacity
                  onPress={() => this._seeAll()}
                  style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#7D6FCA', fontSize: 18, fontWeight: 'bold' }}>{'SEE ALL '}</Text>
                  <Icon type="FontAwesome" name="angle-right" style={{ color: '#7D6FCA' }} />
                </TouchableOpacity>
              </View>
              <View horizontalRow horizontal={true} style={{ paddingLeft: 15 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                  {this.state.foodUpdate.map((data, i) => {
                    return <Food
                      key={i}
                      item={data}
                      _actionDetail={this._actionDetailFood}
                      _actionBookNow={this._actionBookNowFood}
                    />
                  })}
                </ScrollView>
              </View>
            </View>
            <View>
              <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>{'Populer Places in Jakarta'}</Text>
                <TouchableOpacity
                  onPress={() => this._seeAll()}
                  style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#7D6FCA', fontSize: 18, fontWeight: 'bold' }}>{'SEE ALL '}</Text>
                  <Icon type="FontAwesome" name="angle-right" style={{ color: '#7D6FCA' }} />
                </TouchableOpacity>
              </View>
              <View horizontalRow horizontal={true} style={{ paddingLeft: 15 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                  {this.state.populerPlace.map((data, i) => {
                    return <Place
                      key={i}
                      item={data}
                      _actionDetail={this._actionDetail}
                      _actionBookNow={this._actionBookNow}
                    />
                  })}
                </ScrollView>
              </View>
            </View>
          </View>
        </Content>
        <Toast ref="defaultToastBottom" position="bottom" />
      </Container>
    );
  }
}

export default HomePageSrc
