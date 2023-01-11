import axios from "axios";

export const resetDatabase = async () => {
  await axios.get("/api/ingredients/base/seed/");
  await axios.get("/api/ingredients/flavours/seed");
  await axios.get("/api/ingredients/toppings/seed");
  await axios.get("/api/teacardsinfo/seed");
  await axios.get("/api/registration/seed");
};
