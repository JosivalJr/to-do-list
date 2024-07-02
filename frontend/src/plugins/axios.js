import axios from "axios";

export default async function HTTPReq(
  method,
  url,
  { headers, params, auth },
  data
) {
  try {
    const response = await axios({
      method,
      url,
      headers,
      data,
      auth,
      params,
      mode: "cors",
      timeout: 1000 * 60 * 12,
    });

    if (response) {
      const { status, data } = response;
      return { status, data };
    } else {
      throw new Error(response);
    }
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      return error;
    }
  }
}
