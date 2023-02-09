import axios from "axios";
export const GET_PROPIEDADES = "GET_PROPIEDADES";

export const getPropiedaes = () => {
    return async (dispatch) => {
      try {
        const propiedades = await axios.get("http://localhost:3001/propiedade");
        dispatch({
          type: GET_PROPIEDADES,
          payload: propiedades.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };