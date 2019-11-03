import { Container, Content, Icon, Text, View } from 'native-base';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import Food from './../components/Item/Food';
import Place from './../components/Item/Place';
import Toast from './../components/Toast';

class HomePageSrc extends React.Component {
  static navigationOptions = { header: null }
  state = {
    dealsOfTheDay: [
      {
        name: 'Gyukaku Buffet',
        image: 'https://b.zmtcdn.com/data/pictures/5/18266425/5bdee9f92897a61a1f6acb4eee023771.jpg',
        location: 'Gandaria City',
        locationKabupaten: 'Jakarta Selatan',
        masakan: 'Grill, Japannesse',
        jenisTempat: 'Restaurant',
        rating: '5.0',
      },
      {
        name: 'Hanamasa',
        image: 'https://i.ytimg.com/vi/_kaAjarpYGw/maxresdefault.jpg',
        location: 'Setiabudi',
        locationKabupaten: 'Jakarta Selatan',
        masakan: 'Grill, Japannesse',
        jenisTempat: 'Work',
        rating: '4.5',
      },
    ],
    populerPlace: [
      {
        name: 'Lapangan Futsal Patoenk',
        image: 'https://i0.wp.com/malangtoday.net/wp-content/uploads/2018/11/Lapangan-futsal-Foto-istimewa.jpeg',
        location: 'Gandaria City',
        locationKabupaten: 'Jakarta Selatan',
        jenis: 'Futsal',
        jenisTempat: 'Sports',
        rating: '4.5',
      },
      {
        name: 'Salon Kecantikan ',
        image: 'https://1.bp.blogspot.com/-1OsADMUYNVs/WGSX2k9PDqI/AAAAAAAALiI/Pd__h-VYrKEY8uFTIOTGaLGa2UUR2g52QCLcB/s1600/bitebrands-jenis-macam-beauty-hair-salon-kecantikan-barbershop-kapster-05.jpg',
        location: 'Setiabudi',
        locationKabupaten: 'Jakarta Selatan',
        jenis: 'Salon',
        jenisTempat: 'Beauty',
        rating: '5.0',
      },
    ]
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
                  {this.state.dealsOfTheDay.map((data, i) => {
                    return <Food
                      key={i}
                      item={data}
                      _actionDetail={this._actionDetail}
                      _actionBookNow={this._actionBookNow}
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
