import axios from "axios";
import Config from "react-native-config";
const access_token=Config.API_KEY;
const getOrderList = (days) => {
    return dispatch => {
    axios.get(`https://staging.fastor.in/v1/web/orders?pass=demopass&days=${days}`, {
        headers: {
          "Authorization": `Bearer ${access_token}`,
        },
      })
      .then(res => {
          return res.data;
      })
      .then(data => {
        dispatch({
            type: "GET_ORDERS",
            payload: data["data"]
        })
    })
      .catch(error => {
        console.error(error);
      });
    }
}


export {getOrderList};