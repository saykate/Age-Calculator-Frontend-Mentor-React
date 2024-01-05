

export default function Inputs({ id, name, type, placeholder, onChange, value, errorText, error }) {
    return (
        <div className="input">
            <label htmlFor={id}>{name}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} />
            {error && <p className="error">{errorText}</p>}
        </div>
    )
}