export const APP_NAME = "faysk.dev";
export const APP_VERSION = "0.1-alpha";
export const BUILD_NAME = "cyberpunk-build";

export const MODULE_STATUSES = {
  available: "available",
  unsupported: "unsupported",
  permissionRequired: "permission-required"
};

export const MODULE_GROUPS = [
  { id: "browser", label: "Browser", icon: "🌐" },
  { id: "system", label: "System", icon: "🖥️" },
  { id: "gpu", label: "GPU", icon: "🎮" },
  { id: "fingerprint", label: "Fingerprint", icon: "🧠" },
  { id: "network", label: "Network", icon: "📡" },
  { id: "geolocation", label: "Geolocation", icon: "📍" },
  { id: "media", label: "Media", icon: "🎤" },
  { id: "telemetry", label: "Telemetry", icon: "⚡" },
  { id: "security", label: "Security", icon: "🔐" },
  { id: "experimental", label: "Experimental", icon: "🧪" }
];
