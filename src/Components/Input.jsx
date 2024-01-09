

export default function Input({ id, name, type, placeholder, onChange, value, error }) {
    let className = 'input';
    if(error) {
        className = 'input inputError'
    }
    return (
        <div className={className}>
            <label htmlFor={id}>{name}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} />
            {error && <p className="error">{error}</p>}
        </div>
    )
}