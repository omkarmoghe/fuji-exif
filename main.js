const SKIP_TAGS = ["MakerNote", "UserComment", "Thumbnail"];

const dropZone = document.getElementById("image-dropzone");
const preview = document.getElementById("image-preview");
const fujifilmData = document.getElementById("fujifilm-data");
const imageData = document.getElementById("image-data");

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

function updatePreview(file) {
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.hidden = false;
  } else {
    preview.hidden = true;
  }
}

function updateImageData(exifData) {
  imageData.innerHTML = "";

  if (exifData) {
    // Add each EXIF property as a table row
    Object.keys(exifData)
      .sort()
      .forEach((tag) => {
        const value = exifData[tag];
        if (SKIP_TAGS.includes(tag)) return;
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
        imageData.appendChild(row);
      });
  } else {
    const noDataText = document.createElement("p");
    noDataText.textContent = "No EXIF data found.";
    imageData.appendChild(noDataText);
  }
}

function updateFujifilmData(exifData) {
  fujifilmData.innerHTML = "";

  if (exifData) {
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
  } else {
    const noDataText = document.createElement("p");
    noDataText.textContent = "No Fujifilm EXIF data found.";
    fujifilmData.appendChild(noDataText);
  }
}

function processFile(file) {
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const arrayBuffer = event.target.result;

      // Pass it to exif-js
      const exifData = EXIF.readFromBinaryFile(arrayBuffer);

      updatePreview(file);
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
