

export const ADD_ITEM="ADD_ITEM"
export const ADD_ONE="ADD_ONE"
export const MINUS_ONE="MINUS_ONE"
export const DELETE_ITEM="DELETE_ITEM"
export const addItem=(item)=>({
type :ADD_ITEM,
payload :item
})
export const addOne=(item)=>({
    type :ADD_ONE,
    payload :item
    })
    export const minusOne=(item)=>({
        type :MINUS_ONE,
        payload :item
        });
        export const deleteItem=(item)=>({
            type :DELETE_ITEM,
            payload :item
            })