import React, { useEffect, useState } from 'react';
import { View,Text,Dimensions,SafeAreaView, Image,StyleSheet,FlatList} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderList } from '../../auth/action';
const width=Dimensions.get("window").width;

export default function History(props){

    const [open, setOpen] = useState(false);
  const [value, setValue] = useState("30");
  const [items, setItems] = useState([
    {label: 'Last 30 Days', value: '30',icon: () => <Image source={require('../../../assets/images/filter.png')} style={styles.iconStyle} />},
    {label: 'Last 7 Days', value: '7',icon: () => <Image source={require('../../../assets/images/filter.png')} style={styles.iconStyle} />},
    {label: 'Today', value: '0',icon: () => <Image source={require('../../../assets/images/filter.png')} style={styles.iconStyle} />}
  ]);

  const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const dispatch=useDispatch();
  const user=useSelector(state=>state.user);

  useEffect(()=>{
        dispatch(getOrderList(value))
  },[value])

  const renderItem = ({item,index}) => {
        let mon=item.timestamp.substring(5,7);
        let date=item.timestamp.substring(8,10);
        let time=item.timestamp.substring(11,16);
        let status=item.status=="PROCESSING"?"APP":"POS"
        let imglink=item.status=="PROCESSING"?require('../../../assets/images/check.png'):require('../../../assets/images/reload.png');
        let COLOR=item.status=="PROCESSING"?"#009F00":"#FF8300"
    return(
        <View style={styles.flatl}>
        <View style={styles.ordercon}>
        <Text style={styles.orderid}>#{item.order_id}</Text>
        <Text style={styles.ordertime}>{month[Number(mon)-1]} {date} at {time} | {item.f_order_items.length} {item.f_order_items.length>1?"items":"item"}</Text>
        </View>
        <View style={styles.paymentcon}>
        <Text style={styles.total}>&#8377; {(item.grand_total/100).toFixed(2)}</Text>
        <View>
        <Image style={styles.img} source={imglink}/>
        <Text style={[styles.statustext,{color:COLOR}]}>{status}</Text>
        </View>
        </View>
        </View>
    )
  }

    return (
        <SafeAreaView style={styles.container}>
        <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.filtercon}
      showArrowIcon={false}
      dropDownContainerStyle={{backgroundColor:"#00CFFF",marginHorizontal:15,width:"50%"}}
      textStyle={{color:"white",fontFamily:"Ubuntu-Light",fontWeight:"500",left:"20%"}}
    />
    <FlatList
        data={user.data}
        renderItem={renderItem}
        keyExtractor={(item,index)=>{item.order_id.toString()}}
        style={{flex:1,marginHorizontal:10}}
    />
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({

    container:{
        flex:1,
    },
    filtercon:{
        alignSelf:"center",
        marginHorizontal:15,
        marginVertical:10,
        height:40,
        width:"50%",
        borderWidth:0,
        backgroundColor:"#00CFFF"
    },
    iconStyle:{
        height:20,
        width:20,
        
    },
    flatl:{
        backgroundColor:"#DEDEDE",
        marginBottom:10,
        flexDirection:"row",
        flex:1,
        borderRadius:10
    },
    ordercon:{
        padding:15,
        flex:0.65
    },
    orderid:{
        fontFamily:"Ubuntu-Bold",
        fontSize:17,
        marginBottom:7
    },
    ordertime:{
        fontFamily:"Ubuntu-Light",
        fontWeight:"500",
        color:"#7E7E7E"
    },
    paymentcon:{
        flex:0.35,
        flexDirection:"row",
        padding:15,
        justifyContent:"space-between"
    },
    total:{
        fontFamily:"Ubuntu-Bold",
    },
    img:{
        height:20,
        width:20,
        marginBottom:5
    },
    statustext:{
        fontFamily:"Ubuntu-Medium",
        fontWeight:"500",
    }
})