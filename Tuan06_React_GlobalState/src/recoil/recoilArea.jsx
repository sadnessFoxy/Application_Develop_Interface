import { atom, selector } from "recoil";

export const widthAtom = atom({
    key: "widthAtom",
    default:0
})
export const heightAtom = atom({
    key: "heightAtom",
    default:0
})
export const areaAtom = selector({
    key:"areaAtom",
    get: ({get}) =>{
        const w = get(widthAtom)
        const h = get(heightAtom)
        return w * h
    }
})