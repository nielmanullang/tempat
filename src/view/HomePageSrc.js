import { Container, Content, Icon, Text, View } from 'native-base';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import Food from './../components/Item/Food';
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
        jenisTempat: 'Restaurant'
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
                <Text style={{ color: '#000', fontSize: 22, fontWeight: 'bold' }}>{'Deals of The Day'}</Text>
                <TouchableOpacity
                  onPress={() => this._seeAll()}
                  style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#7D6FCA', fontSize: 20, fontWeight: 'bold' }}>{'SEE ALL '}</Text>
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
          </View>
        </Content>
        <Toast ref="defaultToastBottom" position="bottom" />
      </Container>
    );
  }
}

export default HomePageSrc
