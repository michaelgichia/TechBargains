/**
*
* ShareButtons
*
*/

import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import SvgIcon from "material-ui/SvgIcon";
import "!!style-loader!css-loader!./style.css";

function ShareButtons({ banner }) {
  console.log({ banner });
  return (
    <di className="share-button">
      <p>
        Hey guest, welcome to <span className="first">Deals</span>
        <span className="second">Expert</span>! Please share this.
      </p>
      <div className="share-button-wrapper">
        <div>
          <RaisedButton
            href={`https://www.facebook.com/dialog/share?app_id=395774060457462&display=popup&href=deals-expert.com/product/${banner.id}`}
            className="facebook-btn"
            backgroundColor="#3b5998"
            labelColor="#fff"
            labelStyle={{ textTransform: "none", fontWeight: 700 }}
            label="Facebook"
            style={style}
            labelPosition="after"
            icon={<FacebookIcon />}
          />
        </div>
        <div>
          <RaisedButton
            className="twitter-btn"
            backgroundColor="#1da1f2"
            labelColor="#fff"
            labelStyle={{ textTransform: "none", fontWeight: 700 }}
            label="Tweet"
            style={style}
            labelPosition="after"
            icon={<TwitterIcon />}
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              banner.name
            )}`}
            target="_blank"
          />
        </div>
      </div>
    </di>
  );
}

ShareButtons.propTypes = {};

export default ShareButtons;

const style = {
  margin: 12
};

const FacebookIcon = props =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="#fff"
    stroke="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>;

const TwitterIcon = props =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <path
      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
      fill="#fff"
      stroke="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>;
