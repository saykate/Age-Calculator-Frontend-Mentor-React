

export default function Outputs({ text, outputs }) {
    return (
        <p className="outputs"><span>{!outputs ? "--" : outputs}</span>{text}</p>
    )
}