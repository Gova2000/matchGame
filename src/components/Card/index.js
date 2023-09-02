import './index.css'

const Card = props => {
  const {details, click} = props
  const {id, imageUrl} = details
  const clk = () => {
    click(id)
  }

  return (
    <>
      <li>
        <button type="button" className="b">
          <img src={imageUrl} alt="match" className="img" onClick={clk} />
        </button>
      </li>
    </>
  )
}
export default Card
