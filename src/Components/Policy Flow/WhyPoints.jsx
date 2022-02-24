export const WhyPoints = ({e}) => {
    return (
        <div className="whypoints">
            <div id="logo">
                <img src={e.imglogo} alt="logo"></img>

            </div>
            <div id="reasonfor">
                <h5>{e.title}</h5>
                <p >{e.about}</p>
                <br/>
            </div>
            
        </div>
    )
}