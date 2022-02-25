import { useSelector } from "react-redux";
import { Pricingdiv } from "./pricing_div";
import "./Summary_purchased.css";

export const Summary_purchsed = () => {
  const vehicle = useSelector((e) => e.vehicleD);

  const user = useSelector((e) => e.personalD);

  const phone = useSelector((e) => e.phone);

  // console.log(vehicle)
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sepr",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateObj = new Date();
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, "0");
  const year = dateObj.getFullYear();
  const output = month + " " + (Number(day) + 3) + "  " + year;

  return (
    <div id="_next">
      <div className="ackologo">
        <div className="flexlogo">
          <div className="ackologoimage">
            <a href="https://www.acko.com">
              <div className="actualogo">
                <img
                  src="https://container-app.ackoassets.com/am/myaccount_frontend/4972dde433c8123ca0821f57ef2e9a5c.svg"
                  alt="logo"
                  className="logoimage"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="infobox_outer">
        <div className="inner_infobox">
          <div className="inner_s_infobox">
            <div className="inner_flex_infobox">
              <div className="bike_policy_data">
                <div id="ctask">
                  <div>
                    <div className="num1">1</div>
                    <p className="Cp">Enter Details</p>
                  </div>
                  <div>
                    <div className="num1">2</div>
                    <p className="Cp">Verify Phone</p>
                  </div>
                  <div>
                    <div className="rnum">3</div>
                    <p className="Cp">Review & pay</p>
                  </div>
                </div>

                <div className="verify_info_text_div">
                  <p className="verify_info_text">
                    Please verify the details. All the information below will
                    show up on your policy
                  </p>
                </div>

                <div className="bike_bikeowner_details_outer_div">
                  <div className="bike_details_outer">
                    <div className="bike_details_inner">
                      <p className="bike_details_text">Bike Details</p>
                    </div>
                    <div style={{ width: "100%" }}>
                      <div className="title_data_div">
                        <p className="title_text_info">Bike Number</p>
                        <p className="data_text_info">{vehicle.vehicle_no}</p>
                      </div>
                    </div>

                    <div style={{ width: "100%" }}>
                      <div className="title_data_div">
                        <p className="title_text_info">Make/Model</p>
                        <p className="data_text_info">{vehicle.vehicle_name}</p>
                      </div>
                    </div>

                    <div style={{ width: "100%" }}>
                      <div className="title_data_div">
                        <p className="title_text_info">Registration Year</p>
                        <p className="data_text_info">{vehicle.reg_year}</p>
                      </div>
                    </div>

                    <div style={{ width: "100%" }}>
                      <div className="title_data_div">
                        <p className="title_text_info">Policy Start Data</p>
                        <p className="data_text_info">{output}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hrline"></div>

                  <div className="bike_owner_details_outer">
                    <div className="bike_details_inner">
                      <p className="bike_details_text">Bike Owner Details</p>
                    </div>
                    <div style={{ width: "100%" }}>
                      <div className="title_data_div">
                        <p className="title_text_info">Name</p>
                        <p className="data_text_info">{user.name}</p>
                      </div>
                    </div>

                    <div style={{ width: "100%" }}>
                      <div className="title_data_div">
                        <p className="title_text_info">Email address</p>
                        <p className="data_text_info">{user.email}</p>
                      </div>
                    </div>

                    <div style={{ width: "100%" }}>
                      <div className="title_data_div">
                        <p className="title_text_info">Mobile Number</p>
                        <p className="data_text_info">{phone}</p>
                      </div>
                    </div>

                    <div style={{ width: "100%" }}>
                      <div className="title_data_div">
                        <p className="title_text_info">Pincode</p>
                        <p className="data_text_info">{user.pin_code}</p>
                      </div>
                    </div>
                  </div>
                  <div className="kxpoxR"></div>

                  <div className="updates_on_wsp_outer">
                    <div className="left_updated_text">
                      <div className="unticked"></div>
                      <p style={{ marginLeft: "10px" }}>
                        Get policy on WhatsApp
                      </p>
                    </div>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path
                        d="M13 6.333c0 3.497-2.857 6.332-6.382 6.332a6.4 6.4 0 01-3.085-.787L0 13l1.152-3.398a6.268 6.268 0 01-.915-3.27C.237 2.835 3.093 0 6.618 0 10.143 0 13 2.836 13 6.333zM6.617 1.01c-2.958 0-5.365 2.388-5.365 5.324 0 1.165.38 2.243 1.022 3.12l-.67 1.977 2.062-.654c.847.556 1.862.88 2.951.88 2.959 0 5.366-2.388 5.366-5.324 0-2.935-2.407-5.323-5.366-5.323zM9.841 7.79c-.04-.064-.145-.103-.3-.18a24.343 24.343 0 00-1.07-.505c-.143-.052-.248-.078-.352.078a8.616 8.616 0 01-.495.609c-.091.104-.182.117-.339.04-.156-.079-.66-.242-1.258-.77a4.67 4.67 0 01-.87-1.075c-.092-.155-.01-.24.068-.317.07-.07.157-.181.235-.272.078-.09.104-.154.156-.258.052-.104.026-.194-.013-.273-.039-.078-.351-.84-.482-1.152-.13-.31-.26-.259-.352-.259-.091 0-.195-.012-.3-.012a.573.573 0 00-.416.193c-.143.156-.548.53-.548 1.295 0 .764.56 1.502.639 1.605.079.103 1.082 1.722 2.672 2.343 1.591.621 1.591.414 1.878.388.287-.027.926-.375 1.055-.737.131-.364.131-.676.092-.74z"
                        fill="#151619"
                      ></path>
                    </svg>
                  </div>

                  <div className="price_button_div">
                    <button className="Paybutton">Pay ₹{vehicle.i_amt}</button>
                    <div className="trustedby_div">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="thums_up_svg"
                      >
                        <circle cx="12" cy="12" r="12" fill="#fff"></circle>
                        <path
                          d="M9.5 10.25s3.091-.538 4.294-4.244c.312-.03.625.047.883.217.258.17.443.422.523.711.28.896-.628 3.627-.628 3.627l1.896-.029c.225-.004.447.04.651.129a1.5 1.5 0 01.53.383c.144.164.248.357.303.564.056.207.063.423.02.633l-.722 3.534a1.421 1.421 0 01-.51.826c-.265.21-.597.33-.942.334L11.564 17a2.028 2.028 0 01-.748-.128 1.959 1.959 0 01-.64-.392 1.855 1.855 0 01-.434-.595 1.78 1.78 0 01-.16-.709L9.5 10.25z"
                          fill="#B9C8FC"
                        ></path>
                        <path
                          d="M9.75 10.001L6 10.007 6.111 17H9.75v-7z"
                          fill="#5A68E7"
                        ></path>
                        <path d="M7 17h2.419v-7H7v7z" fill="#E5E9FE"></path>
                      </svg>
                      <div className="trusted_by_indians_text">
                        Trusted by 4.5 Crore Indians
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricingdiv_bike">
                <div style={{ width: "96%" }}>
                  <Pricingdiv price={vehicle.i_amt} />
                  <div className="inputfeild_div_outer">
                    <div style={{ width: "100%" }}>
                      <div className="get_off_flex_div">
                        <p className="get_off_text">
                          Bundled Offer - Get Rs 200 off when you buy your car
                          insurance
                        </p>
                        <svg
                          width="72"
                          height="72"
                          viewBox="0 0 72 72"
                          fill="none"
                        >
                          <g clip-path="url(#bundle-offer_svg__clip0)">
                            <path
                              d="M35.518 70.235c18.732 0 33.917-15.185 33.917-33.917S54.25 2.4 35.518 2.4 1.6 17.585 1.6 36.318c0 18.732 15.186 33.917 33.918 33.917z"
                              fill="#F6F7FB"
                            ></path>
                            <path
                              d="M25.31 39.281a1.317 1.317 0 100-2.634 1.317 1.317 0 000 2.634z"
                              fill="#fff"
                            ></path>
                            <path
                              d="M22.895 34.237c-3.682 2.001-6.244 5.604-6.885 9.687l-2.802 17.772 13.69 2.161.56-3.522 3.443-5.284-6.405-1.04a4.61 4.61 0 01-3.842-5.284l2.241-14.49z"
                              fill="#288D56"
                            ></path>
                            <path
                              d="M44.59 55.772H26.738a6.252 6.252 0 01-6.244-6.245V22.31a6.252 6.252 0 016.244-6.245H44.59a6.252 6.252 0 016.244 6.245v27.218a6.252 6.252 0 01-6.244 6.245z"
                              fill="#9FDF93"
                            ></path>
                            <path
                              d="M36.904 26.952h-8.966c-.8 0-1.44-.64-1.44-1.441 0-.8.64-1.441 1.44-1.441h8.966c.8 0 1.441.64 1.441 1.44 0 .801-.64 1.442-1.44 1.442zM32.821 35.197h-4.883c-.8 0-1.44-.64-1.44-1.44 0-.801.64-1.442 1.44-1.442h4.883c.8 0 1.441.64 1.441 1.441 0 .8-.64 1.441-1.44 1.441z"
                              fill="#fff"
                            ></path>
                            <path
                              d="M19.773 44.884l8.565-4.083s1.922 1.681 1.201 3.683c-.72 2.001-8.886 8.966-8.886 8.966s-2.722-1.922-.88-8.566z"
                              fill="#288D56"
                            ></path>
                            <path
                              d="M26.097 68.58l-13.209-2.081c-.64-.08-1.12-.72-.96-1.361l.8-5.204c.08-.64.72-1.12 1.361-.96l13.209 2.08c.64.08 1.12.721.96 1.362l-.8 5.203c-.16.56-.72 1.041-1.36.961z"
                              fill="#9FDF93"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="bundle-offer_svg__clip0">
                              <path
                                fill="#fff"
                                transform="translate(1.6 2.4)"
                                d="M0 0h68v68H0z"
                              ></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <div className="input_car_number">
                        <input
                          placeholder="Enter car number"
                          id="carNumber"
                          type="text"
                          name="carNumber"
                          autocapitalize="true"
                          className="inputfeild_carnumber"
                        />
                        <p className="enter_car_number_text">
                          Enter car number
                        </p>
                      </div>

                      <div className="expirydate">
                        <div
                          style={{ marginTop: "1.5rem" }}
                          className="input_car_number"
                        >
                          <input
                            placeholder="Previous policy expiry date"
                            id="policyExpiry"
                            type="text"
                            name="policyExpiry"
                            readonly=""
                            autocapitalize="true"
                            className="inputfeild_carnumber"
                          />
                          <p className="enter_car_number_text">
                            Previous policy expiry date
                          </p>
                        </div>

                        <div className="calendericon">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            className="calender_logo"
                          >
                            <path
                              d="M2.22 1.867h7.298c.596 0 1.043.447 1.043 1.043v7.298c0 .595-.447 1.042-1.043 1.042H2.221a1.018 1.018 0 01-1.043-1.042V2.91c-.074-.596.447-1.043 1.043-1.043zM7.88.75v2.16M3.71.75v2.16M1.252 4.92h9.234"
                              stroke="#000"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <button className="submit_button">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
