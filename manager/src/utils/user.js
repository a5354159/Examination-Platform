import Cookie from 'js-cookie';

const key = 'authorization';
// 获取token
export function getToken(){
  return Cookie.get(key)
}

// 设置token
export function setToken(value){
  Cookie.set(key, value, {expires: 7})
}


const UserData = "UserData";
//获取UserData 
export const getUserData = () => {
	const data=Cookie.get(UserData);
	return data?JSON.parse(data):'';
};

//设置UserData
export const setUserData = value => Cookie.set(UserData, value, { expires: 7 });
