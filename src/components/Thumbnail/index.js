import './index.css'

const Thumb = props => {
  const {tdet, index} = props
  const {thumbnailUrl, id, category} = tdet
  return (
    <li>
      <img
        src={tdet[index].thumbnailUrl}
        alt={tdet[index].category}
        className="mainimg"
      />
    </li>
  )
}
export default Thumb
