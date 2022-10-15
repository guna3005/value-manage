
const Address = (props) => {
 let address = props.address;
 if (address === null ){
  return ""
 }
 const string = " "+ address.id   + " ," +  (address.houseNo  ? address.houseNo  + " ," : "" )  + (address.street ? address.street + " ,": "")
  +(address.city ? address.city + " ," : "")+ (address.pinCode ? address.pinCode + " ," : "") +(address.state ? address.state : "");
  return string;
}

export default Address