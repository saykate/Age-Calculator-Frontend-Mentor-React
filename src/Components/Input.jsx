

export default function Input({ id, name, type, placeholder, onChange, value, error }) {
    return (
        <div className="input">
            <label htmlFor={id}>{name}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} />
            {error && <p className="error">{error}</p>}
        </div>
    )
}