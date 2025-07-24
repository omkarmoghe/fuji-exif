const SKIP_TAGS = ["MakerNote", "UserComment", "Thumbnail"];

const dropZone = document.getElementById("image-dropzone");
const imageData = document.getElementById("image-data");
const thumbnail = document.getElementById("image-thumbnail");

// Prevent default drag behaviors
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropZone.addEventListener(eventName, (e) => e.preventDefault());
});

// Add visual feedback
["dragenter", "dragover"].forEach((eventName) => {
  dropZone.addEventListener(eventName, () => dropZone.classList.add("hover"));
});

["dragleave", "drop"].forEach((eventName) => {
  dropZone.addEventListener(eventName, () =>
    dropZone.classList.remove("hover")
  );
});

function updateImageData(exifData) {
  // Clear previous data
  imageData.innerHTML = "";

  // Add each EXIF property as a table row
  for (const tag in exifData) {
    const value = exifData[tag];
    if (SKIP_TAGS.includes(tag)) continue;
    if (value === undefined || value === null) continue;

    const row = document.createElement("tr");
    const keyCell = document.createElement("td");
    keyCell.textContent = tag.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase();

    const valueCell = document.createElement("td");
    valueCell.textContent = value.toString();

    row.appendChild(keyCell);
    row.appendChild(valueCell);
    imageData.appendChild(row);
  }
}

function updateThumbnail(exifData) {
  if (exifData.thumbnail) {
    thumbnail.src = URL.createObjectURL(exifData.thumbnail.blob);
    thumbnail.hidden = false;
  } else {
    thumbnail.hidden = true;
  }
}

function updateFujifilmData(exifData) {
  // Clear previous data
  const fujifilmData = document.getElementById("fujifilm-data");
  fujifilmData.innerHTML = "";

  // Add each Fujifilm EXIF property as a table row
  Object.keys(exifData)
    .sort()
    .forEach((tag) => {
      const value = exifData[tag];
      if (value === undefined || value === null) return;

      const row = document.createElement("tr");
      const keyCell = document.createElement("td");
      keyCell.textContent = tag
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .toUpperCase();

      const valueCell = document.createElement("td");
      valueCell.textContent = value.toString();

      row.appendChild(keyCell);
      row.appendChild(valueCell);
      fujifilmData.appendChild(row);
    });
}

function processFile(file) {
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const arrayBuffer = event.target.result;

      // Pass it to exif-js
      const exifData = EXIF.readFromBinaryFile(arrayBuffer);

      updateThumbnail(exifData);
      updateImageData(exifData);

      const fujifilmExifData = parseFujifilmExif(exifData);
      const normalizedFujifilmData = normalizeFujifilmExif(fujifilmExifData);
      updateFujifilmData(normalizedFujifilmData);
    };

    reader.readAsArrayBuffer(file);
  } else {
    alert("Please select an image file.");
  }
}

// Handle dropped files
dropZone.addEventListener("drop", (e) => {
  const file = e.dataTransfer.files[0];
  processFile(file);
});

// Handle click to open file dialog
dropZone.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.style.display = "none";

  input.onchange = (e) => {
    const file = e.target.files[0];
    processFile(file);
  };

  document.body.appendChild(input);
  input.click();
  document.body.removeChild(input);
});
