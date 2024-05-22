export const LeftArrow = ({handleLeftClick}) => {
    return (
    <div class="center-con" onClick={handleLeftClick} >
        <div class="roundLeft">
            {/* <div id="cta"> */}
                <span class="arrow primera next "></span>
                <span class="arrow segunda next "></span>
            {/* </div> */}
        </div>
    </div>
  )
}
export const RightArrow = ({handleRightClick}) => {
    return (
    <div class="center-con" onClick={handleRightClick} >
        <div class="round">
            {/* <div id="cta"> */}
                <span class="arrow primera next "></span>
                <span class="arrow segunda next "></span>
            {/* </div> */}
        </div>
    </div>
  )
}

export default RightArrow;