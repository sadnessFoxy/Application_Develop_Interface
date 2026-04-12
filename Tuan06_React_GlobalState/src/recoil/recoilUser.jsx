import { atom } from "recoil";

export const recoilUser = atom({
    key:"recoilUser",
    default:{
        userName : "Nguyen Le Anh Thu",
        phoneNumber : "0909047432",
        email : "anhthunguyenle0702@gmail.com"
    }
})