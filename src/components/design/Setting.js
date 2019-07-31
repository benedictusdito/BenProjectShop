import React from "react";
const urlImgBase =
  "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";

const Setting = ({ color, upperText, lowerText }) => {
  return (
    <div className="card card-bg-light container">
      <h3 className="text-center">Setting</h3>
      <h4>Change T-Shirt Color</h4>
      <div className="tshirt-color">
        <img
          onClick={color}
          src={`${urlImgBase}white.png`}
          alt="white-tshirt"
          id="white"
        />
        <img
          onClick={color}
          src={`${urlImgBase}black.png`}
          alt="black-tshirt"
          id="black"
        />
        <img
          onClick={color}
          src={`${urlImgBase}grey.png`}
          alt="grey-tshirt"
          id="grey"
        />
        <img
          onClick={color}
          src={`${urlImgBase}blue.png`}
          alt="blue-tshirt"
          id="blue"
        />
        <img
          onClick={color}
          src={`${urlImgBase}red.png`}
          alt="red-tshirt"
          id="red"
        />
      </div>
      <hr />
      {/* <h4>Meme Text</h4>
      <input
        onChange={upperText}
        // onChange={lowerText}
        type="text"
        className="form-control form control-sm mb-2"
        placeholder="Upper Text"
      />
      <input
        onChange={lowerText}
        type="text"
        className="form-control form control-sm"
        placeholder="Lower Text"
      />
      <hr /> */}
      {/* <h4>Upload Image</h4>
      <div className="form-group">
        <input type="file" className="form-control-file mb-2" />
      </div>
      <hr />
      <h4> Text Size</h4>
      <input type="range" min="0" max="100" />
      <hr /> */}
      <h4>Size Chart</h4>
      <select className="form-control form-control-sm-mb-2">
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>
      <hr />
      <button className="btn btn-primary btn-sm mb-2">Save</button>
    </div>
  );
};

export default Setting;
