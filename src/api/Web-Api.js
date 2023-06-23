const url = "https://backend-1723.onrender.com";
const apiPoint = {
  PRODUCT_LIST: url+"/product/recent-product",
  PRODUCT_DATA: url+"/product/list",
  CATEGORY_LIST: url+"/category/list",
  USER_CONTACT: url+"/contactUser/contact",
  USER_SIGNIN: url+"/user/signin",
  USER_SIGNUP: url+"/user/signup",
  SELLER_POST: url+'/sell/sellproduct',
  SOLD_POST: url+'/sold/soldproduct',
  SELLER_PRODUCT: url+"/sell/fetch-sell",
  PRODUCT_BY_CATEGORY: url+"/product/searchCategory",
  USER_CHECK : url+'/user/checkUser',
  FORGOTT_PASSWORD: url+'/user/updatePassword',
  USER_SMS: url+'/smsUser/sms',
  PRICE: url+'/product/price',
  REQUEST_SAVE : url +'/request/saveRequest',
  REQUEST_GET : url +'/request/getRequest',
  SUBSCRIPTION_ADD: url+'subscription/addSubscription'

};


  export default apiPoint;



