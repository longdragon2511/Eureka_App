import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';
import {
  StackedBarChart,
} from 'react-native-chart-kit';

// import all the components we are going to use


//import React Native chart Kit for different kind of Chart

const CircleChart = () => {
    return (
      <>
        <StackedBarChart
        //   data={[
        //     {
        //       name: 'Campaign 1',
        //       population: 21500000,
        //       color: '#4881ea',
        //       legendFontColor: '#7F7F7F',
        //       legendFontSize: 15,
        //     },
        //     {
        //       name: 'Campaign 2',
        //       population: 2800000,
        //       color: '#20b2aa',
        //       legendFontColor: '#7F7F7F',
        //       legendFontSize: 15,
        //     },
        //     // {
        //     //   name: 'New York',
        //     //   population: 8538000,
        //     //   color: '#ffffff',
        //     //   legendFontColor: '#7F7F7F',
        //     //   legendFontSize: 15,
        //     // },
        //     {
        //       name: 'Campaign 3',
        //       population: 11920000,
        //       color: '#fafad2',
        //       legendFontColor: '#7F7F7F',
        //       legendFontSize: 15,
        //     },
        //   ]}
        //   width={Dimensions.get('window').width - 16}
        //   height={220}
        //   chartConfig={{
        //     backgroundColor: '#1cc910',
        //     backgroundGradientFrom: '#eff3ff',
        //     backgroundGradientTo: '#efefef',
        //     decimalPlaces: 2,
        //     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        //     style: {
        //       borderRadius: 16,
        //     },
        //   }}
        //   style={{
        //     marginVertical: 8,
        //     borderRadius: 16,
        //     backgroundColor:"#B2E289"
        //   }}
        //   accessor="population"
        //   backgroundColor="transparent"
        //   paddingLeft="5"
        // //   absolute //For the absolute number else percentage
        // />
        data={{
          labels: ['Strategy 1', 'Strategy 2','Strategy 3'],
          legend: ['Positive', 'Medium', 'Negative'],
          data: [[60, 60, 60], [30, 30, 60],[60, 30, 60]],
          barColors: ['#2ECC40', '#0074D9', '#FF4136'],
        }}
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
          borderRadius: 12,
          alignItems:"center"
        }}
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
export default CircleChart;

