const InputField = (props) => {

    return (
        <div>
            <input
            type="text" 
            value={props.text}
            onChange={(e) => props.setText(e.target.value)}
            className='border-black border-2 rounded p-2 w-72 sm:w-96 mb-4' 
            placeholder='Type here...' />
        </div>
    )
}

export default InputField
