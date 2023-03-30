import service from "./config.services";

const phoneService = () => {
  return service.get("/phones");
};

const phoneDetailsService = (phoneId) => {
  return service.get(`/phones/${phoneId}`);
};

export { phoneService, phoneDetailsService };
