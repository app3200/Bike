
export const PolicyStatus = ({policyset}) => {
    function setpolicy (e) {
        policyset(e.target.innerText)
    }

    return <div className="policystatus12 yeardivouter2">
        <div className="idYhLj">
            <div className="innerpolicy">
                <div className="innerme" style={{width:"100%"}}>

                </div>
            </div>

            <button className="policybutton1 policybutton2" onClick={setpolicy}>
                <div className="policytext">Policy not expired</div>
            </button>

            <button className="policybutton1 policybutton2" onClick={setpolicy}>
                <div className="policytext">Expired between 90 days</div>
            </button>

            <button className="policybutton1 policybutton2" onClick={setpolicy}>
                <div className="policytext">Expired more than 90 days...</div>
            </button>
        </div>
      
    </div>
    
}