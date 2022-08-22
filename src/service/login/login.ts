import LoginRequest from '../index'
import { ILoginOptions, IDataType, ILoginResult } from './type'
enum LoginApi {
  AccountLogin = '/login'
}
export function accountLoginRequest(data:ILoginOptions){
  return LoginRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data
  })
}
// export function requestUserInfo(id:number){
//   return LoginRequest.get<IDataType<ILoginResult>>({
//     url: LoginApi.AccountLogin,
//     data
//   })
// }

