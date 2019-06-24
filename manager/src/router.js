import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "@/views/Main/Index";
import LoginPage from "@/views/Login/Index";
import yamen from "@/views/Athod/403";
import Errors from "@/views/Athod/404";

import { connect } from "dva";
//添加国际化
import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";
import { IntlProvider, addLocaleData } from "react-intl";
import zhCN from "@/lang/zh-CN.js";
import enUS from "@/lang/en-US.js";
// import indexPage from './views/IndexPage';
// import Home from './views/home';
function RouterConfig({ history }) {
  return <RouterView history={history} />;
}
const localMap = {
  en: enUS,
  zh: zhCN
};
addLocaleData([...en, ...zh]);
const mapStateToProps = state => {
  return {
    locale: state.global.locale
  };
};
const RouterView = connect(mapStateToProps)(({ locale, history }) => {
  return (
    <IntlProvider locale={locale} messages={localMap[locale]}>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/403" component={yamen} />
          <Route path="/404" component={Errors} />
          <Route path="/" component={IndexPage} />
        </Switch>
      </Router> 
    </IntlProvider>
  );
});

export default RouterConfig;
