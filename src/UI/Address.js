
const Address = (props) => {
 let address = props.address;

 const string = " "+ address.id + " ," +  address.houseNo + " ," +address.street + " ,"+address.city + " ," + address.pinCode + " ," +address.state;
  return string;
}

export default Address