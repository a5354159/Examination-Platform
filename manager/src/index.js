import dva from 'dva';
import './index.css';
import 'antd/dist/antd.css';
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/user').default);
app.model(require('./models/users').default);
app.model(require('./models/questions').default);
// app.model(require('./models/examlist').default);
app.model(require('./models/example').default);
// app.model(require('./models/ClassMange').default);
// app.model(require('./models/Marking').default);
app.model(require('./models/test_questions').default);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
