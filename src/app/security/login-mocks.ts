import { AppUserAuth } from './app-user-auth';

export const LOGIN_MOCKS : AppUserAuth [] = [
{
    userName:"jianzhao",
    bearerToken : "aba",
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
},
{
    userName:"john",
    bearerToken : "sa9f923k3kdmcjkhd",
    isAuthenticated:true,
    canAccessCategories:true,
    canAccessProducts:true,
    canSaveProduct:true,
    canAddProducts : true,
    canAddCategory:true
}
] 