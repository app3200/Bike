export const Cards=()=>{
    return (
        <div className="innerrightdiv">
            <div className="payment_text_flexdiv">
                <img onClick={()=>{
                    
                }} src="https://container-app.ackoassets.com/am/myaccount_frontend/fa93e5ad221e98f3065baab21e06237f.svg" className="left_side_arrow"/>
                <p >Save Cards</p>
                </div>
            <div className="card_center">
            <div className="card">
                <img src="	https://container-app.ackoassets.com/am/myaccount_frontend/33478911bdeae1c59bbed5b97c291a47.svg" alt="save cards"/>
                <p className="card_text">You have no cards saved!</p>
                <p className="card_text2">Manage your saved cards here</p>
            </div>
            </div>
        </div>
    )
}