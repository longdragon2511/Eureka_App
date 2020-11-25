import {
  ActivityIndicator,
  Button,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import Constants from "expo-constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDispatch } from 'react-redux'

const InputInformation = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [keyword, setKeyword] = useState("");
  const [des, setDes] = useState("");
  const [pickerMode, setPickerMode] = useState(null);
  const [thoigian1, setThoiGian1] = useState(new Date());
  const [thoigian2, setThoiGian2] = useState(new Date());
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [change1, setChange1] = useState(false);
  const [change2, setChange2] = useState(false);

  const refresh = () => {
    setName(null);
    setLink(null);
    setKeyword(null);
    setDes(null);
    setThoiGian1(new Date());
    setThoiGian2(new Date());
  }
  const dispatch = useDispatch()
  var i = 0;
  const fetchData = () => {
    
    if (name === null || link === null || keyword === null || change1 == false) {
      alert("Bạn chưa nhập đủ thông tin!");
    }
    else {
      setLoading(true)
      fetch('http://localhost:5000/campaign/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          description: des,
          startTime: time1,
          endTime: time2,
          email: "0943858308",
          password: "longtoi123",
          links: [
            link
          ],
          keyword: keyword
        })
      })
        .then(
          api2 = setInterval(() => {
            console.log(i);
            i++;
            fetch(`http://localhost:5000/campaign?name=${name}
            `)
            .then(res=>res.json())
            .then(data=>{
                if(data.status==="done")
                {
                  setLoading(false)
                  dispatch({type:"add_campaign",payload:data})
                  clearInterval(api2)
                }
                console.log(data.status)
            })
          }, 10000))
        .then(() => refresh())
        .then(() => navigation.navigate("Repository"))
    }
  }


  const showDatePicker1 = () => {
    setPickerMode("date");
    setClicked1(true);
  };
  const showDatePicker2 = () => {
    setPickerMode("date");
    setClicked2(true);
  };

  const showTimePicker = () => {
    setPickerMode("time");
  };

  const hidePicker = () => {
    setPickerMode(null);
  };

  const handleConfirm = (date) => {
    console.log(date)
    if (clicked1 == true) {
      setThoiGian1(date)
      setClicked1(false)
      setChange1(true)
    }
    else if (clicked2 == true) {
      setThoiGian2(date)
      setClicked2(false)
      setChange2(true)
    }
    hidePicker();
  };
  // var dd = String(thoigian. getDate()). padStart(2, '0');
  // var mm = String(thoigian. getMonth() + 1). padStart(2, '0'); //January is 0!
  // var yyyy = thoigian. getFullYear();
  var dd1 = String(thoigian1.getDate()).padStart(2, '0');
  var mm1 = String(thoigian1.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy1 = thoigian1.getFullYear();
  var dd2 = String(thoigian2.getDate()).padStart(2, '0');
  var mm2 = String(thoigian2.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy2 = thoigian2.getFullYear();
  var time1 = `${yyyy1}-${mm1}-${dd1}`;
  var time2 = `${yyyy2}-${mm2}-${dd2}`;
  return (
    <ImageBackground
      source={require('../../assets/1.png')}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={styles.container}>
        <View style={styles.info}>
          <View style={styles.link}>
            <Text style={styles.name}>Campaign name: </Text>
            <TextInput style={styles.linkInput} underlineColorAndroid="transparent"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.link}>
            <Text style={styles.name}>Description: </Text>
            <TextInput style={styles.linkInput} underlineColorAndroid="transparent"
              value={des}
              onChangeText={(text) => setDes(text)}
            />
          </View>
          <View style={styles.link}>
            <Text style={styles.name}>Link of Facebook Group/Fanpage: </Text>
            <TextInput style={styles.linkInput} underlineColorAndroid="transparent"
              value={link}
              onChangeText={(text) => setLink(text)}
            />
          </View>
          <View style={styles.link}>
            <Text style={styles.name}>Keywords </Text>
            <TextInput style={styles.linkInput} underlineColorAndroid="transparent"
              value={keyword}
              onChangeText={(text) => setKeyword(text)}
            />
          </View>
          {/* <Text>{dd}/{mm}/{yyyy}</Text> */}
          <View style={{ flexDirection: "row", justifyContent: "space-around", width: Dimensions.get("screen").width }}>
            <View style={{ flexDirection: "row", marginTop: 20, height: 60, alignItems: "center" }}>
              <Text style={styles.name}>From: </Text>
              <TouchableOpacity onPress={showDatePicker1}>
                <View style={styles.textInput}>
                  {/* <Text style={styles.textcalendar}>{dd}/{mm}/{yyyy}</Text> */}
                  <Text style={styles.textcalendar}>{time1}</Text>
                  {/* <Text style={styles.textcalendar}>{thoigian1.toDateString()}</Text> */}
                  <AntDesign name="calendar" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20, height: 60, alignItems: "center" }}>
              <Text style={styles.name}>To: </Text>
              <TouchableOpacity onPress={showDatePicker2}>
                <View style={styles.textInput}>
                  {/* <Text style={styles.textcalendar}>{dd}/{mm}/{yyyy}</Text> */}
                  <Text style={styles.textcalendar}>{time2}</Text>
                  {/* <Text style={styles.textcalendar}>{thoigian2.toDateString()}</Text> */}
                  <AntDesign name="calendar" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingTop: 50,justifyContent:"center",alignItems:"center" }}>
            <TouchableOpacity onPress={() => fetchData()}>
              <View style={{ width: 100, height: 50, borderWidth: 4, borderColor: "white", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "700", color: "white" }}>Start</Text>
              </View>
            </TouchableOpacity>
            {loading ? 
            <View style={{justifyContent:"center",alignItems:"center"}}>
                <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" />   
                <Text style={{ fontSize: 18,fontWeight:"700",color:"white"}}>Crawling, please wait....</Text> 
            </View>
             : null}
          </View>
        </View>
      </View>
      <View style={styles.root}>
        <DateTimePickerModal
          isVisible={pickerMode !== null}
          mode={pickerMode}
          onConfirm={handleConfirm}
          onCancel={hidePicker}
        />
      </View>

    </ImageBackground>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width:Dimensions.get("screen").width-20,
    // height:500,
    // backgroundColor:"lightblue",
    justifyContent: "center",
    marginTop:Constants.statusBarHeight
  },
  root: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    // width:Dimensions.get("screen").width-20,
    // height:500,
    alignItems: "center",
  },
  nameWrapper: {
    marginTop: 100,
    flexDirection: "row",
    height: 40,
    alignItems: "flex-end",
  },
  textInput: {
    width: 130,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    fontWeight: "500",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  textcalendar: {
    fontSize: 17,
    fontWeight: "700",
    color: "white"
  },
  name: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  link: {
    marginTop: 15
  },
  linkInput: {
    marginTop: 10,
    width: Dimensions.get("screen").width - 20,
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    fontSize: 24,
    color: "white",
    fontWeight: "500"
  }

});
export default InputInformation;

