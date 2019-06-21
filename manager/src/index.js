import dva from 'dva';
// 引入全局样式
import './index.css';
// 引入antd样式
import 'antd/dist/antd.css';
// 引入全局loading
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger'
import {message} from 'antd';

// 1. Initialize
const app = dva(createLoading());

// 2. Plugins
app.use({
  onAction: createLogger(),
  onError: (e)=>{
    message.error(e.message, /* duration */3);
  }
});

// 3. Model
app.model(require('./models/global').default);
app.model(require('./models/user').default);
app.model(require('./models/users').default);
app.model(require('./models/questions').default);
app.model(require('./models/examlist').default);
app.model(require('./models/example').default);
app.model(require('./models/ClassMange').default);
app.model(require('./models/Marking').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
