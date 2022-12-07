import create from 'zustand';
import { persist } from 'zustand/middleware';

const useCart = create(
    persist(
        (set, get) => ({

            total: 0,
            totalqty: 0,
            cartContent: [],

            addTocart: (params: { price: string; }) => {
                set((state: { totalqty: number; total: number; cartContent: any; }) => ({
                    totalqty: state.totalqty + 1,
                    total: state.total + parseFloat(params.price),
                    cartContent: [...state.cartContent, params],
                }));
            },

            updatecart: ({ params, mycart }: any) => {
                set((state: { totalqty: number; total: number; }) => ({
                    totalqty: state.totalqty + 1,
                    total: state.total + parseFloat(params.price),
                    cartContent: mycart,
                }));
            },

            updateQuantity: (params: any) =>
                set((state: any) => ({
                    totalqty: state.totalqty + params.quantity,
                    total: state.total + params.price * params.quantity,
                    cartContent: () => {
                        const product = state.cartContent.findIndex((item: any) => item.id === params.id)
                        product != -1 ? state.cartContent[product].quantity = params.quantity : ''
                        return state.cartContent
                    },
                })

                ),

            clearCart: () => set({ totalqty: 0, total: 0, cartContent: [] }),

            removeFromCart: (params: { price: number; quantity: number; id: any; }) =>
                set((state: { total: number; totalqty: number; cartContent: any[]; }) => ({
                    total: state.total - params.price * params.quantity,
                    totalqty: state.totalqty - params.quantity,
                    cartContent: state.cartContent.filter(
                        (item: { id: any; }) => item.id !== params.id
                    ),
                })),
        }),
        { name: 'cart' }
    )
);
export default useCart;
