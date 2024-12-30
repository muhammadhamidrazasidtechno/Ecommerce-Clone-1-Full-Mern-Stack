const ImageToBase64 = (image) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);

  const data = new Promise((resolve, reject) => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
  return data;
};

export default ImageToBase64;
