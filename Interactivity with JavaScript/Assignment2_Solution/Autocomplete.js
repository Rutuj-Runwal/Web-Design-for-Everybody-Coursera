function billingFunction(){
  if(document.getElementById('same').checked){
    document.getElementById('billingZip').value = document.getElementById('shippingZip').value;
    document.getElementById('billingName').value = document.getElementById('shippingName').value;
  }
  else{
    document.getElementById('billingName').value = "";
    document.getElementById('billingZip').value = "";
  }
}