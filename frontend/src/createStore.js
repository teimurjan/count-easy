import LoginPageStore from "./LoginPage/LoginPageStore";
import RegistrationPageStore from "./Registration/RegistrationPageStore";

export default routingStore => ({
  routing: routingStore,
  loginPageStore: new LoginPageStore(routingStore),
  registrationPageStore: new RegistrationPageStore(routingStore)
})