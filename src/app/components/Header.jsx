
const Header = ({openCart, items, ...props}) => {
  return (
    <div {...props} className="h-[100px] bg-yellow-600 flex justify-center">
       <div className="flex items-center justify-end w-[1140px]">
            <button onClick={openCart} className="border-white border-[1px] py-2 px-4 text-xl flex">Cart ({items.length})</button>
       </div>
    </div>
  )
}

export default Header