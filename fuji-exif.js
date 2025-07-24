const SKIP_TAGS = ["MakerNote", "UserComment"];

const FUJIFILM_EXIF_TAGS = {
  0: "Exif.Fujifilm.Version",
  16: "Exif.Fujifilm.SerialNumber",
  4096: "Exif.Fujifilm.Quality",
  4097: "Exif.Fujifilm.Sharpness",
  4098: "Exif.Fujifilm.WhiteBalance",
  4099: "Exif.Fujifilm.Color",
  4100: "Exif.Fujifilm.Tone",
  4101: "Exif.Fujifilm.ColorTemperature",
  4102: "Exif.Fujifilm.Contrast",
  4106: "Exif.Fujifilm.WhiteBalanceFineTune",
  4107: "Exif.Fujifilm.NoiseReduction",
  4110: "Exif.Fujifilm.HighIsoNoiseReduction",
  4111: "Exif.Fujifilm.Clarity",
  4112: "Exif.Fujifilm.FlashMode",
  4113: "Exif.Fujifilm.FlashStrength",
  4128: "Exif.Fujifilm.Macro",
  4129: "Exif.Fujifilm.FocusMode",
  4130: "Exif.Fujifilm.FocusArea",
  4131: "Exif.Fujifilm.FocusPoint",
  4139: "Exif.Fujifilm.FocusPrioritySetting",
  4141: "Exif.Fujifilm.FocusSetting",
  4142: "Exif.Fujifilm.ContinuousFocusSetting",
  4144: "Exif.Fujifilm.SlowSync",
  4145: "Exif.Fujifilm.PictureMode",
  4146: "Exif.Fujifilm.ExposureCount",
  4147: "Exif.Fujifilm.EXRAuto",
  4148: "Exif.Fujifilm.EXRMode",
  4160: "Exif.Fujifilm.ShadowTone",
  4161: "Exif.Fujifilm.HighlightTone",
  4164: "Exif.Fujifilm.DigitalZoom",
  4165: "Exif.Fujifilm.LensModulationOptimizer",
  4167: "Exif.Fujifilm.GrainEffectRoughness",
  4168: "Exif.Fujifilm.ColorChromeEffect",
  4169: "Exif.Fujifilm.MonochromaticColorWC",
  4171: "Exif.Fujifilm.MonochromaticColorMG",
  4172: "Exif.Fujifilm.GrainEffectSize",
  4173: "Exif.Fujifilm.CropMode",
  4174: "Exif.Fujifilm.ColorChromeFXBlue",
  4176: "Exif.Fujifilm.ShutterType",
  4352: "Exif.Fujifilm.Continuous",
  4353: "Exif.Fujifilm.SequenceNumber",
  4355: "Exif.Fujifilm.DriveSetting",
  4357: "Exif.Fujifilm.PixelShiftShots",
  4435: "Exif.Fujifilm.PanoramaAngle",
  4436: "Exif.Fujifilm.PanoramaDirection",
  4609: "Exif.Fujifilm.AdvancedFilter",
  4624: "Exif.Fujifilm.FinePixColor",
  4864: "Exif.Fujifilm.BlurWarning",
  4865: "Exif.Fujifilm.FocusWarning",
  4866: "Exif.Fujifilm.ExposureWarning",
  5120: "Exif.Fujifilm.DynamicRange",
  5121: "Exif.Fujifilm.FilmMode",
  5122: "Exif.Fujifilm.DynamicRangeSetting",
  5123: "Exif.Fujifilm.DevelopmentDynamicRange",
  5124: "Exif.Fujifilm.MinFocalLength",
  5125: "Exif.Fujifilm.MaxFocalLength",
  5126: "Exif.Fujifilm.MaxApertureAtMinFocal",
  5127: "Exif.Fujifilm.MaxApertureAtMaxFocal",
  5131: "Exif.Fujifilm.AutoDynamicRange",
  5154: "Exif.Fujifilm.ImageStabilization",
  5157: "Exif.Fujifilm.SceneRecognition",
  5169: "Exif.Fujifilm.Rating",
  5174: "Exif.Fujifilm.ImageGeneration",
  5176: "Exif.Fujifilm.ImageNumber",
  5187: "Exif.Fujifilm.DRangePriority",
  5188: "Exif.Fujifilm.DRangePriorityFixed",
  5189: "Exif.Fujifilm.DRangePriorityAuto",
  16389: "Exif.Fujifilm.FaceElementSelected",
  16640: "Exif.Fujifilm.FacesDetected",
  16643: "Exif.Fujifilm.FacePositions",
  16896: "Exif.Fujifilm.NumberFaceElements",
  16897: "Exif.Fujifilm.FaceElementTypes",
  16899: "Exif.Fujifilm.FaceElementPositions",
  17026: "Exif.Fujifilm.FaceRecInfo",
  32768: "Exif.Fujifilm.FileSource",
  32770: "Exif.Fujifilm.OrderNumber",
  32771: "Exif.Fujifilm.FrameNumber",
  61440: "Exif.Fujifilm.FujiIFD",
  61441: "Exif.Fujifilm.RawImageFullWidth",
  61442: "Exif.Fujifilm.RawImageFullHeight",
  61443: "Exif.Fujifilm.BitsPerSample",
  61447: "Exif.Fujifilm.StripOffsets",
  61448: "Exif.Fujifilm.StripByteCounts",
  61450: "Exif.Fujifilm.BlackLevel",
  61451: "Exif.Fujifilm.GeometricDistortionParams",
  61452: "Exif.Fujifilm.WB_GRBLevelsStandard",
  61453: "Exif.Fujifilm.WB_GRBLevelsAuto",
  61454: "Exif.Fujifilm.WB_GRBLevels",
  61455: "Exif.Fujifilm.ChromaticAberrationParams",
  61456: "Exif.Fujifilm.VignettingParams",
};

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

function parseFujifilmExif(exifData) {
  const TYPE_SIZES = {
    1: 1, // BYTE
    2: 1, // ASCII
    3: 2, // SHORT
    4: 4, // LONG
    5: 8, // RATIONAL (two LONGs)
    7: 1, // UNDEFINED
    9: 4, // SLONG
    10: 8, // SRATIONAL
  };

  // Check if the MakerNote is present
  if (exifData.MakerNote) {
    const uint8Array = new Uint8Array(exifData.MakerNote);
    const buffer = uint8Array.buffer;
    const view = new DataView(buffer);

    const result = {};

    const tagCount = view.getUint16(0, true); // little endian
    let offset = 2;

    for (let i = 0; i < tagCount; i++) {
      const tag = view.getUint16(offset, true);
      const type = view.getUint16(offset + 2, true);
      const count = view.getUint32(offset + 4, true);
      const valueOffset = view.getUint32(offset + 8, true);

      const key = FUJIFILM_EXIF_TAGS[tag] || `Unknown_0x${tag.toString(16)}`;

      const size = TYPE_SIZES[type] || 1;
      const totalBytes = size * count;

      let value;

      // If the value fits in 4 bytes, it's stored directly
      if (totalBytes <= 4) {
        switch (type) {
          case 3: // SHORT
            value = view.getUint16(offset + 8, true);
            break;
          case 4: // LONG
            value = view.getUint32(offset + 8, true);
            break;
          case 9: // SLONG
            value = view.getInt32(offset + 8, true);
            break;
          case 2: // ASCII (up to 4 bytes)
            value = String.fromCharCode(
              ...uint8Array.slice(offset + 8, offset + 8 + count)
            ).replace(/\0/g, "");
            break;
          default:
            value = valueOffset;
        }
      } else {
        // Otherwise read from offset
        let start = valueOffset;
        if (type === 2) {
          // ASCII string
          value = String.fromCharCode(
            ...uint8Array.slice(start, start + count)
          ).replace(/\0/g, "");
        } else if (type === 3) {
          // SHORT array
          value = [];
          for (let j = 0; j < count; j++) {
            value.push(view.getUint16(start + j * 2, true));
          }
        } else if (type === 4) {
          // LONG array
          value = [];
          for (let j = 0; j < count; j++) {
            value.push(view.getUint32(start + j * 4, true));
          }
        } else {
          // Just return raw bytes
          value = [...uint8Array.slice(start, start + totalBytes)];
        }
      }

      result[key] = value;
      offset += 12;
    }

    return result;
  }
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
      const fxf = parseFujifilmExif(exifData);
      debugger; // TODO
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
