import { border } from "@mui/system";
import arrow from "../../Images/arrow.png"

export function Footer() {
  return (
    <div>
      <div>
        <div className="footer__outer">
          <div
            className="footer__inner"
          >
            <div>
              <p style={{ fontWeight: "bolder" }}>
                ACKO General Insurance Limited
              </p>
              <p className="address">
                2nd Floor, #36/5, Hustlehub One East, Somasandrapalya, 27th Main
                road, Sector 2, HSR Layout, Bengaluru, Karnataka - 560102
              </p>
            </div>
            <div className="general">
                <div className="flaticon">
                    <p>Company</p>
                    <img src={arrow} width="15px" height="15px"/>
                </div>
                <div className="flaticon">
                    <p>Supporty</p>
                    <img src={arrow} width="15px" height="15px"/>
                </div>
                <div className="flaticon">
                    <p>Legal</p>
                    <img src={arrow} width="15px" height="15px"/>
                </div>
                <div className="flaticon">
                    <p>General articles</p>
                    <img src={arrow} width="15px" height="15px"/>
                </div>
                <div className="flaticon">
                    <p>Car insurance articles</p>
                    <img src={arrow} width="15px" height="15px"/>
                </div>
                <div className="flaticon">
                    <p>Two-Wheeler insurance articles</p>
                    <img src={arrow} width="15px" height="15px"/>
                </div>
                {/* <p>Company</p>
                <p>Support </p>
                <p>Legal</p>
                <p>General articles</p>
                <p></p> */}
            </div>
            <div>
              <p className="social">
                We’re socially active!
                {/* <a target="_blank" href="https://www.facebook.com/ackoindia/" rel="noopener" ><span class="sc-sdtwF ktfVDG"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" xmlnsV="https://vecta.io/nano"><path d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14z" fill="#f1f3f8"></path><path d="M14.757 21.88v-6.939h2.333l.348-2.702h-2.681v-1.719c0-.778.225-1.31 1.33-1.31h1.433V6.775c-.696-.082-1.392-.102-2.088-.102-2.067 0-3.48 1.269-3.48 3.561v1.985H9.64v2.722h2.333v6.939h2.784z" fill="#343758"></path></svg></span></a> */}
              </p>
              <div className="atag__link">
                <a
                  target="_blank"
                  href="https://www.facebook.com/ackoindia/"
                  rel="noopener"
                >
                  <span >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="none"
                      xmlnsV="https://vecta.io/nano"
                    >
                      <path
                        d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14z"
                        fill="#f1f3f8"
                      ></path>
                      <path
                        d="M14.757 21.88v-6.939h2.333l.348-2.702h-2.681v-1.719c0-.778.225-1.31 1.33-1.31h1.433V6.775c-.696-.082-1.392-.102-2.088-.102-2.067 0-3.48 1.269-3.48 3.561v1.985H9.64v2.722h2.333v6.939h2.784z"
                        fill="#343758"
                      ></path>
                    </svg>
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/ackoinsurance/"
                  rel="noopener"
                >
                  <span >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="none"
                      xmlnsV="https://vecta.io/nano"
                    >
                      <path
                        d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14z"
                        fill="#f1f3f8"
                      ></path>
                      <path
                        d="M14 12.06A1.94 1.94 0 0 0 12.06 14 1.94 1.94 0 0 0 14 15.94 1.94 1.94 0 0 0 15.94 14 1.94 1.94 0 0 0 14 12.06zm0-1.294c.858 0 1.68.341 2.287.947s.947 1.429.947 2.287-.341 1.68-.947 2.287-1.429.947-2.287.947-1.68-.341-2.287-.947-.947-1.429-.947-2.287.341-1.68.947-2.287 1.429-.947 2.287-.947zm4.204-.162a.81.81 0 0 1-.808.809.81.81 0 0 1-.809-.809.81.81 0 0 1 .809-.808.81.81 0 0 1 .808.808zM14 8.826l-2.606.038c-.507.024-.847.092-1.163.215-.281.109-.483.239-.698.455a1.87 1.87 0 0 0-.455.698c-.123.317-.191.657-.214 1.163L8.826 14l.038 2.606c.024.507.092.847.214 1.162.11.281.239.484.454.698s.42.347.699.455c.319.123.66.192 1.164.215l2.606.037 2.606-.037c.506-.024.847-.092 1.162-.214a1.89 1.89 0 0 0 .698-.454 1.87 1.87 0 0 0 .455-.699c.123-.319.191-.66.215-1.164L19.174 14l-.037-2.606c-.024-.506-.092-.847-.215-1.163-.098-.264-.253-.503-.455-.698-.196-.203-.434-.358-.699-.455-.317-.123-.657-.191-1.163-.214L14 8.826zm0-1.294l2.666.039c.689.032 1.158.14 1.57.301.427.164.787.387 1.146.746.329.323.583.714.746 1.146.16.412.268.882.301 1.57L20.468 14l-.039 2.666c-.032.689-.141 1.158-.301 1.57a3.16 3.16 0 0 1-.746 1.146 3.18 3.18 0 0 1-1.146.746c-.412.16-.882.268-1.57.301L14 20.468c-1.757 0-1.976-.006-2.666-.039s-1.158-.141-1.57-.301c-.432-.162-.823-.417-1.146-.746a3.17 3.17 0 0 1-.746-1.146c-.16-.412-.268-.882-.301-1.57L7.532 14l.039-2.666c.032-.689.14-1.158.301-1.57.162-.432.416-.823.746-1.146.323-.329.714-.584 1.146-.746.413-.16.881-.268 1.57-.301L14 7.532z"
                        fill="#343758"
                      ></path>
                    </svg>
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/acko/"
                  rel="noopener"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="none"
                      xmlnsV="https://vecta.io/nano"
                    >
                      <path
                        d="M28 14c0 7.737-6.263 14-14 14S0 21.737 0 14 6.263 0 14 0s14 6.263 14 14z"
                        fill="#f1f3f8"
                      ></path>
                      <path
                        d="M21.266 15.126v5.24h-3.029v-4.892c0-1.228-.43-2.067-1.535-2.067-.839 0-1.33.573-1.555 1.105-.082.205-.102.471-.102.737v5.096h-3.029v-9.129h3.029v1.289l-.02.021h.02v-.021c.409-.614 1.126-1.515 2.743-1.515 1.985.021 3.479 1.31 3.479 4.135zM8.822 6.816c-1.044 0-1.719.675-1.719 1.576 0 .88.655 1.576 1.678 1.576h.02c1.064 0 1.719-.696 1.719-1.576-.02-.901-.655-1.576-1.699-1.576zm-1.535 13.55h3.029v-9.149H7.287v9.149z"
                        fill="#343758"
                      ></path>
                    </svg>
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/AckoIndia"
                  rel="noopener">
                  <span >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="none"
                      xmlnsV="https://vecta.io/nano" >
                      <path
                        d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14z"
                        fill="#f1f3f8"
                      ></path>
                      <path
                        d="M7.839 19.076c1.228.778 2.661 1.228 4.216 1.228a7.91 7.91 0 0 0 7.901-7.901v-.328c.164-.123 1.126-.901 1.371-1.412 0 0-.798.328-1.576.409.061-.041 1.064-.737 1.208-1.535 0 0-.553.307-1.351.553a10.37 10.37 0 0 1-.409.123c-.512-.532-1.228-.88-2.026-.88-1.535 0-2.763 1.249-2.763 2.763a2.16 2.16 0 0 0 .082.634c-.205 0-3.459-.184-5.69-2.866 0 0-1.33 1.801.798 3.664 0 0-.634-.021-1.187-.348 0 0-.205 2.19 2.19 2.743 0 0-.471.184-1.228.041 0 0 .43 1.76 2.538 1.924-.021.02-1.699 1.535-4.073 1.187z"
                        fill="#343758"
                      ></path>
                    </svg>
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCn1gqDU9TqbR8u6_10S0RJA"
                  rel="noopener">
                  <span >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="none"
                      xmlnsV="https://vecta.io/nano"
                    >
                      <path
                        d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14z"
                        fill="#f1f3f8"
                      ></path>
                      <path
                        d="M21.246 10.439c-.123-1.044-.982-1.842-2.047-1.924L14 8.31l-5.199.205c-1.044.082-1.924.88-2.047 1.924-.287 2.374-.287 4.769 0 7.143.123 1.044.982 1.842 2.047 1.924L14 19.69l5.199-.184c1.044-.082 1.924-.88 2.047-1.924a29.79 29.79 0 0 0 0-7.143zm-5.015 3.807l-3.582 1.965a.28.28 0 0 1-.409-.246v-3.93a.28.28 0 0 1 .409-.246l3.582 1.965c.205.123.205.389 0 .491z"
                        fill="#343758"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="download">Download our app</div>
              <div style={{marginTop:"7%"}}>
                  <span style={{marginRight:"3%"}} ><svg xmlns="http://www.w3.org/2000/svg" width="80" height="24" fill="none" xmlnsV="https://vecta.io/nano"><path d="M76.291 23.991H3.71A3.7 3.7 0 0 1 0 20.304V3.711C0 1.657 1.656 0 3.71 0h72.581C78.344 0 80 1.657 80 3.711v16.593c-.023 2.03-1.68 3.687-3.71 3.687z" fill="#343758"></path><g fill="#fff"><path d="M41.995 8.121c-.513 0-.957-.187-1.306-.537s-.537-.817-.513-1.307c0-.513.187-.957.513-1.307.35-.35.77-.537 1.306-.537.513 0 .956.187 1.306.537s.513.793.513 1.307-.187.957-.513 1.307c-.35.373-.793.537-1.306.537zm-15.375 0c-.513 0-.933-.187-1.306-.537-.35-.35-.537-.793-.537-1.307s.187-.957.537-1.307.793-.537 1.306-.537a1.9 1.9 0 0 1 .723.14 1.43 1.43 0 0 1 .56.397l.023.047-.397.373v-.023c-.21-.257-.513-.397-.887-.397-.35 0-.653.117-.887.373-.257.233-.373.56-.373.957s.117.7.373.957c.257.233.537.373.887.373.373 0 .677-.117.91-.373.14-.14.233-.35.257-.583h-1.236v-.537h1.773v.047a1.05 1.05 0 0 1 .023.257c0 .49-.14.887-.443 1.19-.327.327-.77.49-1.306.49zm20.437-.07h-.537l-1.68-2.66.023.49v2.194h-.537V4.504h.63l.023.023 1.563 2.52-.023-.49V4.504h.56l-.023 3.547zm-9.145 0h-.56V5.041h-.956v-.537h2.473v.537h-.956v3.011zm-1.96 0h-.56V4.504h.56v3.547zm-3.103 0h-.56V5.041h-.957v-.537h2.473v.537h-.956v3.011zm-1.867 0H28.86V4.504h2.123v.537H29.42v.98h1.4v.513h-1.4v.98h1.563v.537zm10.125-.817a1.18 1.18 0 0 0 .887.373c.35 0 .653-.117.886-.373.233-.233.373-.56.373-.934s-.117-.7-.373-.934a1.18 1.18 0 0 0-.886-.373c-.35 0-.653.117-.887.373-.233.233-.373.56-.373.934s.14.677.373.934z"></path><path d="M40.128 12.999a2.38 2.38 0 0 0-2.426 2.427c0 1.4 1.096 2.427 2.426 2.427a2.38 2.38 0 0 0 2.426-2.427c0-1.424-1.073-2.427-2.426-2.427zm0 3.897c-.746 0-1.376-.607-1.376-1.47 0-.887.63-1.47 1.377-1.47s1.377.607 1.377 1.47-.63 1.47-1.376 1.47zm-5.319-3.897a2.38 2.38 0 0 0-2.426 2.427c0 1.4 1.097 2.427 2.426 2.427a2.38 2.38 0 0 0 2.426-2.427c.023-1.424-1.073-2.427-2.426-2.427zm0 3.897c-.747 0-1.376-.607-1.376-1.47 0-.887.63-1.47 1.377-1.47s1.377.607 1.377 1.47-.63 1.47-1.376 1.47zm-6.323-3.151v1.027h2.473c-.07.583-.257 1.003-.56 1.284-.35.35-.91.747-1.913.747-1.516 0-2.706-1.214-2.706-2.731s1.19-2.731 2.706-2.731c.817 0 1.423.327 1.866.747l.723-.723c-.607-.583-1.423-1.05-2.59-1.05-2.076 0-3.826 1.704-3.826 3.757 0 2.077 1.75 3.757 3.826 3.757 1.12 0 1.96-.373 2.636-1.05s.887-1.634.887-2.404a4.66 4.66 0 0 0-.047-.63h-3.476c0-.023 0 0 0 0zm25.874.794c-.21-.537-.817-1.54-2.076-1.54s-2.286.98-2.286 2.427c0 1.354 1.026 2.427 2.403 2.427 1.12 0 1.75-.677 2.03-1.074l-.817-.56c-.28.397-.653.677-1.19.677s-.933-.257-1.19-.747l3.243-1.354c-.023 0-.117-.257-.117-.257zm-3.313.817c-.023-.934.723-1.424 1.26-1.424.42 0 .77.21.91.514l-2.17.91zm-2.636 2.334h1.073v-7.118h-1.073v7.118zm-1.75-4.154h-.047c-.233-.28-.7-.537-1.283-.537-1.213 0-2.333 1.074-2.333 2.427s1.12 2.427 2.333 2.427c.583 0 1.05-.257 1.283-.56h.047v.35c0 .933-.49 1.424-1.283 1.424-.653 0-1.05-.467-1.213-.864l-.933.397c.257.63.98 1.424 2.146 1.424 1.26 0 2.31-.747 2.31-2.521v-4.364h-1.027v.397zm-1.236 3.361c-.746 0-1.353-.607-1.353-1.47s.607-1.47 1.353-1.47c.723 0 1.283.63 1.283 1.47.023.84-.56 1.47-1.283 1.47zm13.905-6.324h-2.543v7.141h1.073v-2.707h1.493c1.19 0 2.333-.864 2.333-2.217s-1.166-2.217-2.356-2.217zm.047 3.431h-1.517v-2.45h1.517c.793 0 1.26.653 1.26 1.213-.023.56-.467 1.237-1.26 1.237zm6.579-1.027c-.77 0-1.563.35-1.913 1.097l.957.397c.21-.397.583-.537.98-.537.56 0 1.12.327 1.12.91v.093c-.187-.117-.607-.28-1.12-.28-1.026 0-2.053.56-2.053 1.61 0 .957.84 1.564 1.773 1.564.723 0 1.12-.327 1.353-.7h.047v.56h1.026v-2.731c0-1.284-.957-1.984-2.17-1.984zm-.14 3.921c-.35 0-.84-.163-.84-.607 0-.56.607-.77 1.12-.77.467 0 .7.093.98.233-.07.653-.607 1.12-1.26 1.143zm6.043-3.757l-1.213 3.104h-.047l-1.26-3.104h-1.143l1.913 4.317-1.073 2.404h1.12l2.916-6.721h-1.213zm-9.589 4.551h1.073v-7.118h-1.073v7.118z" ></path></g><path d="M7.209 4.877c-.163.187-.257.443-.257.817V18.32c0 .35.093.63.257.793l.047.047 7.069-7.071v-.187L7.256 4.831l-.047.047z" fill="#00cfff" ></path><path d="M16.681 14.423l-2.356-2.357v-.163l2.356-2.357.047.023 2.8 1.587c.793.443.793 1.19 0 1.657l-2.8 1.587-.047.023z" fill="#ffcd00"></path><path d="M16.728 14.399l-2.403-2.404-7.116 7.118c.257.28.7.303 1.19.047l8.329-4.761z" fill="#f63348" ></path><path d="M16.728 9.592L8.399 4.854c-.49-.28-.933-.233-1.19.047l7.116 7.118 2.403-2.427z" fill="#00f076"></path></svg></span>
                  <span ><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" height="24" fill="none" xmlnsV="https://vecta.io/nano"><path d="M76.291 23.991H3.71c-2.053 0-3.71-1.657-3.71-3.711V3.711C0 1.657 1.656 0 3.71 0h72.581C78.344 0 80 1.657 80 3.711v16.593a3.7 3.7 0 0 1-3.71 3.687z" fill="#343758"></path><g fill="#fff"><path d="M11.245 16.71l-.957 1.634c-.28.467-.863.63-1.353.35-.467-.28-.63-.864-.35-1.354l.7-1.213c.793-.233 1.446-.047 1.96.583zm10.709-2.987h-2.566l-2.893-5.018c-.583.49-1.166 1.914-.35 3.337l3.639 6.301c.28.467.863.63 1.353.35.467-.28.63-.864.35-1.354l-.957-1.68h1.423c.537 0 .98-.443.98-.98.023-.513-.42-.957-.98-.957zm-5.949 0h-3.056l4.223-7.305c.28-.467.117-1.074-.35-1.354a.99.99 0 0 0-1.353.35l-.443.77-.443-.77c-.28-.467-.863-.63-1.353-.35-.467.28-.63.864-.35 1.354l1.003 1.75-3.22 5.578h-2.52c-.537 0-.98.443-.98.98s.443.98.98.98h8.959c.467-.817-.093-1.984-1.096-1.984zm11.082-5.695l1.05-2.894h.513l1.05 2.894h-.467l-.257-.77h-1.143l-.257.77h-.49zm1.726-1.144l-.42-1.237h-.023l-.42 1.237h.863zm2.053.607h.023l.817-2.357h.467l-1.05 2.894h-.513l-1.027-2.894h.467l.817 2.357z"></path><path d="M35.532 8.028h-.443V5.134h.443v2.894zm.654-2.894h.443v2.52h1.306v.373h-1.75V5.134z"></path><path d="M41.388 5.134h1.073c.607 0 .91.327.91.77 0 .373-.233.537-.49.607v.023c.28.023.607.28.607.723s-.303.77-.98.77h-1.12V5.134zm1.027 1.237c.303 0 .513-.187.513-.467 0-.233-.163-.42-.513-.42h-.607v.887h.607zm.047 1.284c.42 0 .583-.187.583-.42 0-.28-.21-.513-.56-.513h-.653v.934h.63zm1.539-2.521h.443v2.52h1.306v.373H44V5.134zm2.263 0h1.82v.373h-1.376v.887h1.283v.373h-1.283v.887h1.4v.373h-1.843V5.134zm4.666 2.941c-.747 0-1.306-.56-1.306-1.494s.56-1.494 1.306-1.494 1.306.56 1.306 1.494-.537 1.494-1.306 1.494zm0-2.59c-.49 0-.863.373-.863 1.097s.373 1.097.863 1.097.863-.373.863-1.097-.35-1.097-.863-1.097z"></path><path d="M55.13 8.028h-.397l-1.47-2.124h-.023v2.124h-.443V5.134h.397l1.47 2.124h.023V5.134h.443v2.894zm-27.903 9.919l2.45-6.978h1.563l2.45 6.978h-1.353l-.583-1.727H29.14l-.583 1.727h-1.33zm4.199-2.73l-.933-2.801h-.047l-.933 2.801h1.913zm3.15-2.498h1.213v.864h.07c.187-.373.583-.934 1.493-.934 1.213 0 2.17.957 2.17 2.684s-.933 2.707-2.146 2.707c-.91 0-1.306-.537-1.493-.91h-.047v2.777h-1.237v-7.188h-.023zm2.426 4.317c.817 0 1.237-.724 1.237-1.704s-.42-1.68-1.237-1.68c-.793 0-1.236.653-1.236 1.68 0 1.004.443 1.704 1.236 1.704zm3.57-4.317h1.213v.864h.07c.187-.373.583-.934 1.493-.934 1.213 0 2.17.957 2.17 2.684s-.933 2.707-2.146 2.707c-.91 0-1.306-.537-1.493-.91h-.047v2.777h-1.236v-7.188h-.023zm2.426 4.317c.817 0 1.236-.724 1.236-1.704s-.42-1.68-1.236-1.68c-.793 0-1.236.653-1.236 1.68 0 1.004.443 1.704 1.236 1.704zm8.469-5.087c-.793 0-1.26.373-1.26.91 0 .583.607.817 1.19.957l.653.163c1.05.257 2.053.793 2.053 2.007 0 1.237-.98 2.054-2.636 2.054-1.633 0-2.66-.77-2.706-2.17h1.237c.047.723.653 1.097 1.447 1.097.816 0 1.4-.397 1.4-1.003 0-.537-.49-.77-1.26-.957l-.793-.21c-1.143-.303-1.867-.864-1.867-1.867 0-1.237 1.097-2.054 2.566-2.054 1.493 0 2.496.84 2.52 2.007h-1.213c-.07-.583-.583-.934-1.33-.934zm6.322 1.727h-1.026v2.707c0 .49.257.607.56.607.163 0 .303-.023.35-.047l.21.957a2.17 2.17 0 0 1-.723.117c-.933.023-1.633-.467-1.633-1.447v-2.894h-.747v-.957h.747v-1.26h1.236v1.26h1.026v.957zm.747 1.68c0-1.61.98-2.707 2.496-2.707 1.54 0 2.496 1.073 2.496 2.707 0 1.61-.98 2.707-2.496 2.707-1.517-.023-2.496-1.097-2.496-2.707zm3.756 0c0-.957-.42-1.727-1.26-1.727s-1.26.77-1.26 1.727.42 1.704 1.26 1.704c.863 0 1.26-.747 1.26-1.704zm2.31-2.637h1.19v.864h.047c.187-.607.7-.957 1.283-.957.14 0 .327.023.443.023v1.143a3.32 3.32 0 0 0-.583-.07c-.677 0-1.166.467-1.166 1.144v3.081h-1.237v-5.228h.023zm3.36 2.637c0-1.61.98-2.707 2.473-2.707 1.283 0 2.38.817 2.38 2.637v.373h-3.64c0 .887.537 1.424 1.33 1.424.537 0 .933-.233 1.097-.677l1.143.14c-.21.91-1.05 1.517-2.263 1.517-1.563-.023-2.52-1.05-2.52-2.707zm3.686-.513c0-.723-.49-1.237-1.19-1.237-.746 0-1.236.56-1.26 1.237h2.45z"></path></g><defs><path id="B" d="M32.079 8.028l1.05-2.894h.513l1.05 2.894h-.467l-.257-.77h-1.143l-.257.77h-.49zm1.75-1.144l-.42-1.237h-.023l-.42 1.237h.863z"></path></defs></svg></span>
              </div>
            </div>
          </div>
          <div style={{ width: "70%" }} className="footer__general">
            <div style={{ display: "flex" }}>
              <div style={{ width: "30%", margin: "20px", fontSize: "14px" }}>
                <p style={{ fontWeight: "bolder" }}>Company</p>
                <p>About us</p>
                <p>Board of directors</p>
                <p>Careers</p>
                <p>Media kit</p>
                <p>Articles</p>
                <p>Ackology - The tech blog</p>
                <p>Partnerships</p>
                <p>Sitemap</p>
              </div>
              <div style={{ width: "30%", margin: "20px", fontSize: "14px" }}>
                <p style={{ fontWeight: "bolder" }}>Support</p>
                <p>Cancellations & refunds</p>
                <p>Customer service</p>
                <p>Downloads</p>
                <p>Unclaimed amount</p>
                <p>IRDAI website</p>
                <p>Other Products</p>
              </div>
              <div style={{ width: "30%", margin: "20px", fontSize: "14px" }}>
                <p style={{ fontWeight: "bolder" }}>Legal</p>
                <p>Whistleblower policy</p>
                <p>Public disclosure</p>
                <p>Financials & disclosures</p>
                <p>Privacy policy</p>
                <p>Terms & conditions</p>
                <p>Offer terms & conditions</p>
                <p>Stewardship code</p>
                <p>Disclaimer</p>
                <p>Anti fraud policy</p>
                <p>Health underwriting philosophy</p>
              </div>
            </div>
            <hr style={{ width: "90%" }} />
            <p
              style={{
                color: "rgb(138, 153, 169)",
                fontWeight: "bold",
                marginLeft: "20px",
              }}
            >
              Articles on insurance
            </p>
            <div style={{ display: "flex" }}>
              <div style={{ width: "30%", margin: "20px", fontSize: "14px" }}>
                <p style={{ fontWeight: "bolder" }}>General articles</p>
                <p>Insurance sector in India</p>
                <p>Types of insurance</p>
                <p>Updated list of traffic rules and fines</p>
                <p>About your vehicle number</p>
                <p>What is a PUC certificate?</p>
                <p>Vehicle registration & re-registration</p>
                <p>New vehicle registration process</p>
                <p>Temporary vehicle registration number</p>
              </div>
              <div style={{ width: "30%", margin: "20px", fontSize: "14px" }}>
                <p style={{ fontWeight: "bolder" }}>Car insurance articles</p>
                <p>Motor insurance</p>
                <p>Car insurance comparison</p>
                <p>Third party vs comprehensive</p>
                <p>Car insurance premium calculator</p>
                <p>IDV in car insurance</p>
                <p>Car insurance claims</p>
                <p>Car insurance claim settlement ratio</p>
                <p>Car insurance: Add-on covers</p>
              </div>
              <div style={{ width: "30%", margin: "20px", fontSize: "14px" }}>
                <p style={{ fontWeight: "bolder" }}>
                  Two-Wheeler insurance articles
                </p>
                <p>IRDAI rules for two wheeler insurance</p>
                <p>Two wheeler insurance comparison</p>
                <p>Third party vs comprehensive</p>
                <p>Bike insurance premium calculator</p>
                <p>IDV in bike insurance</p>
                <p>Two wheeler insurance claims</p>
                <p>Two wheeler claim settlement ratio</p>
                <p>Two wheeler insurance: Add-on covers</p>
              </div>
            </div>
            <hr style={{ width: "90%" }} />
          </div>
        </div>
      </div>
      <div className="grey">
      <div className="last__footer" >
        <p className="last__p">
          <span>CIN: U66000KA2016PLC138288</span>
          <samp className="IRDAI">
            IRDAI Registration No: 157
          </samp>
          <span>Category: Non-Life Insurance</span>
        </p>
        <p style={{ fontSize: "12px" }}>
          The use of images and brands are only for the purpose of indication
          and illustration. ACKO claims no rights on the IP rights of any third
          parties. The ratings are derived from reviews and feedback received
          from Google and Facebook users on their respective platforms. |
          *Savings of upto Rs. 50,000 have been calculated on the IDV of Rs.
          18,00,000 and 0% NCB. Amount saved is in comparison to tariff rates.
          Product name: Private Car Policy - Bundled | UIN:
          IRDAN157RP0014V01201819 | Trade logo displayed above belongs to ACKO
          Technology & Services Pvt Ltd and used by ACKO General insurance
          Limited under License. For more details on risk factors, terms,
          conditions and exclusions, please read the policy wordings carefully
          before concluding a sale.
        </p>
      </div>
      </div>
    </div>
  );
}
