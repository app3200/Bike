import { Addbtn, Removebtn, Buynow } from "./Buttons";
import { Link } from "react-router-dom";

export const Plancards2 = ({
  prc3,
  prc2,
  prc1,
  remove,
  add,
  removeval,
  addval,
  accmon,
  acc3yr,
  acc2yr,
  acc1yr,
  setValue,
  final,
}) => {
  return (
    <div className="plans">
      <div className="cplans">
        <div className="tplans">
          <div className="mtitle">
            <h2>Comprehensive Plan</h2>
            <h5>
              Standard policy covering damages to third-party and to your own
              bike
            </h5>
          </div>
          <div className="mimg">
            <img
              src="data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0)'%3E %3Cpath d='M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4314 0 -4.57764e-05 13.4315 -4.57764e-05 30C-4.57764e-05 46.5685 13.4314 60 30 60Z' fill='%23F6F7FB'/%3E %3Cpath d='M37.7001 9.46839L28.0155 15.4429C26.7628 16.2138 26.0883 17.6593 26.281 19.1047C26.9555 23.5856 29.3646 33.1738 38.1337 37.5583C39.0973 38.0401 40.2055 38.0401 41.1691 37.5583C49.89 33.1738 52.3473 23.5856 53.0218 19.1047C53.2146 17.6593 52.54 16.2138 51.2873 15.4429L41.5546 9.42021C40.3982 8.74566 38.9046 8.74566 37.7001 9.46839Z' fill='%23FFA52F'/%3E %3Cpath d='M39.6274 14.4792V33.2701C39.6274 34.7156 41.3138 35.4865 42.422 34.571C45.0719 32.3547 48.8783 27.8738 50.9019 19.5865C51.0947 18.8638 50.7574 18.0929 50.131 17.7074L42.2292 12.9856C41.0729 12.3593 39.6274 13.1783 39.6274 14.4792Z' fill='%23FFBF74'/%3E %3Cpath d='M28.7022 18.8705L31.0563 17.9074C31.0563 17.9074 30.0576 14.6615 32.6258 14.8399C35.194 14.9825 36.2284 16.1953 36.2284 17.408C36.2284 18.5851 33.7672 18.9061 33.7672 18.9061L29.2729 20.0832L34.0882 21.5813C34.6233 21.7597 34.873 22.2947 34.6946 22.8298C34.5163 23.2935 34.0169 23.5431 33.5532 23.4005L29.9149 22.3661C29.9149 22.3661 27.6321 20.975 28.7022 18.8705Z' fill='%23343758'/%3E %3Cpath d='M16.218 18.8705L13.8638 17.9074C13.8638 17.9074 14.8625 14.6615 12.2944 14.8399C9.72617 14.9825 8.69176 16.1953 8.69176 17.408C8.69176 18.5851 11.1529 18.9061 11.1529 18.9061L15.6473 20.0476L10.8319 21.5457C10.2969 21.724 10.0472 22.259 10.2255 22.7941C10.4039 23.2578 10.9033 23.5075 11.367 23.3648L15.0409 22.3661C15.0052 22.3661 17.288 20.975 16.218 18.8705Z' fill='%23343758'/%3E %3Cpath d='M25.813 37.8464C25.813 42.1981 19.1072 42.1981 19.1072 37.8464V47.7268C19.1072 49.5816 20.6053 51.0797 22.4601 51.0797C24.3149 51.0797 25.813 49.5816 25.813 47.7268V37.8464Z' fill='%23343758'/%3E %3Cpath d='M30.0576 25.6832C30.0576 25.6832 31.9837 23.4718 30.985 21.6883C29.9506 19.9048 28.5238 18.4781 28.4882 17.8004C28.4168 17.1226 29.6296 15.7315 28.8448 14.8755C28.0601 14.0194 25.4206 12.771 22.4957 12.771C19.5709 12.771 16.967 14.0194 16.1466 14.8755C15.3619 15.7315 16.539 17.087 16.5033 17.8004C16.432 18.4781 15.0052 19.9048 14.0065 21.6883C12.9721 23.4718 14.9339 25.6832 14.9339 25.6832C11.902 27.0387 13.6141 32.9954 13.6141 32.9954C13.6141 38.5598 16.0039 41.8414 17.6447 43.4465V38.6668C17.6447 37.8108 18.3224 37.1331 19.1785 37.1331V44.6236V37.8108C19.1785 42.0197 25.4919 42.1268 25.8843 38.2031V37.0974C26.7404 37.0974 27.4181 37.7751 27.4181 38.6312V43.4465C29.0589 41.8771 31.4487 38.5955 31.4487 32.9954C31.3774 32.9954 33.0895 27.0387 30.0576 25.6832Z' fill='%239364ED'/%3E %3Cpath d='M27.2398 21.0107C25.9913 21.5101 23.7085 22.3305 22.4244 22.3305C21.1403 22.3305 18.8575 21.5101 17.6091 21.0107C17.1811 20.8324 16.753 21.1891 16.7887 21.6171C16.9314 23.5432 17.4307 25.2554 18.3225 26.1471C19.3569 27.1815 22.3888 27.6095 22.3888 27.6095C22.3888 27.6095 25.4206 27.1815 26.455 26.1471C27.3468 25.2554 27.8818 23.5432 27.9888 21.6171C28.0958 21.1534 27.6678 20.8324 27.2398 21.0107Z' fill='white'/%3E %3Cpath d='M19.1072 35.7064C19.1072 35.7064 22.4601 33.6376 25.813 35.7064C25.813 35.7064 25.4919 33.4949 22.4601 33.4949C19.4282 33.4949 19.1072 35.7064 19.1072 35.7064Z' fill='white'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0'%3E %3Crect width='60' height='60' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E"
              alt="vehicle"
            />
          </div>
        </div>
        <div className="splans">
          <div className="inpdivplan">
            <div className="drinp">
              <input
                type="radio"
                className="rinp"
                id="d23yr"
                value={prc3}
                name="plans"
                onInput={(e) => {
                  acc3yr();
                  setValue(e.target.value);
                }}
              />
            </div>
            <div className="ldrinp">
              <label htmlFor="d23yr">3 year plan</label>
            </div>
            <div className="tprice">
              <p className="p1">₹{prc3}</p>
              <p className="p2">+GST</p>
            </div>
          </div>
          <div className="inpdivplan">
            <div className="drinp">
              <input
                type="radio"
                className="rinp"
                value={prc2}
                id="d22yr"
                name="plans"
                onInput={(e) => {
                  setValue(e.target.value);
                  acc2yr();
                }}
              />
            </div>
            <div className="ldrinp">
              <label htmlFor="d22yr">2 year plan</label>
            </div>
            <div className="tprice">
              <p className="p1">₹{prc2}</p>
              <p className="p2">+GST</p>
            </div>
          </div>
          <div className="inpdivplan">
            <div className="drinp">
              <input
                type="radio"
                value={prc1}
                className="rinp"
                id="d21yr"
                name="plans"
                onInput={(e) => {
                  setValue(e.target.value);
                  acc1yr();
                }}
              />
            </div>
            <div className="ldrinp">
              <label htmlFor="d21yr">1 year plan</label>
            </div>
            <div className="tprice">
              <p className="p1">₹{prc1}</p>
              <p className="p2">+GST</p>
            </div>
          </div>
        </div>
        <div className="valplans">
          <div className="insurev">
            <p>Insured Value: </p>
            <p id="tval">₹21,759</p>
          </div>
          <div className="insuret">
            <p>
              Amount you'll receive in case of total damage or theft of your
              bike
            </p>
          </div>
        </div>
        <div className="valplans">
          <div className="acci">
            <p>
              Personal Accident Cover @ ₹{accmon} .
              <img
                src="data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M7 13.9937C3.318 13.9937 0.333336 11.0091 0.333336 7.32707C0.333336 3.64507 3.318 0.6604 7 0.6604C10.682 0.6604 13.6667 3.64507 13.6667 7.32707C13.6667 11.0091 10.682 13.9937 7 13.9937ZM6.33334 6.6604V10.6604H7.66667V6.6604H6.33334ZM6.33334 3.99373V5.32707H7.66667V3.99373H6.33334Z' fill='%238788A0'/%3E %3C/svg%3E"
                alt="i"
              />
            </p>
            <p>
              By not adding this, you agree that you already have the mandated
              PA cover of 15 lakhs
            </p>
          </div>
          {!add ? (
            <Addbtn remove={remove} addval={addval} />
          ) : (
            <Removebtn removeval={removeval} remove={remove} />
          )}
        </div>
        <div className="buydiv">
          <Link to="/checkout">
            <Buynow final={final} />
          </Link>
        </div>
      </div>
    </div>
  );
};
