import React from "react";
import styles from "./ImageUpload.module.css";

export const ImageUpload = ({ handleImageChange, imageSrc }) => {
  const handleFileInputClick = () => {
    document.getElementById("fileInput").click(); // 숨겨진 파일 입력 클릭
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadContent} onClick={handleFileInputClick}>
        {imageSrc ? (
          // 업로드된 이미지가 있을 때
          <img src={imageSrc} alt="Uploaded" className={styles.uploadedImage} />
        ) : (
          // 업로드된 이미지가 없을 때 기본 UI 표시
          <>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b0d753b1c1e9e213bce2ccb859528db02c5329ad746ab482b88e721665f0819?placeholderIfAbsent=true&apiKey=8c4d60d027684d439facb424f5fad44b"
              className={styles.uploadIcon}
              alt="이미지 업로드"
            />
            <p className={styles.uploadText}>
              판매 물품에 대한 사진을 등록해 주세요.
            </p>
          </>
        )}
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files && event.target.files[0]; // 파일 선택 확인
            if (file) {
              handleImageChange(file); // 부모 컴포넌트로 파일 전달
            } else {
              console.error("No file selected.");
            }
          }}
          style={{ display: "none" }} // 숨김 처리
        />
      </div>
    </div>
  );
};

export default ImageUpload;
