import LoginPageStore from "./LoginPage/LoginPageStore";
import RegistrationPageStore from "./RegistrationPage/RegistrationPageStore";
import AddPaymentStore from "./AddPayment/AddPaymentStore";
import PaymentsCalendarStore from "./PaymentsCalendar/PaymentsCalendarStore";
import AppStore from "./App/AppStore";

export default routingStore => {
  const appStore = new AppStore(routingStore);
  const loginPageStore = new LoginPageStore(routingStore, appStore.setLoggedIn);
  const registrationPageStore = new RegistrationPageStore(routingStore);
  const paymentsCalendarStore = new PaymentsCalendarStore(routingStore);
  const addPaymentStore = new AddPaymentStore(routingStore, paymentsCalendarStore.fetchPayments);
  return {
    routing: routingStore,
    loginPageStore,
    registrationPageStore,
    paymentsCalendarStore,
    addPaymentStore,
    appStore
  };
}