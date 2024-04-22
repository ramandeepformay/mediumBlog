
interface buttonType{
    label: string,
    onClick: () => void
}

const Button = ({label, onClick}: buttonType) =>{
    return <div>
        <input type="button" value={label} className="text-center w-full border bg-black text-white py-2 rounded-md cursor-pointer" onClick={onClick}/>
    </div>

}

export default Button;