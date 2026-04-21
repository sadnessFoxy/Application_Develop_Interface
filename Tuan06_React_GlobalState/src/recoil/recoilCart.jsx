import { atom, selector } from "recoil";

export const cartAtom = atom({
    key: "cartAtom",
    default: []
});

export const cartStats = selector({
    key: "cartStats",
    get: ({ get }) => {
        const cart = get(cartAtom);
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

        return {
            totalItems,
            totalPrice
        };
    }
});
