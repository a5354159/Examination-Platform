import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from '@/views/Main/Index';
import LoginPage from '@/views/Login/Index';
import {connect} from 'dva'

//引入国际化
import { addLocaleData ,IntlProvider } from 'react-intl'; 
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import enUS from '@/lang/en-US.js'
import zhCN from '@/lang/zh-CN.js'
const localMap={
  en:enUS,
  zh:zhCN
}
addLocaleData([...en,...zh])

const mapStateToProps = state=>{
  return {
    locale: state.global.locale
  }
}

const RouterView = connect(mapStateToProps)(({locale,history})=>{
  return <IntlProvider locale={locale} messages={localMap[locale]}>
  <Router history={history}>
    <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
    
  </IntlProvider>

})


function RouterConfig({ history }) {
  return (
    <RouterView history={history}/>
  );
}

export default RouterConfig;
