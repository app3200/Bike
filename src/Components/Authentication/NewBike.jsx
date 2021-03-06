import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Vehicleadd } from "../../ReduxStore/actions";
import "./newbike.css";
export function NewBike() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return (
    <div style={{ margin: "0px" }}>
      <div style={{ display: "flex", marginLeft: "30px" }}>
        <div className="rightdiv">
          <p className="fdjYTU">Bike insurance starting at ₹499*</p>
          <p className="sc-jDwBTQ sc-ktHwxA bIPMSu">
            Get an exclusively low price on your Bike Insurance
          </p>
          <div className="inpdiv iZUDqT">
            <div className="iZUDqT">
              <input
                onInput={(e) => {
                  setText(e.target.value);
                }}
                placeholder="Enter your bike number e.g MH02L9876"
                className="sc-btzYZH laKrMq"
              />
              <Link to="/selectbike">
                <div
                  onClick={() => {
                    dispatch(Vehicleadd({ vehicle_no: text }));
                  }}
                  className="sc-lhVmIH hKJHbj"
                >
                  <span style={{ color: "white" }}>Insure Now</span>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' version='1.1' width='512' height='512' x='0' y='0' viewBox='0 0 492.004 492.004' style='enable-background:new 0 0 512 512' xml:space='preserve' className=''%3E%3Crect width='492.004' height='492.004' fill='%2337c87e' shape='square' transform='matrix(1,0,0,1,0,0)'/%3E%3Cg transform='matrix(0.48999999999999994,0,0,0.48999999999999994,125.46104278564452,125.46102333068846)'%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3Cg%3E %3Cpath d='M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136 c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002 v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864 c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872 l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z' fill='%23ffffff' data-original='%23000000' style='' className=''/%3E %3C/g%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3Cg xmlns='http://www.w3.org/2000/svg'%3E %3C/g%3E %3C/g%3E%3C/svg%3E"
                    className="sc-bYSBpT dGHjEj"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div className="sc-gxMtzJ grSfOF">OR</div>
          </div>
          <div className="sc-gzOgki lcCBGW">
            <div className="sc-iyvyFf sTWfk">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M9.021 33.016a4.406 4.406 0 100-8.812 4.406 4.406 0 000 8.812zM30.21 33.016a4.406 4.406 0 100-8.812 4.406 4.406 0 000 8.812zM8.59 19.39a12.202 12.202 0 018.186 3.002 19.892 19.892 0 019.61-3.347"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M19.928 14.745h2.29a2.678 2.678 0 012.397 1.382l4.427 8.1"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M13.492 29.539h4.104a3.39 3.39 0 003.067-1.814 11.834 11.834 0 016.997-6.005M30.21 16.841v3.693M28.549 9.23l-2.395 1.54M20 6.154l.682 3.077M10.77 9.23l1.538 3.078"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
              </svg>
            </div>
            <div className="sc-hwwEjo dRZRnX">
              <div className="sc-kPVwWT hoqFof">
                Looking to insure your new bike?
              </div>
              <div className="sc-kfGgVZ hJUlqp">
                Save big with our zero commission insurance
              </div>
            </div>
            <div className="sc-esjQYD evTsuL">
              <div className="sc-kIPQKe jViCLQ">Get a quote</div>
            </div>
          </div>
          <div>
            <p className="sc-jDwBTQ sc-jbKcbu hIwejV">
              3 quick steps to get your policy
            </p>
            <div className="sc-dNLxif doWrOm">
              <div className="sc-jqCOkK dkqVpl">
                <div className="sc-uJMKN ednpMT">1</div>
                <p className="sc-jDwBTQ sc-bbmXgH jnBfpU">
                  Tell us about your bike
                </p>
              </div>
              <div className="sc-jqCOkK dkqVpl">
                <div className="sc-uJMKN ednpMT">2</div>
                <p className="sc-jDwBTQ sc-bbmXgH jnBfpU">
                  Get personalised low prices
                </p>
              </div>
              <div className="sc-jqCOkK dkqVpl">
                <div className="sc-uJMKN ednpMT">3</div>
                <p className="sc-jDwBTQ sc-bbmXgH jnBfpU">
                  Pay &amp; get policy instantly
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            style={{ width: "80%" }}
            src="https://storefront.ackoassets.com/next_assets/78490f53b0a1e056e63dca31e4e037c4ed782c03/_next/static/6de7bcfa1fc7419f401d12084a3767de.png"
            alt=""
          />
        </div>
      </div>
      <div className="sc-dqBHgY gVBOHZ">
        <div className="sc-bdVaJa sc-bwzfXH sc-cLQEGU gcclyn">
          <div className="sc-bdVaJa sc-bwzfXH sc-fOKMvo kxORbS">
            <div className="sc-bdVaJa sc-bwzfXH sc-bMVAic PzGNy">
              <svg width="335" height="136" viewBox="0 0 335 136" fill="none">
                <path
                  d="M34.966 63.382H0v69.253h34.966V63.382zM335 64.499h-34.966v69.253H335V64.499z"
                  fill="#F6F7FB"
                ></path>
                <rect
                  x="62.037"
                  width="219.949"
                  height="136"
                  rx="14"
                  fill="#F6F7FB"
                ></rect>
                <path
                  d="M261.684 42.598h-41.17v92.952h41.17V42.598z"
                  fill="#E4EAF1"
                ></path>
                <path
                  d="M302.854 135.663h-41.17V42.598l20.528-22.591 20.642 22.591v93.065z"
                  fill="#F4F5F7"
                ></path>
                <path
                  d="M280.182 55.187h-9.024v8.992h9.024v-8.992zM297.214 55.187h-9.024v8.992h9.024v-8.992zM280.182 74.519h-9.024v8.992h9.024v-8.992zM297.214 74.519h-9.024v8.992h9.024v-8.992zM282.212 20.007h-38.35l-23.348 22.591h41.17l20.528-22.591z"
                  fill="#fff"
                ></path>
                <path
                  d="M178.892 133.865c5.753 0 10.377-9.217 10.377-20.456 0-11.352-4.624-20.457-10.377-20.457h-13.309v40.913h13.309z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M165.47 133.752c5.731 0 10.377-9.159 10.377-20.456 0-11.298-4.646-20.456-10.377-20.456-5.731 0-10.377 9.158-10.377 20.456 0 11.297 4.646 20.456 10.377 20.456zM254.916 133.865c5.753 0 10.377-9.217 10.377-20.456 0-11.352-4.624-20.457-10.377-20.457h-13.31v40.913h13.31z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M241.607 133.752c5.731 0 10.377-9.159 10.377-20.456 0-11.298-4.646-20.456-10.377-20.456-5.732 0-10.378 9.158-10.378 20.456 0 11.297 4.646 20.456 10.378 20.456z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M110.878 123.524l-7.106-1.686c-2.482-.562-6.88-2.023-8.686-3.597-1.466-1.236-4.173-2.81-3.383-12.139.225-2.472 1.015-10.003 1.015-10.003.338-3.484 2.707-6.294 6.09-7.306l5.076-1.46 18.273-1.35-11.279 37.541z"
                  fill="#7C47E1"
                ></path>
                <path
                  d="M126.33 133.865c5.753 0 10.377-9.217 10.377-20.456 0-11.352-4.624-20.457-10.377-20.457h-13.309v40.913h13.309z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M113.021 133.752c5.731 0 10.377-9.159 10.377-20.456 0-11.298-4.646-20.456-10.377-20.456-5.731 0-10.377 9.158-10.377 20.456 0 11.297 4.646 20.456 10.377 20.456z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M113.021 125.772c3.426 0 6.203-5.586 6.203-12.476 0-6.89-2.777-12.476-6.203-12.476-3.427 0-6.204 5.586-6.204 12.476 0 6.89 2.777 12.476 6.204 12.476z"
                  fill="#ECE4F9"
                ></path>
                <path
                  d="M218.258 123.524l17.934-39.9s-26.845-19.895-60.796-19.895c-55.157 0-53.239 7.418-71.625 23.49l8.009 5.62c14.325 0 15.566 22.592 17.821 28.999.339 1.012 1.241 1.686 2.369 1.686h86.288z"
                  fill="#7C47E1"
                ></path>
                <path
                  d="M202.467 133.865c5.752 0 10.377-9.217 10.377-20.456 0-11.352-4.625-20.457-10.377-20.457h-13.31v40.913h13.31z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M189.044 133.752c5.731 0 10.377-9.159 10.377-20.456 0-11.298-4.646-20.456-10.377-20.456-5.731 0-10.377 9.158-10.377 20.456 0 11.297 4.646 20.456 10.377 20.456z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M189.044 125.772c3.426 0 6.203-5.586 6.203-12.476 0-6.89-2.777-12.476-6.203-12.476-3.427 0-6.204 5.586-6.204 12.476 0 6.89 2.777 12.476 6.204 12.476z"
                  fill="#ECE4F9"
                ></path>
                <path
                  d="M207.543 120.152c-1.692-7.418-9.588-27.312-18.95-27.312l-10.264-9.33h57.864c4.06 0 21.769 2.474 31.921 9.217 8.121 5.508 9.136 13.825 10.264 26.076.226 2.473-1.918 4.609-4.737 4.609-23.236 0-51.209.112-61.474.112-2.255.112-4.173-1.349-4.624-3.372z"
                  fill="#7C47E1"
                ></path>
                <path
                  d="M232.019 83.623h-37.673c-1.805 0-3.497-.9-4.399-2.36-4.174-6.182-11.618-12.476-17.032-15.399 38.011 0 59.104 17.76 59.104 17.76zM171.9 67.663c4.624 3.26 9.813 8.43 12.745 13.487.564 1.124-.112 2.36-1.353 2.36h-61.924c-6.543 0-4.399-16.297 29.89-17.533 3.271-.225 10.716-.337 14.889-.225 2.03.112 4.061.787 5.753 1.91z"
                  fill="#D1C0FF"
                ></path>
                <path
                  d="M214.085 112.284l19.852 1.461c.677 0 1.128.562 1.128 1.237v1.349a1.25 1.25 0 01-1.241 1.236h-19.852a1.25 1.25 0 01-1.241-1.236v-2.81c.113-.787.677-1.349 1.354-1.237zM277.137 112.509l-5.414 1.124c-.564.112-1.015.562-1.015 1.236v1.462c0 .674.563 1.236 1.24 1.236h5.753c.789 0 1.353-.675 1.241-1.349l-.339-2.585c-.113-.787-.789-1.236-1.466-1.124z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M230.44 91.603l-27.635-1.349s-.225 4.834 9.926 5.957c10.264 1.124 17.709-4.608 17.709-4.608z"
                  fill="#F6F7FB"
                ></path>
                <path
                  opacity="0.3"
                  d="M92.605 95.987c.113-.787.226-1.574.564-2.36h1.918s.112 7.193-2.595 6.743h-.225l.338-4.383z"
                  fill="#000"
                ></path>
                <path
                  d="M265.293 91.266c.902.562 1.918 1.012 2.707 1.686a20.13 20.13 0 013.61 3.147c-.339.113-.79.225-1.128.225-6.091 1.011-10.603-4.608-10.603-4.608l5.414-.45z"
                  fill="#F6F7FB"
                ></path>
                <path
                  d="M239.013 99.359h19.626c.677 0 1.353.224 1.917.562l3.384 2.36c.79.562 1.354 1.349 1.466 2.36l.903 6.407c.225 1.798-1.128 3.372-2.933 3.372h-20.98c-1.24 0-2.481-.787-3.045-1.911l-3.948-7.643c-.564-1.124-.451-2.36.226-3.259l1.015-1.237c.564-.562 1.466-1.011 2.369-1.011z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M147.987 65.864l2.369-.45-4.737 20.457h-2.143l4.511-20.007z"
                  fill="#7C47E1"
                ></path>
                <path
                  d="M156.334 88.231h-7.783l-.225.787c-.226.9.338 1.574 1.127 1.574h4.738c.902 0 1.692-.675 1.917-1.574l.226-.787zM129.376 88.231h-7.783l-.225.787c-.226.9.338 1.574 1.127 1.574h4.738c.902 0 1.692-.675 1.917-1.574l.226-.787zM182.164 119.927h-54.593v3.709h54.593v-3.709zM274.994 123.636h-71.85v-3.147h75.008a3.147 3.147 0 01-3.158 3.147zM103.433 118.803s-7.444-1.011-9.7-1.798c0 0 1.805 5.17 10.603 5.62l-.903-3.822z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M54.029 134.089c21.74 0 39.365-17.562 39.365-39.226 0-21.664-17.624-39.227-39.365-39.227-21.741 0-39.365 17.563-39.365 39.227 0 21.664 17.624 39.226 39.365 39.226z"
                  fill="#FFDA12"
                ></path>
                <path
                  d="M53.69 132.74v-5.732c17.822 0 32.26-14.387 32.26-32.145h5.752c0 20.906-17.145 37.877-38.012 37.877z"
                  fill="#F2AA00"
                ></path>
                <path
                  d="M54.03 125.322c16.881 0 30.567-13.637 30.567-30.46 0-16.822-13.686-30.459-30.568-30.459S23.462 78.04 23.462 94.863c0 16.822 13.685 30.459 30.567 30.459z"
                  fill="#FB5E00"
                ></path>
                <path
                  d="M54.029 125.322c16.446 0 29.777-13.285 29.777-29.672 0-16.388-13.331-29.673-29.777-29.673S24.25 79.262 24.25 95.649c0 16.388 13.332 29.673 29.778 29.673z"
                  fill="#F2AA00"
                ></path>
                <path
                  d="M76.814 57.66l-5.527.224c-.339 0-.677.113-1.016.337l-.902.563 2.933 1.46-1.128 2.249c-.226.337-.113.786.338 1.011a.721.721 0 00.677 0l3.271-1.461 2.594-.337-1.24-4.047z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M99.823 71.822L89.672 84.859c-1.354 1.799-2.03 4.047-1.692 6.295l2.256 17.084 15.114-33.831-5.527-2.585z"
                  fill="#0091DD"
                ></path>
                <path
                  d="M105.35 74.407l-25.04 54.849h13.986s19.401-41.924 24.815-59.907l-13.761 5.058z"
                  fill="#16C2F8"
                ></path>
                <path
                  d="M110.088 45.633s-1.354 11.127-8.347 21.805c0 0-6.09 7.755 3.61 7.081 9.7-.674 18.16-4.383 18.16-4.383s12.069-1.911 12.52-4.047c.451-2.135-6.994-23.49-12.52-25.289-5.415-1.91-10.716-1.011-13.423 4.833z"
                  fill="#F75276"
                ></path>
                <path
                  d="M123.51 70.023s-1.015 3.26-2.256 4.496c-1.128 1.236-3.271 1.236-3.271 0 .113-1.236.564-4.496 1.016-5.17.451-.675 1.804-1.237 2.255-1.237.677 0 2.144.338 2.256 1.911z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M119.224 69.349s-.338-1.686.564-2.585c.902-.9 8.46-3.71 8.46-3.71l-3.046-9.328s1.015 6.519-.902 8.654c-2.03 2.248-6.881 3.372-5.076 6.969zM80.31 129.256s-6.316 2.585-6.316 4.833H92.83v-4.833H80.31z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M118.886 68.787c-.113-.675 0-2.023 1.466-2.698 1.579-.787 7.445-3.147 7.783-3.26l.226.563c-.113 0-6.091 2.472-7.67 3.26-1.354.674-1.128 1.91-1.128 2.022l-.677.113z"
                  fill="#fff"
                ></path>
                <path
                  d="M113.359 41.474L96.101 54.512l-19.626 3.035 2.03 6.856 19.063-2.81 13.422-7.867 2.369-12.252z"
                  fill="#F75276"
                ></path>
                <path
                  d="M96.666 124.311l.79 2.922-.79 3.035-2.37 1.349v2.472h7.333l6.429-12.701-4.286-13.15-7.106 16.073z"
                  fill="#0B0E34"
                ></path>
                <path
                  d="M118.322 38.777l.338 2.248c.113.562.79.899 1.241.562a7.702 7.702 0 001.354-1.349l-.564-3.372s.789-.225.789-.787-.902-.899-1.24-.337l-.339-2.023s-2.481-.9-3.384-.112c-.902.674-1.24 5.62 1.805 5.17z"
                  fill="#030047"
                ></path>
                <path
                  d="M116.855 36.641l-.676-.112.564-1.349.225.113-.338 1.011.338.112-.113.225zM116.969 37.54c-.339 0-.451-.224-.451-.224l.225-.225-.113.112.113-.112s.226.225.677 0l.113.225c-.226.224-.451.224-.564.224zM116.179 35.293a.225.225 0 100-.45.225.225 0 000 .45zM117.758 35.517a.225.225 0 100-.45.225.225 0 000 .45z"
                  fill="#fff"
                ></path>
                <path
                  d="M120.239 35.63l-.338-1.911s-2.03-.674-3.948.787l-.113.562s-1.692-1.349-.338-2.585c1.466-1.237 3.271-.787 3.271-.787l-.79-.45s1.241-.45 1.692.675c0 0 .677-.225 1.015.45.339.674 0 1.348 0 1.348v1.574c.113 0-.225.112-.451.337z"
                  fill="#FF7268"
                ></path>
                <path
                  d="M53.916 89.13c9.475 0 18.16-1.011 24.815-2.697A26.036 26.036 0 0053.916 68.45a26.035 26.035 0 00-24.814 17.983c6.654 1.686 15.34 2.698 24.814 2.698z"
                  fill="#FFB522"
                ></path>
                <path
                  d="M62.263 84.635a.77.77 0 00.789-.787v-2.585a.77.77 0 00-.79-.787H44.216a.77.77 0 00-.79.787v2.585c0 .225.114.45.34.674 0 0 .337.225.45.225h2.143c2.933.225 7.107 1.461 7.783 6.07h-9.926a.77.77 0 00-.79.786v2.586c0 .45.34.786.79.786h9.362c-1.692 3.147-5.752 4.72-8.234 5.283-.902.225-1.128 1.236-.564 1.911l12.746 13.712c.339.337 1.015.337 1.354 0l1.917-2.023a.88.88 0 000-1.236l-9.587-9.667s6.203-2.023 7.782-7.98h3.272a.77.77 0 00.789-.786v-2.586a.77.77 0 00-.79-.786H59.33c-.226-2.585-1.24-4.609-2.482-6.07h5.415v-.112zM21.77 94.975h-5.753c0-20.906 17.032-37.877 38.012-37.877v5.732c-17.822 0-32.26 14.386-32.26 32.145z"
                  fill="#FFE46E"
                ></path>
                <path
                  d="M76.475 57.547l19.626-3.035 17.258-13.038L96.665 54.85l-20.077 2.922-.113-.225z"
                  fill="#FF92AC"
                ></path>
                <path
                  d="M104.658 75.353L80.09 129.165l.616.279 24.568-53.812-.616-.28z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div className="sc-bdVaJa sc-bwzfXH sc-eLExRp dMFyoY">
              <div className="sc-bdVaJa sc-bwzfXH sc-lkqHmb eGBlbo">
                <div className="sc-bdVaJa sc-bwzfXH sc-bnXvFD eurAfC">
                  <svg fill="none" height="56" viewBox="0 0 56 56" width="56">
                    <path
                      d="M38.502 56H17.498C7.825 56 0 48.151 0 38.51V17.49C0 7.822 7.852 0 17.498 0h21.004C48.175 0 56 7.849 56 17.49v20.993C56.027 48.151 48.175 56 38.502 56z"
                      fill="#ece4f9"
                    ></path>
                    <path
                      d="M28 49.896c12.099 0 21.907-9.803 21.907-21.896S40.099 6.103 28 6.103 6.093 15.907 6.093 28c0 12.093 9.808 21.896 21.907 21.896z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M28 39.135c6.153 0 11.14-4.986 11.14-11.136S34.154 16.864 28 16.864s-11.141 4.985-11.141 11.135 4.988 11.136 11.14 11.136z"
                      fill="#4285f4"
                    ></path>
                    <path
                      d="M21.74 24.805a7.176 7.176 0 016.39-3.948c1.776 0 3.463.62 4.75 1.863l2.796-2.75c-1.997-1.908-4.704-3.106-7.678-3.106-4.084 0-7.68 2.218-9.632 5.545l3.329 2.53c0-.045.044-.09.044-.134z"
                      fill="#fd3830"
                    ></path>
                    <path
                      d="M21.739 31.194c-.976-1.996-1.02-4.303-.044-6.3l-3.328-2.529c-.976 1.642-1.508 3.55-1.508 5.59 0 2.973 1.153 5.635 3.017 7.631l2.928-2.884c-.4-.399-.754-.931-1.065-1.508z"
                      fill="#ffbe00"
                    ></path>
                    <path
                      d="M28.132 35.142a7.133 7.133 0 01-5.327-2.395l-2.929 2.884a11.066 11.066 0 008.078 3.504c3.063 0 5.815-1.242 7.812-3.238l-3.018-2.44c-1.154 1.064-2.752 1.686-4.616 1.686z"
                      fill="#00af4c"
                    ></path>
                    <path
                      d="M35.451 28.173c0-.532-.044-1.02-.133-1.552h-7.19v2.928h4.128a3.568 3.568 0 01-1.51 2.307c-.665.443-1.553.71-2.574.71-1.997 0-3.684-1.332-4.305-3.15a4.715 4.715 0 010-2.929c.62-1.819 2.308-3.15 4.305-3.15 1.11 0 2.13.4 2.93 1.154l2.174-2.174a7.454 7.454 0 00-5.104-1.996c-2.885 0-5.504 1.641-6.836 4.214-1.065 2.174-1.065 4.703 0 6.833a7.665 7.665 0 006.836 4.214c2.042 0 3.773-.665 5.06-1.819 1.376-1.33 2.22-3.283 2.22-5.59z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <p className="sc-jDwBTQ sc-eilVRo fJsXvf">
                  Rated 4.8/5 on Google
                </p>
              </div>
              <div className="sc-bdVaJa sc-bwzfXH sc-lkqHmb eGBlbo">
                <div className="sc-bdVaJa sc-bwzfXH sc-bnXvFD hjQcDc">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <path
                      d="M39.667 56H16.333C7.233 56 0 48.767 0 39.667V16.333C0 7.233 7.233 0 16.333 0h23.334C48.767 0 56 7.233 56 16.333v23.334C56 48.767 48.767 56 39.667 56z"
                      fill="#ECE4F9"
                    ></path>
                    <path
                      d="M28 49.896c12.099 0 21.907-9.803 21.907-21.896S40.099 6.104 28 6.104 6.093 15.907 6.093 28 15.901 49.896 28 49.896z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M25.044 36.65c-.788-1.095-2.146-1.665-3.46-1.446-1.095.176-2.102-.131-2.847-.744l-2.978 4.292 4.774-.307L21.89 43l3.898-5.606c-.262-.219-.525-.438-.744-.744zM34.197 35.205c-1.358-.263-2.672.306-3.46 1.445-.175.263-.35.482-.57.657L34.154 43l1.358-4.555 4.774.307-3.066-4.423c-.788.7-1.883 1.094-3.022.876z"
                      fill="#70D4F9"
                    ></path>
                    <path
                      d="M30.474 14.314a3.102 3.102 0 003.11 1.27c2.146-.394 3.985 1.489 3.591 3.591-.219 1.183.307 2.409 1.27 3.11a3.069 3.069 0 010 5.08 3.101 3.101 0 00-1.27 3.11c.394 2.145-1.489 3.985-3.591 3.59-1.183-.218-2.409.307-3.11 1.27a3.069 3.069 0 01-5.08 0 3.102 3.102 0 00-3.11-1.27c-2.145.439-4.028-1.4-3.634-3.547.219-1.182-.307-2.409-1.27-3.11a3.069 3.069 0 010-5.08 3.101 3.101 0 001.27-3.11c-.394-2.145 1.489-3.985 3.59-3.59 1.183.219 2.41-.307 3.11-1.27 1.227-1.796 3.854-1.796 5.124-.044z"
                      fill="#D1C0FF"
                    ></path>
                    <path
                      d="M28.022 31.788a7.095 7.095 0 100-14.19 7.095 7.095 0 000 14.19z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M27.015 27.672a.865.865 0 01-.613-.263l-2.059-2.059c-.306-.306-.306-.876 0-1.182.307-.307.876-.307 1.183 0l1.489 1.489 3.284-3.285c.307-.306.876-.306 1.183 0 .306.307.306.876 0 1.183l-3.898 3.854a.706.706 0 01-.57.263z"
                      fill="#9364ED"
                    ></path>
                  </svg>
                </div>
                <p className="sc-jDwBTQ sc-eilVRo fJsXvf">IRDAI Licensed</p>
              </div>
            </div>
            <div className="sc-bdVaJa sc-bwzfXH sc-eLExRp dMFyoY">
              <div className="sc-bdVaJa sc-bwzfXH sc-lkqHmb eGBlbo">
                <div className="sc-bdVaJa sc-bwzfXH sc-bnXvFD eurAfC">
                  <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
                    <path
                      d="M41.07 57.455H17.132C7.795 57.455.374 50.033.374 40.697v-23.94C.374 7.422 7.795 0 17.13 0h23.94c9.336 0 16.757 7.421 16.757 16.758v23.939c0 9.336-7.42 16.758-16.757 16.758z"
                      fill="#ECE4F9"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.637 25.855s-7.66 2.154-8.858 3.59c-.957 1.437-.239 11.013 5.028 15.322 1.436 1.197 8.857-2.634 8.857-2.634l-5.027-16.278z"
                      fill="#A892F7"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.833 25.854s-1.436-.718-2.394.719c-.957 1.197-.718 5.984 1.676 11.49s5.506 4.31 5.745 2.394l-5.027-14.603z"
                      fill="#7C47E1"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.116 27.052c1.915-3.352 4.549-8.14 5.746-12.688.239-.958.718-1.437 1.675-1.676.958-.24 1.676 0 2.155.718.24.24.479.718.479 1.197.718 2.155.24 5.027 0 6.703 0 .24 0 .479.239.718.24.24.479.24.718 0 2.155-.957 7.182-2.394 8.858-.957 2.873 2.633 2.154 14.603 0 16.997-2.155 2.154-14.364 3.83-16.997 1.197-2.634-2.394-4.31-9.816-2.873-12.21z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M19.526 20.11a.958.958 0 100-1.916.958.958 0 000 1.915z"
                      fill="#B9C8FC"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M35.325 48.118h2.633c.479 0 .718-.24.718-.718v-2.633c0-.479-.24-.718-.718-.718h-2.633c-.479 0-.718.239-.718.718V47.4c0 .479.239.718.718.718z"
                      fill="#fff"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M41.79 12.448l.24.48h.478l-.24.239v.479l-.478-.24-.48.24v-.48l-.239-.239h.48l.239-.479z"
                      fill="#FF7268"
                    ></path>
                  </svg>
                </div>
                <p className="sc-jDwBTQ sc-eilVRo fJsXvf">
                  6.8 Crore happy users
                </p>
              </div>
              <div className="sc-bdVaJa sc-bwzfXH sc-lkqHmb eGBlbo">
                <div className="sc-bdVaJa sc-bwzfXH sc-bnXvFD hjQcDc">
                  <svg width="57" height="56" viewBox="0 0 57 56" fill="none">
                    <path
                      d="M39.906 56H16.573C7.473 56 .24 48.767.24 39.667V16.333C.24 7.233 7.473 0 16.573 0h23.333c9.1 0 16.334 7.233 16.334 16.333v23.334c0 9.1-7.234 16.333-16.334 16.333z"
                      fill="#ECE4F9"
                    ></path>
                    <path
                      d="M28.24 49.896c12.099 0 21.907-9.803 21.907-21.896S40.339 6.104 28.24 6.104 6.333 15.907 6.333 28s9.808 21.896 21.907 21.896z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M34.846 25.809l3.695-7.361-5.041-3.781-4.44 8.85c2.206.144 4.182.974 5.786 2.292zM27.857 23.517l-4.411-8.85-5.041 3.78L22.1 25.81a9.988 9.988 0 015.757-2.292z"
                      fill="#70D4F9"
                    ></path>
                    <path
                      d="M28.458 41.333a7.79 7.79 0 100-15.581 7.79 7.79 0 000 15.581z"
                      fill="#A892F7"
                    ></path>
                    <path
                      d="M25.537 36.607l.487-1.547a.76.76 0 00-.287-.859l-1.317-.945c-.63-.43-.315-1.404.43-1.432l1.632-.029a.8.8 0 00.745-.544l.487-1.547c.229-.716 1.231-.744 1.489-.028l.516 1.546a.8.8 0 00.744.545l1.633-.029c.745 0 1.088.945.487 1.404l-1.318.973a.851.851 0 00-.286.888l.515 1.547c.23.716-.572 1.318-1.203.888l-1.317-.945c-.287-.2-.659-.2-.917 0l-1.317.974c-.602.458-1.432-.115-1.203-.86z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M40.345 26.038a.888.888 0 100-1.776.888.888 0 000 1.776z"
                      fill="#E4F6FE"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.288 24.864l-1.461-.516c-.23-.086-.459.029-.544.258l-.516 1.46c-.086.23.029.459.258.545l1.46.487c.23.086.459-.029.545-.258l.515-1.46c.086-.201-.028-.43-.258-.516z"
                      fill="#E4F6FE"
                    ></path>
                  </svg>
                </div>
                <p className="sc-jDwBTQ sc-eilVRo fJsXvf">
                  Most Trusted Brands of India 2021*
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#F6F7FB" }}>
        <div style={{ display: "flex", width: "80%", margin: "auto" }}>
          <div style={{ padding: "15px" }}>
            <h3>
              Very good experience. Got the settlement done in less than 24
              hours.
            </h3>
            <div>
              <div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgODcgMTYiIHdpZHRoPSI4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmY5MTAwIj48cGF0aCBkPSJtNi44NTcxNyAxLjczMTM1Yy4zNzE5OC0uNzI0MDQgMS40MDY5OS0uNzI0MDQgMS43Nzg5NyAwbDEuMjEwOTIgMi4zNTcwNGMuMTQ1MjEuMjgyNjMuNDE2MDQuNDc5NDMuNzI5NzQuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTE0LTEuMTk1MmMtLjI4MzU5LS4xNDMzLS42MTg0Mi0uMTQzMy0uOTAyMDEgMGwtMi4zNjUwOSAxLjE5NTJjLS43MjY1Mi4zNjcxLTEuNTYzODYtLjI0MTMtMS40MzkyMi0xLjA0NTdsLjQwNTc3LTIuNjE4NjRjLjA0ODY2LS4zMTQtLjA1NDgxLS42MzI0My0uMjc4NzMtLjg1Nzg2bC0xLjg2NzQ4LTEuODgwMDNjLS41NzM2Ni0uNTc3NTEtLjI1MzgyLTEuNTYxODYuNTQ5NzMtMS42OTE4OWwyLjYxNTg3LS40MjMzYy4zMTM2Ny0uMDUwNzYuNTg0NTQtLjI0NzU2LjcyOTc0LS41MzAxOXoiLz48cGF0aCBkPSJtMjQuNzM0MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3OSAwbDEuMjEwOSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNjEuNDc5NDMuNzI5OC41MzAxOWwyLjYxNTkuNDIzM2MuODAzNS4xMzAwMyAxLjEyMzMgMS4xMTQzOC41NDk3IDEuNjkxODlsLTEuODY3NSAxLjg4MDAzYy0uMjIzOS4yMjU0My0uMzI3NC41NDM4Ni0uMjc4Ny44NTc4NmwuNDA1NyAyLjYxODY0Yy4xMjQ3LjgwNDQtLjcxMjcgMS40MTI4LTEuNDM5MiAxLjA0NTdsLTIuMzY1MS0xLjE5NTJjLS4yODM2LS4xNDMzLS42MTg0LS4xNDMzLS45MDIgMGwtMi4zNjUxIDEuMTk1MmMtLjcyNjUuMzY3MS0xLjU2MzgtLjI0MTMtMS40MzkyLTEuMDQ1N2wuNDA1OC0yLjYxODY0Yy4wNDg2LS4zMTQtLjA1NDgtLjYzMjQzLS4yNzg3LS44NTc4NmwtMS44Njc1LTEuODgwMDNjLS41NzM3LS41Nzc1MS0uMjUzOC0xLjU2MTg2LjU0OTctMS42OTE4OWwyLjYxNTktLjQyMzNjLjMxMzYtLjA1MDc2LjU4NDUtLjI0NzU2LjcyOTctLjUzMDE5eiIvPjxwYXRoIGQ9Im00Mi42MTEyIDEuNzMxMzVjLjM3Mi0uNzI0MDQgMS40MDctLjcyNDA0IDEuNzc5IDBsMS4yMTA5IDIuMzU3MDRjLjE0NTIuMjgyNjMuNDE2MS40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM2LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc0IDEuODgwMDNjLS4yMjQuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODguODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk4LTEuNjkxODlsMi42MTU4LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48cGF0aCBkPSJtNjAuNDg3MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3ODkgMGwxLjIxMSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNi40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM1LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc1IDEuODgwMDNjLS4yMjM5LjIyNTQzLS4zMjc0LjU0Mzg2LS4yNzg3Ljg1Nzg2bC40MDU4IDIuNjE4NjRjLjEyNDYuODA0NC0uNzEyNyAxLjQxMjgtMS40MzkyIDEuMDQ1N2wtMi4zNjUxLTEuMTk1MmMtLjI4MzYtLjE0MzMtLjYxODUtLjE0MzMtLjkwMiAwbC0yLjM2NTEgMS4xOTUyYy0uNzI2Ni4zNjcxLTEuNTYzOS0uMjQxMy0xLjQzOTMtMS4wNDU3bC40MDU4LTIuNjE4NjRjLjA0ODctLjMxNC0uMDU0OC0uNjMyNDMtLjI3ODctLjg1Nzg2bC0xLjg2NzUtMS44ODAwM2MtLjU3MzctLjU3NzUxLS4yNTM4LTEuNTYxODYuNTQ5Ny0xLjY5MTg5bDIuNjE1OS0uNDIzM2MuMzEzNy0uMDUwNzYuNTg0NS0uMjQ3NTYuNzI5Ny0uNTMwMTl6Ii8+PHBhdGggZD0ibTc4LjM2MzkgMS43MzEzNWMuMzcyLS43MjQwNCAxLjQwNy0uNzI0MDQgMS43Nzg5IDBsMS4yMTEgMi4zNTcwNGMuMTQ1Mi4yODI2My40MTYxLjQ3OTQzLjcyOTcuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzMuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk3LTEuNjkxODlsMi42MTU5LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48L2c+PC9zdmc+"
                  alt=""
                />
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <img
                    style={{ borderRadius: "50%", height: "40px" }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAACAVBMVEXdfzOPQxu3n3rkhTjPtqXMcDOXUiXggjfihTegdVflhTjkhDbmhjjmhzoeI0DniT0HCxwXHDcOEykQGTXdfS0SGDANFS6dbEnhfjYJDyThfCy2hmQUGTPfeDM2PGAnMVQ3QWggLFDegzfSuKVeOioEBxMRHDoaIDoWHz4dITwCAwsrNVkvPGY0OVzEpY8yNlRQMyiRUiSRWS6rbEPIsJ/Nj2HjgzoNDiEyP2sbHDDdfjXCnoehXCa4kW3bgzmWY0ogEAybblIyJSDEkG8oNmF6Iy4hKUsgKEU5QGU2RHA2NkzSt6efWB4IBgZKMCrIrZYkMEagcE7WczC9h2ano6qNb11yPB18WFRkSkJ9d3WxdlOpbFWmclDTw7hvRTHEhGfTfDbn2dR6SzKWYj7VmXjQtqKNQxrcgjUoHBd7RSMQFRYuDxm+gFMZJUk6IjdSHi4mJjhWSlnKdz9ALCfDayzag1DImHqKTB3Vn4dfMRdoZHfmr5vdp49EPUuAVUOoZzDPjniaRhfPu62SY0d3QzjsuaKcSxq1cWPFgYXeoIOzcEOkfmFpNRq3ZStKFyCfYjo+SG5GNUiFPxZxGyPnlmc5KS5pX150fJlxMTewP0jCyNDjjVAqQVPOczm1r7PTxsDNw7haMBqifWw7Gwyve2CASDicbVuqQUywtbyNWESWn6dVnDzQAAAACnRSTlOfn5+fn5+fn5+fg2/kAwAAAj1JREFUGBkFwU1Ik2EAwPH/+7z70rml6HQ63fBjNm2oUNYqFNQWUSF1sENejFDwFl7qUpdOgX1c6lQQCGEQQUpgmRaYmiTkQdvWSssPXGZutjlxbs/b7yey9IDRZFJNRiMAGHW6LIMixNVG+9Hs+jrVpDpu9/bePVFQ0OVq8HV1nxTgDOkD8wodYiQUGK4HWiGWaRczACA1eYpqi2W1DKA1Z2RQsBgCVLy22JF0IuDoIwA/o5wXAFLTqB1bOeB2+lJfYdzxhQoESFAkNvfZ3XBip3QCPDDFmLDqMxKAyvjyh82lZz4DwSUAAV6BBi41Lx0vdfKUVdBYzBWHmZeAYlT+6Xvd2w4AwIeYxIsmFa5FgmpY54ob8Hssp/mEiIMG0NF8cc/LVCeMAhAT5SwrUoCz/3qE8tqByyl+dy41t+yIwkZQem70var3FVcMp42P66xuQ6VuRxFlcLMnOD0U27W+z1wwLGfNrb174klnaQIcjwJrazJXT/+MILOnptPf7m/SIcLnqjxnZBRZxa9IjFzbXlER3TKEYKFk5YGD7fjDJlrehiIcB27Z2RdtxcGkXQH4nrffJFmfltKgKiC0aNCdiALZyRdDgxtcOeaPZbA3rInX4+YwWC1m85uami0OuaoXyskM/PGKtoRj256jJRLr8dGXOwTvzc6FVPInPoo7Gvk1JDhIMmLeEyInhG1X/WsrEzXJGf3sD6KfSzBvoMktmw1byrD5XEwWlhReot2XSajJwkyalF7v9+Mk9R/UnOCV0nVeEQAAAABJRU5ErkJggg=="
                    alt=""
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p style={{ fontWeight: "bold", margin: "0px" }}>
                    Rahul Gupta
                  </p>
                  <p style={{ margin: "0px" }}>Delhi</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: "15px" }}>
            <h3>
              Thank you so much for the amazing service, Special thanks to Mr.
              Rais Shaikh.
            </h3>
            <div>
              <div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgODcgMTYiIHdpZHRoPSI4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmY5MTAwIj48cGF0aCBkPSJtNi44NTcxNyAxLjczMTM1Yy4zNzE5OC0uNzI0MDQgMS40MDY5OS0uNzI0MDQgMS43Nzg5NyAwbDEuMjEwOTIgMi4zNTcwNGMuMTQ1MjEuMjgyNjMuNDE2MDQuNDc5NDMuNzI5NzQuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTE0LTEuMTk1MmMtLjI4MzU5LS4xNDMzLS42MTg0Mi0uMTQzMy0uOTAyMDEgMGwtMi4zNjUwOSAxLjE5NTJjLS43MjY1Mi4zNjcxLTEuNTYzODYtLjI0MTMtMS40MzkyMi0xLjA0NTdsLjQwNTc3LTIuNjE4NjRjLjA0ODY2LS4zMTQtLjA1NDgxLS42MzI0My0uMjc4NzMtLjg1Nzg2bC0xLjg2NzQ4LTEuODgwMDNjLS41NzM2Ni0uNTc3NTEtLjI1MzgyLTEuNTYxODYuNTQ5NzMtMS42OTE4OWwyLjYxNTg3LS40MjMzYy4zMTM2Ny0uMDUwNzYuNTg0NTQtLjI0NzU2LjcyOTc0LS41MzAxOXoiLz48cGF0aCBkPSJtMjQuNzM0MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3OSAwbDEuMjEwOSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNjEuNDc5NDMuNzI5OC41MzAxOWwyLjYxNTkuNDIzM2MuODAzNS4xMzAwMyAxLjEyMzMgMS4xMTQzOC41NDk3IDEuNjkxODlsLTEuODY3NSAxLjg4MDAzYy0uMjIzOS4yMjU0My0uMzI3NC41NDM4Ni0uMjc4Ny44NTc4NmwuNDA1NyAyLjYxODY0Yy4xMjQ3LjgwNDQtLjcxMjcgMS40MTI4LTEuNDM5MiAxLjA0NTdsLTIuMzY1MS0xLjE5NTJjLS4yODM2LS4xNDMzLS42MTg0LS4xNDMzLS45MDIgMGwtMi4zNjUxIDEuMTk1MmMtLjcyNjUuMzY3MS0xLjU2MzgtLjI0MTMtMS40MzkyLTEuMDQ1N2wuNDA1OC0yLjYxODY0Yy4wNDg2LS4zMTQtLjA1NDgtLjYzMjQzLS4yNzg3LS44NTc4NmwtMS44Njc1LTEuODgwMDNjLS41NzM3LS41Nzc1MS0uMjUzOC0xLjU2MTg2LjU0OTctMS42OTE4OWwyLjYxNTktLjQyMzNjLjMxMzYtLjA1MDc2LjU4NDUtLjI0NzU2LjcyOTctLjUzMDE5eiIvPjxwYXRoIGQ9Im00Mi42MTEyIDEuNzMxMzVjLjM3Mi0uNzI0MDQgMS40MDctLjcyNDA0IDEuNzc5IDBsMS4yMTA5IDIuMzU3MDRjLjE0NTIuMjgyNjMuNDE2MS40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM2LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc0IDEuODgwMDNjLS4yMjQuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODguODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk4LTEuNjkxODlsMi42MTU4LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48cGF0aCBkPSJtNjAuNDg3MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3ODkgMGwxLjIxMSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNi40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM1LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc1IDEuODgwMDNjLS4yMjM5LjIyNTQzLS4zMjc0LjU0Mzg2LS4yNzg3Ljg1Nzg2bC40MDU4IDIuNjE4NjRjLjEyNDYuODA0NC0uNzEyNyAxLjQxMjgtMS40MzkyIDEuMDQ1N2wtMi4zNjUxLTEuMTk1MmMtLjI4MzYtLjE0MzMtLjYxODUtLjE0MzMtLjkwMiAwbC0yLjM2NTEgMS4xOTUyYy0uNzI2Ni4zNjcxLTEuNTYzOS0uMjQxMy0xLjQzOTMtMS4wNDU3bC40MDU4LTIuNjE4NjRjLjA0ODctLjMxNC0uMDU0OC0uNjMyNDMtLjI3ODctLjg1Nzg2bC0xLjg2NzUtMS44ODAwM2MtLjU3MzctLjU3NzUxLS4yNTM4LTEuNTYxODYuNTQ5Ny0xLjY5MTg5bDIuNjE1OS0uNDIzM2MuMzEzNy0uMDUwNzYuNTg0NS0uMjQ3NTYuNzI5Ny0uNTMwMTl6Ii8+PHBhdGggZD0ibTc4LjM2MzkgMS43MzEzNWMuMzcyLS43MjQwNCAxLjQwNy0uNzI0MDQgMS43Nzg5IDBsMS4yMTEgMi4zNTcwNGMuMTQ1Mi4yODI2My40MTYxLjQ3OTQzLjcyOTcuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzMuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk3LTEuNjkxODlsMi42MTU5LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48L2c+PC9zdmc+"
                  alt=""
                />
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <img
                    style={{ borderRadius: "50%", height: "40px" }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAB8lBMVEVXMl6GlqRsW0e9yNBFKE09I0d9a1BdOGJ4aE3E0teAcFXczMTYx8Dg0slRLVa4xc5EQ1ZNPzZXZW7l29FJOEHp39dlPWvBztG2xsyvnI2YpK+1xMhDKkhoYnZXZn5yf4lpeI6Of3JWQzmAeHhlU2u6wsW2wsO8y9G5xMdAJ0a5wcS8x83d3OKCZFjCzNNNLlPb3ObFz9VGKEy/zdS1vsC7xMlcOGJgOmNhUEtfPmdsWVCyv8dUMlm0vL03JDxZNF3Y2uTF1du4vsGxubxmRGuaf3OntLwwHTbD0dfN2+NLLkzI0tldX2dQM1eSb2G/yNCHeWiLeWx1W09yaF0pLzShrrmfrLWBdF89LUF0Ylm3w8g8I0RCOTWwsbFHMU5YOF6dpqtoUEdaTUeUdmmEbWPg4OmiiXywvMBiRWiKlpnT2N7P0dhWTlhSPjkhJSqmo6OKbV1aSkOaeWlUPViWn6OHalyXxLaorK+zsLu5x86ViZQvOkaajIVXQU8rIzCsuLzJx9AzJTdrU3JGTlJ+fod8a1s4PkFERki/0NOhxb1maHGdyr+omZJyYHtyXGDn4+JvgYvg2dvY1NZ1aWVUYnrQzc7W5u/s9/lPWmRvhppdtpZcg6F9i5eRh3dkuJ2NdHuwlIe80MjG1M5uvKTGwcpuXnKY3OJDAAAAJXRSTlO/39/fv7/fv9/f39/f37/f3/Hf39/fv9/f39/fn9/f39/fr7+/aJ8YyQAAAjtJREFUGBkFwUlPEwEYgOF3Zr7SFjptKVQ2URFaxaBEDGBivEj0oESN4sHEs4m/w6OJ8U94MS4xmLhEDngQaJFYBUG2OmDH1mnBUtrSdXweUR+umPT9SAGoGlpn6Y7yOGyyInxLl/nC4d8qAMAk7aZa8UoDZYp4k1Kvj22POvNzQLETc0/AgWNvG7RwwLIIDnxoce5NvPcj9RIkQePeV8Nl75pciJ/ddDkuzQokq1JBz2ndrf/ehbqUUxGj28OkT1CQChTGX3fk4yMRX2Vnn+wzA0tUuzHroNIYilPviQ8oQTCuJQ0QtIFIRfOjkkic191kD2EZZU4mRZUafgrE+2utBZ/tn2uUYWf0FvPClUdaJ8QDqzefHpm/rDFddWddLx8UxbfboG3R2R1LejyR0HqQPtlIVLGQnGM06ifPsaPJi9d3nx+/G0nVqh7XT12A4SiwNJhZsk7kpux0vuTc7w29ENvfHAzHP0NVzRR3QyY9iVzWYXcgLJ2uVJVqK/qOwSL9tZnakOlHfKIOmJkWm/TEvN6+Bh7rdnR7hE9TXiGzPgOM6xgjVf7GwFfbSIAqDcwwUXa9cZ3RVQYjYI71Lt+IKoao6v3A5g5tzZvnZh3T3WlYjhG7qngFRUu9bYKuYMGRBKs9m20oD1vBJqlr29NN+SZi4Y/ozUbXFjoZom5NvH/U1oTksDf8FFPuwJ53C/fi0EJOcm2BVyO/DtQaHCh2cZWURv/CAiLeJ4qx1liCEk5ftgTegvIdm/b/JuP2q3wH3usAAAAASUVORK5CYII="
                    alt=""
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p style={{ fontWeight: "bold", margin: "0px" }}>
                    Somnath Mane
                  </p>
                  <p style={{ margin: "0px" }}>Pune</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: "15px" }}>
            <h3>
              Hassle free insurance & quick response. Absolutely best insurance
              company ever
            </h3>
            <div>
              <div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgODcgMTYiIHdpZHRoPSI4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmY5MTAwIj48cGF0aCBkPSJtNi44NTcxNyAxLjczMTM1Yy4zNzE5OC0uNzI0MDQgMS40MDY5OS0uNzI0MDQgMS43Nzg5NyAwbDEuMjEwOTIgMi4zNTcwNGMuMTQ1MjEuMjgyNjMuNDE2MDQuNDc5NDMuNzI5NzQuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTE0LTEuMTk1MmMtLjI4MzU5LS4xNDMzLS42MTg0Mi0uMTQzMy0uOTAyMDEgMGwtMi4zNjUwOSAxLjE5NTJjLS43MjY1Mi4zNjcxLTEuNTYzODYtLjI0MTMtMS40MzkyMi0xLjA0NTdsLjQwNTc3LTIuNjE4NjRjLjA0ODY2LS4zMTQtLjA1NDgxLS42MzI0My0uMjc4NzMtLjg1Nzg2bC0xLjg2NzQ4LTEuODgwMDNjLS41NzM2Ni0uNTc3NTEtLjI1MzgyLTEuNTYxODYuNTQ5NzMtMS42OTE4OWwyLjYxNTg3LS40MjMzYy4zMTM2Ny0uMDUwNzYuNTg0NTQtLjI0NzU2LjcyOTc0LS41MzAxOXoiLz48cGF0aCBkPSJtMjQuNzM0MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3OSAwbDEuMjEwOSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNjEuNDc5NDMuNzI5OC41MzAxOWwyLjYxNTkuNDIzM2MuODAzNS4xMzAwMyAxLjEyMzMgMS4xMTQzOC41NDk3IDEuNjkxODlsLTEuODY3NSAxLjg4MDAzYy0uMjIzOS4yMjU0My0uMzI3NC41NDM4Ni0uMjc4Ny44NTc4NmwuNDA1NyAyLjYxODY0Yy4xMjQ3LjgwNDQtLjcxMjcgMS40MTI4LTEuNDM5MiAxLjA0NTdsLTIuMzY1MS0xLjE5NTJjLS4yODM2LS4xNDMzLS42MTg0LS4xNDMzLS45MDIgMGwtMi4zNjUxIDEuMTk1MmMtLjcyNjUuMzY3MS0xLjU2MzgtLjI0MTMtMS40MzkyLTEuMDQ1N2wuNDA1OC0yLjYxODY0Yy4wNDg2LS4zMTQtLjA1NDgtLjYzMjQzLS4yNzg3LS44NTc4NmwtMS44Njc1LTEuODgwMDNjLS41NzM3LS41Nzc1MS0uMjUzOC0xLjU2MTg2LjU0OTctMS42OTE4OWwyLjYxNTktLjQyMzNjLjMxMzYtLjA1MDc2LjU4NDUtLjI0NzU2LjcyOTctLjUzMDE5eiIvPjxwYXRoIGQ9Im00Mi42MTEyIDEuNzMxMzVjLjM3Mi0uNzI0MDQgMS40MDctLjcyNDA0IDEuNzc5IDBsMS4yMTA5IDIuMzU3MDRjLjE0NTIuMjgyNjMuNDE2MS40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM2LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc0IDEuODgwMDNjLS4yMjQuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODguODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk4LTEuNjkxODlsMi42MTU4LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48cGF0aCBkPSJtNjAuNDg3MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3ODkgMGwxLjIxMSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNi40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM1LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc1IDEuODgwMDNjLS4yMjM5LjIyNTQzLS4zMjc0LjU0Mzg2LS4yNzg3Ljg1Nzg2bC40MDU4IDIuNjE4NjRjLjEyNDYuODA0NC0uNzEyNyAxLjQxMjgtMS40MzkyIDEuMDQ1N2wtMi4zNjUxLTEuMTk1MmMtLjI4MzYtLjE0MzMtLjYxODUtLjE0MzMtLjkwMiAwbC0yLjM2NTEgMS4xOTUyYy0uNzI2Ni4zNjcxLTEuNTYzOS0uMjQxMy0xLjQzOTMtMS4wNDU3bC40MDU4LTIuNjE4NjRjLjA0ODctLjMxNC0uMDU0OC0uNjMyNDMtLjI3ODctLjg1Nzg2bC0xLjg2NzUtMS44ODAwM2MtLjU3MzctLjU3NzUxLS4yNTM4LTEuNTYxODYuNTQ5Ny0xLjY5MTg5bDIuNjE1OS0uNDIzM2MuMzEzNy0uMDUwNzYuNTg0NS0uMjQ3NTYuNzI5Ny0uNTMwMTl6Ii8+PHBhdGggZD0ibTc4LjM2MzkgMS43MzEzNWMuMzcyLS43MjQwNCAxLjQwNy0uNzI0MDQgMS43Nzg5IDBsMS4yMTEgMi4zNTcwNGMuMTQ1Mi4yODI2My40MTYxLjQ3OTQzLjcyOTcuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzMuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk3LTEuNjkxODlsMi42MTU5LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48L2c+PC9zdmc+"
                  alt=""
                />
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <img
                    style={{ borderRadius: "50%", height: "40px" }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAB2lBMVEXK4u8EIcYEKdXB3vHK5/nI4e6+3O7E4fPJ5fgEJtEEM+PG4vYDOujI4/AEJ8zF4vTG4/XL5PHP6/rF4O4ELNkEHbkDGacEMt7N6PoEI8kEGau/3OnD3eppaFu72+4ELt0EQO4EQusERvEET/gEWvwEF6BucGgDE4xCXWKv0OgESvQDGbADD3QEEoMEIcHd8vgMPNnh9v3W8f2CnasRGSINDxMEG7PT4+Ke2/sEJr1gYVhJdIAEF5hxbl23nI+ngXW92OnN6PUEZPwEOuAEDWqu2vkGWvd6emgJG38SSJQ9TJGPfWQ1fp++pZrKpJOb0PG54PtZbYTO3dN4j59TZnMEa/4FefsXJXhbRTKJpbtYcsMDClXX7PKIhG8OLJEYYZp6x/h7dF04S4daZXYnIiGzi2IZSb/nyLQGNcE6cIgrPk8pL0karPMxSFkFjuRraI++ooOKrM6HbExuW1Rce5U6ofdqqMMTTMxVrPeh1OCsxtc0R06SqLgFMNR1j9B5k48FFpIsW6KdelA/LSKbscDMzdIvVK5+tM6Owdq0wb6yx9UuQYjD6f4LT9JmqPU5Ul02an2ti29hzv0Na7AIeMk3dZIIbNe45/4yK0clZdBkUEkxKynavqWAYUN8zk0RAAACI0lEQVQozy3N9XvaQBjA8UuKJCEkQEJCUigUCDBchg73QqnbU1tdVlvb+datc3e3/3UXxvene+/z3HsgBHrpSzeU/09KBujNZqDsjXp96TajlGMYxmzu74cCSVbtHc/dqRgjp+wKo49olVotTU/GL8LG1Wp1X0ivgqKWo2kdPRV/vBGPT0JQwYpFWUoGHSz2aHt7cy4G5xC0gQGgwTCDCYM9aec7hbl78gpVVxQwU0ShwF7l8/nOx6c0HSp1FwKdDsMUJgWmKY4UCiNXGTjregLvDQa48LgN4fQYgzswdZ/8jwaeo9Hau62N018nv3/WopGxsdroi+fggtzo9Rln88ffk8295fqtVCr1ZuXDHnA1XK5r5bLTkW52/hwFuPr0zMpi5PvwFZCxWFw3HQ6n1061jtzpQWd5uj6U+iRLzjV+Rtq8DoeXQnjS7qyHKzv7+8MHwJJzPQtm05C8FZK02wgq66MOD78egPbS0pZwzqHEoJydRMUsEvz2Zfc9yGTW05QkCRTKhnmex40BTkDeft71gNzqOoJkAxRFEHa7rYKIVTcV3Ll8yQMsljU8GPALFEGSVhY3iv5AEEdkWW20gqLfbcStRJgkILn9RgoZ6r55jSYWxARKEDYbSRmlqh/BBVkauTXUuOATUStPsiji49zVhBV/GHsAki9bKDLLcbiVDRNWwcdJTRHF7ycnQHJxHkeWJQlnz3ieFRKSe9bH4vPJiX8rUWmhE3qYOQAAAABJRU5ErkJggg=="
                    alt=""
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p style={{ fontWeight: "bold", margin: "0px" }}>
                    Vinil Kumar
                  </p>
                  <p style={{ margin: "0px" }}>Hydrabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kxJppC">
        <div className="ixQUtd">
          <div className="hbBOrH">
            <div className="hxAKGH">
              <div className="ilkjKQ">
                <img
                  src="https://www.acko.com/static/realm/ackoWhiteLogo.png"
                  alt="ACKO White LOGO"
                  className="sc-drMfKT fKppdK"
                />
                <p className="sc-jDwBTQ sc-fgfRvd sEINP">
                  Acko General Insurance Ltd.
                </p>
                <p className="sc-jDwBTQ sc-hIVACf eqMpUa">
                  2nd Floor, #36/5, Hustlehub One East, Somasandrapalya, 27th
                  Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102
                </p>
                <div className="sc-htoDjs sc-dnqmqq sc-eXNvrr brkHuk"></div>
                <p className="sc-jDwBTQ sc-kXeGPI fpKzld">
                  We’re Socially Active
                </p>
                <div className="kQLRct">
                  <a
                    href="https://www.facebook.com/ackoinsurance/"
                    target="_blank"
                    className="sc-ugnQR eKmKOu"
                  >
                    <img
                      alt="Facebook Icon"
                      src="https://www.acko.com/static/realm/icons/facebookFooterIcon.svg"
                    />
                  </a>
                  <a
                    href="https://twitter.com/AckoInsurance"
                    target="_blank"
                    className="sc-ugnQR eKmKOu"
                  >
                    <img
                      alt="Twitter Icon"
                      src="https://www.acko.com/static/realm/icons/twitterFooterIcon.svg"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/ackoinsurance/"
                    target="_blank"
                    className="sc-ugnQR eKmKOu"
                  >
                    <img
                      alt="Instagram Icon"
                      src="https://www.acko.com/static/realm/icons/instagramFooterIcon.svg"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCn1gqDU9TqbR8u6_10S0RJA"
                    target="_blank"
                    className="sc-ugnQR eKmKOu"
                  >
                    <img
                      alt="Youtube Icon"
                      src="https://www.acko.com/static/realm/icons/youtubeFooterIcon.svg"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/acko/"
                    target="_blank"
                    className="sc-ugnQR eKmKOu"
                  >
                    <img
                      alt="LinkedIn Icon"
                      src="https://www.acko.com/static/realm/icons/linkedinFooterIcon.svg"
                    />
                  </a>
                  <div className="sc-htoDjs sc-dnqmqq sc-kQsIoO gbCnyw"></div>
                </div>
              </div>
              <div className="dxjDwC">
                <p className="sc-jDwBTQ sc-gPzReC boTHzb">Company</p>
                <ul className="sc-jrIrqw ktudoD">
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/about-us/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/board-of-directors/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Board Of Directors
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://careers.acko.com/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/media-kit/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Media Kit
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/articles/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Articles
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/ackology/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Ackology - The Tech Blog
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/partnerships/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Partnerships
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/sitemap/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Sitemap
                    </a>
                  </li>
                </ul>
                <div className="sc-htoDjs sc-dnqmqq sc-kQsIoO gbCnyw"></div>
              </div>
              <div className="sc-htoDjs sc-dnqmqq sc-cBdUnI dxjDwC">
                <p className="sc-jDwBTQ sc-gPzReC boTHzb">Support</p>
                <ul className="sc-jrIrqw ktudoD">
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/cancellation-and-refund-policy/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Cancellations &amp; Refunds
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/customer-service/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Customer Service
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/download/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Downloads
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/unclaimed-amount.pdf"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Unclaimed Amount
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.irdai.gov.in/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      IRDAI Website
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/commercial-insurance/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Other Products
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="/nodal-officers-mact-claims/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      ACKO Nodal Officers (MACT Claims)
                    </a>
                  </li>
                </ul>
                <div className="sc-htoDjs sc-dnqmqq sc-kQsIoO gbCnyw"></div>
              </div>
              <div className="sc-htoDjs sc-dnqmqq sc-cBdUnI dxjDwC">
                <p className="sc-jDwBTQ sc-gPzReC boTHzb">Legal</p>
                <ul className="sc-jrIrqw ktudoD">
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/wp-content/uploads/2018/02/Whistleblower-policy.pdf"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Whistleblower Policy
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/public-disclosure/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Public Disclosure
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/financials-disclosures/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Financials &amp; Disclosures
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/privacy-policy/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/terms-and-conditions/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="/offers-terms-and-conditions/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Offer terms &amp; conditions
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/wp-content/uploads/2018/07/policy-on-stewardship-code.pdf"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Stewardship Code
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/wp-content/uploads/2020/06/anti-fraud-policy.pdf"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Anti Fraud Policy
                    </a>
                  </li>
                  <li className="sc-hjRWVT bvgUCg">
                    <a
                      href="https://www.acko.com/disclaimer/"
                      target="_blank"
                      className="sc-iybRtq hDfsUb"
                    >
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ceLWpU">
              <div className="jFKcV">
                <div className="sc-htoDjs sc-dnqmqq sc-hBbWxd cOJEBX">
                  <p className="sc-jDwBTQ sc-iomxrj kGUaBw">
                    <p className="sc-jDwBTQ sc-dvCyap dRGpME">CIN:</p>{" "}
                    U66000MH2016PLC287385
                  </p>
                  <p className="sc-jDwBTQ sc-iomxrj kGUaBw">
                    <p className="sc-jDwBTQ sc-dvCyap dRGpME">
                      IRDAI Registration No:
                    </p>{" "}
                    157
                  </p>
                  <p className="sc-jDwBTQ sc-iomxrj kGUaBw">
                    <p className="sc-jDwBTQ sc-dvCyap dRGpME">Category:</p>{" "}
                    Non-Life Insurance
                  </p>
                </div>
              </div>
              <p className="sc-jDwBTQ sc-iFMziU kjjanz">
                The ratings are derived from reviews and feedback received from
                Google and Facebook users on their respective platforms.
              </p>
              <p className="sc-jDwBTQ sc-iFMziU kjjanz">
                Trade logo displayed above belongs to Acko Technology &amp;
                Services Pvt Ltd and used by Acko General insurance Limited
                under License.
              </p>
              <p className="sc-jDwBTQ sc-iFMziU kjjanz">
                For more details on risk factors, terms and conditions, please
                refer to the policy wordings before concluding a sale.
              </p>
              <p className="sc-jDwBTQ sc-iFMziU kjjanz">
                *ACKO General Insurance has been recognised as one of the 'Most
                Trusted Brands of India 2021' by Team Marksmen and their Media
                Partner- CNBCTV18
              </p>
              <p className="sc-jDwBTQ sc-drKuOJ kgMFVK">*T&amp;C Apply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
