import './index.css'

const Card = props => {
  const {details, click, tog} = props
  const {id, imageUrl} = details
  const alt1 = tog ? 'thumbnail' : 'match'

  const clk = () => {
    click(id)
  }

  console.log(alt1)

  return (
    <>
      <li>
        <button type="button" className="b" onClick={clk}>
          <img src={imageUrl} alt={alt1} className="img" />
        </button>
      </li>
    </>
  )
}
export default Card
