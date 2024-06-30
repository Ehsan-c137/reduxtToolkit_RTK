export const Getsubtotal = (cartList)=>{
    return cartList.reduce((acc,cur)=>{
        acc += (cur.total)
        return acc
    },0)
}