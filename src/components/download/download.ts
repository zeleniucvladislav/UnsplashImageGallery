const downloadFile = (file: any, fileName: any) => {
  const element = document.createElement("a");
  const image = new Blob([file]);
  element.href = URL.createObjectURL(image);
  element.download = fileName;
  document.body.appendChild(element);
  element.click();
  element.parentNode!.removeChild(element);
};

export default downloadFile;
