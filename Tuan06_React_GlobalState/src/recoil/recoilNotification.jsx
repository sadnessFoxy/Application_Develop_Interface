import { atom } from "recoil";

export const notificationAtom = atom({
    key: "notificationAtom",
    default: {
        message: "",
        type: "info", // "info", "success", "error"
        visible: false
    }
});
