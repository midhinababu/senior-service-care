import axios from "axios";
const commonAPI = async (http, url, reqHead, reqBody) => {
  const reqConfiq = {
    method: http,
    url,
    headers: reqHead,
    data: reqBody,
  };
  return await axios(reqConfiq)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
export default commonAPI;
