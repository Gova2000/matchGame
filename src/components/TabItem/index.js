import './index.css'

const Tab = props => {
  const {Item, isactive, kik} = props
  const {tabId, displayText} = Item

  const acti = () => {
    kik(tabId)
  }

  const active = isactive ? 'active' : ''

  return (
    <>
      <li>
        <button type="button" className={active} onClick={acti}>
          {displayText}
        </button>
      </li>
    </>
  )
}
export default Tab
