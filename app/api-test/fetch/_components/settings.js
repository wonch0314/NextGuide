export const setHeaders = (clientId, contentsType = "default") => {
  const contentsTypeValue = {
    default: "application/json; charset=utf-8",
    blob: "blob",
    multipart: "multipart/form-data",
  };

  const headers = {
    "devpro-client-id": clientId,
    "Content-Type": contentsTypeValue[contentsType],
  };

  return headers;
};
