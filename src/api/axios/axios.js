import axios from "axios";

const FetchAPI = async (address) => {
  const endpoint = `https://pokeapi.co/api/v2/${address}`;

  try {
    let response = await axios({
      method: "get",
      url: endpoint,
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default FetchAPI;
