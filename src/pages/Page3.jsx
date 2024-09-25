import React, { useState, useRef, useCallback } from "react";
import "react-image-crop/dist/ReactCrop.css";
import ReactCrop from "react-image-crop";
import { useDropzone } from "react-dropzone";

export default function Page3() {
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [files, setFiles] = useState(null); // Ensure files state is null initially
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setFiles(URL.createObjectURL(file));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accepted: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    onDrop,
  });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState("");
  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  // Function to generate the cropped image on canvas and display it
  const getCroppedImage = () => {
    if (!completedCrop || !imageRef.current || !canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const image = imageRef.current;
    const cropped = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = cropped.width;
    canvas.height = cropped.height;

    ctx.drawImage(
      image,
      cropped.x * scaleX,
      cropped.y * scaleY,
      cropped.width * scaleX,
      cropped.height * scaleY,
      0,
      0,
      cropped.width,
      cropped.height
    );

    const croppedImageUrl = canvas.toDataURL("image/png");
    setCroppedImageUrl(croppedImageUrl);
  };

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed gray",
          padding: "20px",
          width: "300px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop an image file here, or click to select one</p>
      </div>

      {/* Only render crop component if a file has been selected */}
      {files && (
        <ReactCrop
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
          onComplete={(c) => setCompletedCrop(c)}
        >
          <img ref={imageRef} src={files} alt="Crop me" />
        </ReactCrop>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }} />

      <button onClick={getCroppedImage}>Show Cropped Image</button>

      {/* Display the cropped image */}
      {croppedImageUrl && (
        <div>
          <h3>Cropped Image:</h3>
          <img src={croppedImageUrl} alt="Cropped Image" />
        </div>
      )}
    </div>
  );
}
