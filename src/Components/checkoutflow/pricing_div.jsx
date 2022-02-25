export const Pricingdiv=({price}) => {
    return(
        <div style={{width:"100%"}}>
        <div className="bike_logo_price">
            <div className="bike_logo_div_flex">
                <div style={{width:"fit-content"}}>
                <p className="third_party_text">Third Party Plan</p>
                <p className="bike_full_name">For your Bajaj Pulsar 150</p>
                </div>
                <svg width="145" height="104" viewBox="0 0 145 104" fill="none" className="bike_svg_logo"><path d="M114.683 21.367c5.667 0 10.26-4.594 10.26-10.26 0-5.667-4.593-10.261-10.26-10.261s-10.261 4.594-10.261 10.26c0 5.667 4.594 10.261 10.261 10.261z" fill="#FFF1E2"></path><path d="M.502 103.101H144.5s-6.928-31.966-23.064-37.14c-16.137-5.174-31.484 23.196-53.057-25.213C43.21-15.64.195 14.088.502 103.101z" fill="#E4F6FE"></path><path d="M40.185 102.881c8.989-.35 16.18-9.997 16.18-21.485 0-11.489-7.191-20.697-16.18-20.522l-4.824.088v42.139l4.824-.22z" fill="#0B0E34"></path><path d="M18.217 82.536c0-11.752 7.454-21.398 16.574-21.574 9.033-.175 16.268 9.033 16.268 20.565 0 11.532-7.235 21.179-16.268 21.53-9.164.394-16.574-8.814-16.574-20.521z" fill="#343758"></path><path d="M24.925 82.316c0-7.147 4.43-13.067 9.823-13.198 5.393-.132 9.734 5.525 9.734 12.585 0 7.06-4.341 12.979-9.734 13.198-5.394.22-9.822-5.437-9.822-12.585z" fill="#B0B1C4"></path><path d="M32.818 85.123c-1.315-.702-1.842-2.324-1.14-3.64l7.366-14.163c.702-1.315 2.325-1.841 3.64-1.14 1.315.702 1.842 2.324 1.14 3.64l-7.366 14.163c-.702 1.315-2.325 1.797-3.64 1.14zM96.968 35.31c-.438 0-.877-.13-1.227-.438-.746-.657-.834-1.797-.132-2.499l4.166-4.429c1.096-1.184 2.674-1.797 4.297-1.797l5.656.087c1.009 0 1.798.833 1.798 1.798 0 .965-.833 1.754-1.842 1.754h-.043l-5.657-.044c-.57.044-1.096.22-1.491.658l-4.121 4.428c-.395.307-.921.483-1.404.483zM110.868 76.923c-1.403.57-2.981-.088-3.551-1.447L96.311 47.808l5.086-2.149 11.006 27.8c.57 1.316-.131 2.894-1.535 3.464z" fill="#343758"></path><path d="M63.03 49.123c-.132 6.051-11.488 7.367-16.531 6.183-4.034-.921-10.743-1.973-13.33-2.412a5.728 5.728 0 00-3.42.526c-1.491.746-3.42 2.368-5.087 5.7-.964 1.974 1.097 4.035 3.245 3.245 2.324-.877 5.218-1.359 8.42-.482 5.436 1.403 8.637 5.042 10.523 11.927 1.315 4.823 2.28 9.252 3.508 10.48 3.069 3.025 26.703 2.104 28.983 1.403 2.237-.702 11.577-39.99 11.577-39.99l-27.888 3.42z" fill="#F75276"></path><path d="M90.917 45.747c-1.754 6.007-11.576 39.99-11.576 39.99s7.235-.351 9.296-1.404c5.7-2.894 12.585-38.718 12.585-38.718l-10.305.132z" fill="#0B0E34"></path><path d="M63.03 49.123s1.008 7.016 14.119 5.35l-3.113 12.54c-1.053 4.297-5.13 7.367-9.779 7.367l-17.276.088c1.228 4.56 2.149 8.638 3.333 9.822 3.07 3.025 26.703 2.104 28.983 1.403 2.237-.702 11.577-39.99 11.577-39.99l-27.844 3.42z" fill="#E50031"></path><path d="M90.917 45.747l-2.937-9.384s-7.192-1.93-13.637.088c-6.49 2.017-11.182 6.62-11.313 12.672 0 0 .263 7.367 27.887-3.376z" fill="#F75276"></path><path d="M110.474 102.925c8.77-.394 15.873-10.173 15.873-21.88 0-11.708-7.06-21.047-15.873-20.916l-4.736.088V103.1l4.736-.176z" fill="#0B0E34"></path><path d="M88.9 82.185c0-11.97 7.323-21.793 16.224-21.968 8.858-.176 15.961 9.208 15.961 20.96 0 11.75-7.103 21.573-15.961 21.967-8.9.351-16.224-9.032-16.224-20.96z" fill="#343758"></path><path d="M95.522 81.966c0-7.28 4.34-13.287 9.646-13.418 5.262-.132 9.515 5.612 9.515 12.847 0 7.236-4.253 13.243-9.515 13.418-5.306.175-9.647-5.569-9.647-12.847z" fill="#B0B1C4"></path><path d="M106.045 85.035c-1.403.57-3.026-.088-3.552-1.447l-10.48-26.221c-.35-.921-.175-1.93.483-2.675 1.36-1.579 3.946-1.184 4.736.702l10.435 26.177c.483 1.316-.219 2.894-1.622 3.464z" fill="#343758"></path><path d="M100.432 30.882s-8.989-2.5-12.716 4.473c-3.77 6.972 2.28 15.259 12.716 13.9V30.882z" fill="#F75276"></path><path d="M107.799 40.003c0 5.042-3.288 9.164-7.366 9.252-4.078.043-7.41-4.035-7.41-9.12 0-5.087 3.332-9.21 7.41-9.253 4.078 0 7.366 4.078 7.366 9.12z" fill="#FF92AC"></path><path d="M106.264 39.827c0 3.903-2.236 7.06-5.042 7.104-2.806.044-5.043-3.113-5.043-7.016 0-3.902 2.28-7.06 5.087-7.103 2.762 0 4.998 3.157 4.998 7.015z" fill="#fff"></path><path d="M87.716 35.88c-.482 0-1.008-.175-1.359-.525l-2.894-2.894c-1.36-1.36-3.289-2.149-5.262-2.149h-5.963c-1.053 0-1.886-.79-1.886-1.798s.833-1.797 1.886-1.797H78.2c3.026 0 5.92 1.184 7.98 3.244l2.895 2.894a1.762 1.762 0 01-.044 2.544c-.395.306-.833.482-1.316.482zM63.03 49.123s-6.358 0-8.025-.965c-1.666-.964-13.943-3.025-21.748-1.797 0 0-3.728.57-3.99 1.447-.264.877-1.58 5.832-.834 6.533.746.658 17.452 2.236 18.636 2.412 1.14.131 13.637.482 16.881-5.657-.043 0-.394-.526-.92-1.973z" fill="#343758"></path><path d="M109.114 57.323L91.4 59.033c-.439.044-.79-.22-.877-.614l-.439-1.842c-.131-.482.263-.964.746-1.008l17.714-1.666c.395-.044.79.219.877.613l.395 1.798a.808.808 0 01-.702 1.009z" fill="#FFE9EE"></path></svg>
            </div>

            <div className="pricing_div">
                <div className="title_price_flex_div">
            <p className="pricing_div_title">Third Party Cover</p>
            <p className="pricing_div_price">₹ {price}</p>
            </div>
            

            <div className="title_price_flex_div">
            <p className="pricing_div_title">Net Premium</p>
            <p className="pricing_div_price">₹ {price}</p>
            </div>

            <div className="title_price_flex_div">
            <p className="pricing_div_title">GST</p>
            <p className="pricing_div_price">₹ {(price*18)/100}</p>
            </div>
        </div>
        
            <div className="total_price_show_div">
              <p className="total_text_style">TOTAL</p>
              <p className="total_text_value_style">₹ {price}</p>
            </div>
        </div>
    </div>

    )
}