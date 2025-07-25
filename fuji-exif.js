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

const FUJIFILM_TYPE_SIZES = {
  1: 1, // BYTE
  2: 1, // ASCII
  3: 2, // SHORT
  4: 4, // LONG
  5: 8, // RATIONAL (two LONGs)
  7: 1, // UNDEFINED
  9: 4, // SLONG
  10: 8, // SRATIONAL
};

const FUJIFILM_EXIF_VALUE_MAP = {
  "Exif.Fujifilm.Quality": {
    "NORMAL ": "Normal",
    "FINE   ": "Fine",
    "BASIC  ": "Basic",
  },
  "Exif.Fujifilm.Sharpness": {
    128: "Soft",
    130: "Standard",
    132: "Hard",
  },
  "Exif.Fujifilm.WhiteBalance": {
    0: "Auto",
    1: "Auto (White Priority)",
    2: "Auto (Ambience Priority)",
    256: "Daylight",
    512: "Cloudy",
    768: "Daylight Fluorescent",
    769: "Day White Fluorescent",
    770: "White Fluorescent",
    771: "Warm White Fluorescent",
    772: "Living Room Warm White Fluorescent",
    1024: "Incandescent",
    1280: "Flash",
    1536: "Underwater",
    3840: "Kelvin",
    3841: "Custom1",
    3842: "Custom2",
    3843: "Custom3",
    3844: "Custom4",
    3845: "Custom5",
    10000: "Custom Kelvin", // some cameras report direct K temperatures :contentReference[oaicite:1]{index=1}
  },
  "Exif.Fujifilm.Color": {
    0: "Standard Saturation",
    128: "Medium High",
    192: "High",
    224: "Very High",
    256: "Chrome",
    512: "Black & White",
    769: "B&W + Yellow Filter",
    770: "B&W + Red Filter",
    771: "B&W + Green Filter",
    784: "B&W Sepia",
    1280: "Acros",
    1281: "Acros + Red Filter",
    1282: "Acros + Yellow Filter",
    1283: "Acros + Green Filter",
  },
  "Exif.Fujifilm.Tone": {
    0: "Standard",
    128: "Low",
    256: "High",
  },
  "Exif.Fujifilm.Contrast": {
    0: "Normal",
    1: "High",
    2: "Low",
  },
  "Exif.Fujifilm.WhiteBalanceFineTune": (value) => {
    if (Array.isArray(value) && value.length >= 2) {
      const [r, b] = value.map((v) => v / 20); // Convert from 1/20th degree steps
      const rFormatted = r > 0 ? `+${r}` : r;
      const bFormatted = b > 0 ? `+${b}` : b;

      return `R ${rFormatted}, B ${bFormatted}`;
    } else {
      return value;
    }
  },
  "Exif.Fujifilm.NoiseReduction": {
    0: "Off",
    128: "Low",
    256: "Normal",
    384: "High",
  },
  "Exif.Fujifilm.HighIsoNoiseReduction": {
    0: "Off",
    128: "Weak",
    256: "Normal",
    384: "Strong",
  },
  "Exif.Fujifilm.Clarity": (v) => (v / 1000).toFixed(1),
  "Exif.Fujifilm.HighlightTone": (v) => (v / 16).toFixed(1),
  "Exif.Fujifilm.ShadowTone": (v) => (v / 16).toFixed(1),
  "Exif.Fujifilm.PictureMode": {
    0: "Auto",
    1: "Portrait",
    2: "Landscape",
    3: "Macro",
    4: "Sports",
    5: "Night Scene",
    6: "Program AE",
    7: "Natural Light",
    8: "Anti-blur",
    9: "Beach & Snow",
    10: "Sunset",
    11: "Museum",
    12: "Party",
    13: "Flower",
    14: "Text",
    15: "Natural Light & Flash",
    16: "Beach",
    17: "Snow",
    18: "Fireworks",
    19: "Underwater",
    256: "Standard",
    257: "Chrome",
    258: "B&W",
    272: "Astia",
    512: "Provia",
    513: "Velvia",
    514: "Classic Chrome",
    768: "Pro Neg. Standard",
    769: "Pro Neg. Hi",
    1024: "Monochrome",
    1025: "Monochrome + Yellow Filter",
    1026: "Monochrome + Red Filter",
    1027: "Monochrome + Green Filter",
    1280: "Sepia",
  },
  "Exif.Fujifilm.DynamicRange": {
    1: "Standard",
    3: "200%",
    4: "400%",
  },
  "Exif.Fujifilm.DynamicRangeSetting": {
    1: "Auto",
    3: "200%",
    4: "400%",
  },
  // Color Chrome Effect (original)
  "Exif.Fujifilm.ColorChromeEffect": {
    0: "Off",
    32: "Weak",
    64: "Strong",
  },

  // Color Chrome Effect (Blue variant)
  "Exif.Fujifilm.ColorChromeFXBlue": {
    0: "Off",
    32: "Weak",
    64: "Strong",
  },

  // Grain Effect Roughness (similar pattern)
  "Exif.Fujifilm.GrainEffectRoughness": {
    0: "Off",
    32: "Weak",
    64: "Strong",
  },

  // Grain Effect Size
  "Exif.Fujifilm.GrainEffectSize": {
    0: "Off",
    16: "Small",
    32: "Large",
  },
  "Exif.Fujifilm.FilmMode": {
    0: "Provia/Standard",
    256: " Studio Portrait",
    272: " Studio Portrait Enhanced Saturation",
    288: " Studio Portrait Smooth Skin Tone (Astia)",
    304: " Studio Portrait Increased Sharpness",
    512: " Fujichrome (Velvia)",
    768: " Studio Portrait EX",
    1024: " Velvia",
    1280: " Pro Neg. Standard",
    1281: " Pro Neg. Hi",
    1536: " Classic Chrome",
    1792: " Eterna",
    2048: " Classic Negative",
    2304: " Bleach Bypass",
    2560: " Nostalgic Negative",
  },
};

const FUJIFILM_EXIF_FILM_SIMULATION_TAGS = new Set([
  "Exif.Fujifilm.FilmMode",
  "Exif.Fujifilm.GrainEffectRoughness",
  "Exif.Fujifilm.GrainEffectSize",
  "Exif.Fujifilm.ColorChromeEffect",
  "Exif.Fujifilm.ColorChromeFXBlue",
  "Exif.Fujifilm.WhiteBalance",
  "Exif.Fujifilm.WhiteBalanceFineTune",
  "Exif.Fujifilm.DynamicRange",
  "Exif.Fujifilm.HighlightTone",
  "Exif.Fujifilm.ShadowTone",
  "Exif.Fujifilm.Color",
  "Exif.Fujifilm.Sharpness",
  "Exif.Fujifilm.HighIsoNoiseReduction",
  "Exif.Fujifilm.Clarity",
]);

function parseFujifilmExif(exifData) {
  const OFFSET = 12;

  // Check if the MakerNote is present
  if (exifData.MakerNote) {
    const uint8Array = new Uint8Array(exifData.MakerNote);
    const buffer = uint8Array.buffer;
    const view = new DataView(buffer);

    const result = {};

    const tagCount = view.getUint16(0, true); // little endian
    let offset = 2;

    for (let i = 0; i < tagCount; i++) {
      // Check bounds
      if (offset + OFFSET > uint8Array.length) {
        console.warn(
          `Entry ${i} at offset ${offset} is out of bounds; parsing stopped.`
        );
        break;
      }

      const tag = view.getUint16(offset, true);
      const type = view.getUint16(offset + 2, true);
      const count = view.getUint32(offset + 4, true);
      // Check type is valid
      if (!(type in FUJIFILM_TYPE_SIZES)) {
        console.warn(
          `Skipping tag 0x${tag.toString(16)}: invalid type ${type}`
        );
        offset += OFFSET;
        continue;
      }

      const valueOffset = view.getUint32(offset + 8, true);
      const key = FUJIFILM_EXIF_TAGS[tag] || `Unknown_0x${tag.toString(16)}`;

      const size = FUJIFILM_TYPE_SIZES[type] || 1;
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
      offset += OFFSET;
    }

    return result;
  }
}

function normalizeFujifilmExif(exifData) {
  if (!exifData) return;

  const normalized = {};

  for (const tag in exifData) {
    if (!tag.match(/^Exif\.Fujifilm\./)) continue; // Only process Fujifilm tags

    const value = exifData[tag];
    if (value === undefined || value === null) continue;

    // Map known tags to human-readable values
    if (FUJIFILM_EXIF_VALUE_MAP[tag]) {
      const mapping = FUJIFILM_EXIF_VALUE_MAP[tag];

      normalized[tag] =
        typeof mapping === "function"
          ? mapping(value)
          : mapping[value] || value;
    } else {
      normalized[tag] = value;
    }
  }

  return normalized;
}
