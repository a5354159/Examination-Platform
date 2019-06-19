import { useEffect } from "react";
import {
  Layout,
  Breadcrumb,
  Radio,
  Input,
  Form,
  Select,
  Button,
  Tabs
} from "antd";
import { Link, Route, Switch, Redirect } from "dva/router";
import style from "./AddUser.scss";
import { Add } from "../../../components/User/add";
// import  Updata  from "../../../components/User/updata";
const { Content } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;
function AddUser(props) {
  // const obj = {
  //   user_name: "",
  //   user_pwd: ""
  // };
  const { getFieldDecorator, validateFields } = props.form;
  useEffect(() => {}, []);
  const handleSubmit = e => {
    e.preventDefault();
  };
  const obj1 = {
    adduser_name: "",
    adduser_pwd: "",
    values: ""
  };
  const click = () => {
    validateFields(
      ["adduser_name", "adduser_pwd", "addsect"],
      (errors, values) => {
        if (!errors) {
          console.log(values);
          obj1.adduser_name = values.adduser_name;
          obj1.adduser_pwd = values.adduser_pwd;
          obj1.values = values.addsect;
        }
        console.log(obj1);
      }
    );
  };
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <h2 style={{ padding: " 20px 0px", marginTop: "10px" }}>添加用户</h2>
      <Content>
        <div className={style.wrap}>
          <Tabs>
            <TabPane tab="添加用户" key="1">
              <div className="contens">
                <Form onSubmit={handleSubmit}>
                  <div>
                    <Form.Item>
                      {getFieldDecorator("adduser_name", {
                        rules: [{ required: true, message: "请输入账户" }]
                      })(<Input />)}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator("adduser_pwd", {
                        rules: [{ required: true, message: "请输入密码" }]
                      })(<Input />)}
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item>
                      {getFieldDecorator("addsect", {
                        rules: [
                          {
                            required: true,
                            message: "请选择类型"
                          }
                        ]
                      })(
                        <Select
                          placeholder="出题者"
                          style={{ width: 120 }}
                          onChange={values => {
                            console.log(values);
                          }}
                        >
                          <Option value="管理者">管理者</Option>
                          <Option value="出题者">出题者</Option>
                          <Option value="浏览者">浏览者</Option>
                        </Select>
                      )}
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                      <Button type="primary" htmlType="submit" onClick={click}>
                        确定
                      </Button>
                    </Form.Item>
                    <Button>重置</Button>
                  </div>
                </Form>
              </div>
            </TabPane>
            <TabPane tab="更新用户" key="2">
              <div className="contens">
                <Form>
                  <div>
                    <Select
                      defaultValue="管理者"
                      style={{ width: 120 }}
                      loading
                    >
                      <Option value="管理者">管理者</Option>
                      <Option value="出题者">出题者</Option>
                      <Option value="浏览者">浏览者</Option>
                    </Select>
                  </div>
                  <div>
                    <Input />
                    <Input />
                  </div>
                  <div>
                    <Select
                      defaultValue="管理者"
                      style={{ width: 120 }}
                      loading
                    >
                      <Option value="管理者">管理者</Option>
                      <Option value="出题者">出题者</Option>
                      <Option value="浏览者">浏览者</Option>
                    </Select>
                  </div>
                  <div>
                    <Button type="primary">确定</Button>
                    <Button>重置</Button>
                  </div>
                </Form>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <div className={style.wrap}>
          <Radio.Group defaultValue="c">
            <Radio.Button value="c">添加身份</Radio.Button>
          </Radio.Group>
          <div className="contens">
            <Form>
              <div>
                <Input />
              </div>
              <div>
                <Button type="primary">确定</Button>
                <Button>重置</Button>
              </div>
            </Form>
          </div>
        </div>
        <div className={style.wrap}>
          <Radio.Group defaultValue="c">
            <Radio.Button value="c">添加Api接口权限</Radio.Button>
          </Radio.Group>
          <div className="contens">
            <Form>
              <div>
                <Input />
                <Input />
                <Input />
              </div>
              <div>
                <Button type="primary">确定</Button>
                <Button>重置</Button>
              </div>
            </Form>
          </div>
        </div>
        <div className={style.wrap}>
          <Radio.Group defaultValue="c">
            <Radio.Button value="c">添加视图接口权限</Radio.Button>
          </Radio.Group>
          <div className="contens">
            <Form>
              <div>
                <Select defaultValue="管理者" style={{ width: 120 }} loading>
                  <Option value="管理者">管理者</Option>
                  <Option value="出题者">出题者</Option>
                  <Option value="浏览者">浏览者</Option>
                </Select>
              </div>
              <div>
                <Button type="primary">确定</Button>
                <Button>重置</Button>
              </div>
            </Form>
          </div>
        </div>
        <div className={style.wrap}>
          <Radio.Group defaultValue="c">
            <Radio.Button value="c">给身份设置api接口</Radio.Button>
          </Radio.Group>
          <div className="contens">
            <Form>
              <div>
                <Select defaultValue="管理者" style={{ width: 120 }} loading>
                  <Option value="管理者">管理者</Option>
                  <Option value="出题者">出题者</Option>
                  <Option value="浏览者">浏览者</Option>
                </Select>
                <Select defaultValue="管理者" style={{ width: 120 }} loading>
                  <Option value="管理者">管理者</Option>
                  <Option value="出题者">出题者</Option>
                  <Option value="浏览者">浏览者</Option>
                </Select>
              </div>
              <div>
                <Button type="primary">确定</Button>
                <Button>重置</Button>
              </div>
            </Form>
          </div>
        </div>
        <div className={style.wrap}>
          <Radio.Group defaultValue="c">
            <Radio.Button value="c">给身份设置视图权限</Radio.Button>
          </Radio.Group>
          <div className="contens">
            <Form>
              <div>
                <Select defaultValue="管理者" style={{ width: 120 }} loading>
                  <Option value="管理者">管理者</Option>
                  <Option value="出题者">出题者</Option>
                  <Option value="浏览者">浏览者</Option>
                </Select>
                <Select defaultValue="管理者" style={{ width: 120 }} loading>
                  <Option value="管理者">管理者</Option>
                  <Option value="出题者">出题者</Option>
                  <Option value="浏览者">浏览者</Option>
                </Select>
              </div>
              <div>
                <Button type="primary">确定</Button>
                <Button>重置</Button>
              </div>
            </Form>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Form.create()(AddUser);
