import React from "react";
import styled from "styled-components";

interface PropsUploadImages {
  imagesSelected: (images: any) => void;
  multipleFile?: boolean
}

const UploadImage = ({ imagesSelected, multipleFile }: PropsUploadImages) => {

  const handleSelectedNewImages = (e: any) => {
    const TMP_selectedFiles = e.target.files;

    const selectedFileArray = Array.from(TMP_selectedFiles);

    const imagesArray = selectedFileArray.map((image: any) => {
      return URL.createObjectURL(image);
    });

    imagesSelected({ blobs: imagesArray, files: e.target.files })
  };


  return (
    <Container className="container-upload-image">
      <WrapperInput className="wrapper-input-upload-images">
        <input
          className="custom-file-input"
          name="newImage"
          type="file"
          multiple={multipleFile}
          accept=".jpg, .png"
          onChange={(e) => handleSelectedNewImages(e)}
        />
      </WrapperInput>
    </Container>
  );
};

export default UploadImage;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const WrapperInput = styled.div`

input {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px auto;
      color: transparent;
      width: 150px;
      height: 35px;
      border: none;
    }
    
    input::-webkit-file-upload-button {
        visibility: hidden;
    }
    
    input::before {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        content: "Upload image";
        white-space: nowrap;
        text-align: center;
        padding: 5px 0px;
        width: auto;
        height: auto;
        outline: none;
        border: none;
        border-radius: 5px;
        margin: 5px 0px;
        color: #ffffff;
        font-size: 13px;    
        font-weight: bold;
        padding: 5px 0px;
        background-color: var(--button-color);
    }
`