import { AppUserAuth } from './app-user-auth';

export const LOGIN_MOCKS : AppUserAuth [] = [
{
    userName:"lll",
    bearerToken : "abi393kdkd9393ikd",
    isAuthenticated:true,
    canAccessCategories:true,
    canAccessProducts:true,
    canSaveProduct:true,
    canAddProducts : true,
    canAddCategory:false
},
{
    userName:"qingqing",
    bearerToken : "sa9f923k3kdmcjkhd",
    isAuthenticated:true,
    canAccessCategories:true,
    canAccessProducts:false,
    canSaveProduct:false,
    canAddProducts : false,
    canAddCategory:false
}
]