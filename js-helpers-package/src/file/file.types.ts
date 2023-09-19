export interface IFileTypes {
  extension: string;
  mimeType: string;
}

export interface IFileValidator {
  isVaild: boolean;
  reason: string;
}

export const fileTypes: Array<IFileTypes> = [
  { extension: "txt", mimeType: "text/plain" },
  { extension: "csv", mimeType: "text/csv" },
  { extension: "html", mimeType: "text/html" },
  { extension: "xml", mimeType: "text/xml" },
  { extension: "css", mimeType: "text/css" },
  { extension: "json", mimeType: "application/json" },
  { extension: "js", mimeType: "application/javascript" },
  { extension: "jpg", mimeType: "image/jpeg" },
  { extension: "jpeg", mimeType: "image/jpeg" },
  { extension: "png", mimeType: "image/png" },
  { extension: "gif", mimeType: "image/gif" },
  { extension: "bmp", mimeType: "image/bmp" },
  { extension: "svg", mimeType: "image/svg+xml" },
  { extension: "tiff", mimeType: "image/tiff" },
  { extension: "mp3", mimeType: "audio/mpeg" },
  { extension: "wav", mimeType: "audio/wav" },
  { extension: "ogg", mimeType: "audio/ogg" },
  { extension: "aac", mimeType: "audio/aac" },
  { extension: "flac", mimeType: "audio/flac" },
  { extension: "mp4", mimeType: "video/mp4" },
  { extension: "avi", mimeType: "video/x-msvideo" },
  { extension: "mov", mimeType: "video/quicktime" },
  { extension: "mkv", mimeType: "video/x-matroska" },
  { extension: "webm", mimeType: "video/webm" },
  { extension: "pdf", mimeType: "application/pdf" },
  {
    extension: "docx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
  {
    extension: "xlsx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  {
    extension: "pptx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  },
];
