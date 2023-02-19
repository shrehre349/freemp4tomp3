const fileInput = document.getElementById("file-upload");
const outputDiv = document.getElementById("output");
const downloadButton = document.getElementById("download-btn");

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const audioBlob = new Blob([reader.result], { type: "audio/mpeg" });
    const audioUrl = URL.createObjectURL(audioBlob);
    outputDiv.innerHTML = `<audio controls><source src="${audioUrl}" type="audio/mpeg"></audio>`;
    outputDiv.style.display = "block";
    downloadButton.href = audioUrl;
  };

  if (file) {
    reader.readAsArrayBuffer(file);
  }
});
