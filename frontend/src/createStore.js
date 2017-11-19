import LoginPageStore from "./LoginPage/LoginPageStore";
import RegistrationPageStore from "./RegistrationPage/RegistrationPageStore";
import AddPaymentStore from "./AddPayment/AddPaymentStore";

export default routingStore => ({
  routing: routingStore,
  loginPageStore: new LoginPageStore(routingStore),
  registrationPageStore: new RegistrationPageStore(routingStore),
  addPaymentStore: new AddPaymentStore(routingStore)
})