function DecorCircle(props) {
    return (
        <div className={`rounded-full bg-cyan-100 h-72 w-72 absolute opacity-40 ${props.className} -z-[1] animate-[float_4s_ease-in-out_infinite]`}></div>
    );
}

export default DecorCircle;