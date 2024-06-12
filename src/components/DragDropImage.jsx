import React, { useState } from "react";
import CloudUpload from "../assets/images/cloud-upload.png";

function DragDropImage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id="picture-upload-container">
      <label htmlFor="profile-picture-input">
        Profile Picture
        <div id="profile-upload-wrapper">
          <input
            type="file"
            id="profile-picture-input"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
          <div id="img-view" className="flex-center-column">
            {selectedImage ? (
              <img src={selectedImage} alt="Selected" id="uploaded-picture" />
            ) : (
              <>
                <img src={CloudUpload} alt="" id="profile-picture-default" />
                <p id="upload-instruction">
                  Drag and drop or click here to upload image
                </p>
              </>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}

export default DragDropImage;
