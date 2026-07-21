export default function SectionHeader({ number, heading, intro }) {
  return (
    <div className="section-header">
      <p className="section-number">{number}</p>
      <div>
        <h2>{heading}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  )
}
