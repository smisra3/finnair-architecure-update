
import initialActions from "./LoginPage.action";
import reducer from "./LoginPage.reducer";
import saga from "./LoginPage.saga";
import { mapStateToProps, mapDispatchToProps } from './LoginPage';

export default {
  key: "login",
  reducer,
  saga,
  initialActions,
  mapStateToProps,
  mapDispatchToProps
};
