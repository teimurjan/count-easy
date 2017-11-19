import LoginPageStore from "./LoginPage/LoginPageStore";

export default routingStore => ({
  routing: routingStore,
  loginPageStore: new LoginPageStore(routingStore)
})