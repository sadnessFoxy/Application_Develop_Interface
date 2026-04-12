import { atom } from "recoil";

export const recoilUser = atom({
    key:"recoilUser",
    default:{
        name :null,
        status : false
    }
})