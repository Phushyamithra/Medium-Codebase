import '../styles/Arrow.css'

export const LeftArrow = ({handleLeftClick}) => {
    return (
    <div className="center-con" onClick={handleLeftClick} >
        <div className="roundLeft">
            {/* <div id="cta"> */}
                <span className="arrow primera next "></span>
                <span className="arrow segunda next "></span>
            {/* </div> */}
        </div>
    </div>
  )
}
export const RightArrow = ({handleRightClick}) => {
    return (
    <div className="center-con" onClick={handleRightClick} >
        <div className="round">
            {/* <div id="cta"> */}
                <span className="arrow primera next "></span>
                <span className="arrow segunda next "></span>
            {/* </div> */}
        </div>
    </div>
  )
}

export default RightArrow;