const DeleteButton = (props) => {

    const handleDelete = () => {
        if(props.text === "") alert("Can't find any text to clear")
        props.setText((prev) =>  prev.slice(0,-1))
    }

    return (
        <button 
        onClick={handleDelete}
        className="bg-zinc-900 focus:bg-red-600 flex flex-col items-center rounded w-80 sm:w-96 m-2 p-2 text-white">
            backspace    
        </button>
    )
}

export default DeleteButton