const Input = (props) => {
    const { label, id, name, className, readonly, ...extraProps } = props;
    return (
        <div className="inline-flex flex-col">
            {
                label && (
                    <label className="text-sm font-bold" htmlFor={id || name}>{label}</label>
                )
            }
            <input
                readOnly={readonly}
                id={id || name}
                name={name}
                className={`${className} border border-gray-400 rounded-lg px-2 py-1 text-lg text-black`}
                {...extraProps}
            />
        </div>
    )
}

export default Input