import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
    PieChart,
} from 'react-native-chart-kit';
import React from 'react';

// import all the components we are going to use


//import React Native chart Kit for different kind of Chart

const ChartLine = (props) => {
  const pos=props.pos;
  const neu=props.neu;
  const neg=props.neg;
    return (
      <>
        <PieChart
          data={[
            {
              name: 'Bình luận tích cực',
              population:pos,
              color: '#2ECC40',
              legendFontColor: '#7F7F7F',
              legendFontSize: 13,
            },
            {
              name: 'Bình luận trung tính',
              population:neu,
              color: '#0074D9',
              legendFontColor: '#7F7F7F',
              legendFontSize: 13,
            },
            {
              name: 'Bình luận tiêu cực',
              population:neg,
              color: '#FF4136',
              legendFontColor: '#7F7F7F',
              legendFontSize: 13,
            }
          ]}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="0"
          absolute //for the absolute number remove if you want percentage
        />
      </>
    );
  };
  const styles = StyleSheet.create({
    header: {
      color:"white",
      textAlign: 'center',
      fontSize: 18,
      padding: 16,
      marginTop: 16,
    },
  });
export default ChartLine;

