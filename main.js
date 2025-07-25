const SKIP_TAGS = ["MakerNote", "UserComment", "thumbnail", "undefined"];

const dropZone = document.getElementById("image-dropzone");
const preview = document.getElementById("image-preview");
const fujifilmDataContainer = document.getElementById(
  "fujifilm-data-container"
);
const fujifilmData = document.getElementById("fujifilm-data");
const fujifilmFilmSimulationData = document.getElementById(
  "fujifilm-film-simulation-data"
);
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

function buildExifRow(tag, value) {
  const row = document.createElement("div");
  row.classList.add("exif-row");

  const keyCell = document.createElement("span");
  keyCell.classList.add("exif-key", "text-gray");
  keyCell.textContent = tag
    .split(".")
    .pop()
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toUpperCase();

  const valueCell = document.createElement("span");
  valueCell.classList.add("exif-value");
  valueCell.textContent = value.toString();

  row.append(keyCell, valueCell);

  return row;
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

        const row = buildExifRow(tag, value);
        imageData.appendChild(row);
      });
  } else {
    const noDataText = document.createElement("p");
    noDataText.textContent = "No EXIF data found.";
    imageData.appendChild(noDataText);
  }
}

function updateFujifilmData(exifData) {
  fujifilmFilmSimulationData.innerHTML = "";
  fujifilmData.innerHTML = "";

  if (exifData) {
    fujifilmDataContainer.style.display = "contents";

    // Add each Fujifilm EXIF property as a table row
    Object.keys(exifData)
      .sort()
      .forEach((tag) => {
        const value = exifData[tag];
        if (value === undefined || value === null) return;

        const row = buildExifRow(tag, value);

        if (FUJIFILM_EXIF_FILM_SIMULATION_TAGS.has(tag)) {
          fujifilmFilmSimulationData.appendChild(row);
        } else {
          fujifilmData.appendChild(row);
        }
      });
  } else {
    fujifilmDataContainer.style.display = "none";
    console.log("No Fujifilm EXIF data found.");
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
  let input = document.getElementById("image-input");
  if (!input) {
    input = document.createElement("input");
    input.id = "image-input";
    input.type = "file";
    input.accept = "image/*";
    input.hidden = true;

    input.onchange = (e) => {
      const file = e.target.files[0];
      processFile(file);
    };

    document.body.appendChild(input);
  }

  input.click();
});
