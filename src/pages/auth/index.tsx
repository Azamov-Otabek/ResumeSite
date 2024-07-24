import { Header } from "@components";
import "./style.scss";
import { CheckOutlined, LockOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { ProFormText } from "@ant-design/pro-components";
import { Button, Form } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  async function handleSubmit(value: any){
    console.log(value);
  }

  const navigate = useNavigate()
  return (
    <>
      <Header />
      <main className="login">
        <div className="form-wrapper">
          <div className="form-left">
            <h1>Hisobingizga kiring</h1>
            <div>
              <h2>
                <CheckOutlined style={{color: 'green'}}/>
                Rezyume va LinkedIn sharhlariga kiring
              </h2>
              <p>
                Oldingi rezyume yoki LinkedIn sharhlaridagi fikr-mulohazalarni
                qayta ko'rib chiqing va qanday ball olganingizni ko'ring.
              </p>
            </div>
            <div>
              <h2>
              <CheckOutlined style={{color: 'green'}}/>
                Yangi rezyume yoki LinkedIn sharhini oling
              </h2>
              <p>
              Boshqa ko'rib chiqish uchun rezyumeni yoki LinkedIn profilingizni qayta yuklang!
              </p>
            </div>
            <div>
              <h2>
              <CheckOutlined style={{color: 'green'}}/>
                Rezyume o'q nuqtasi yaratuvchisiga kiring
              </h2>
              <p>
              Oʻq nuqtalaringizni qoʻshing va boshqaring yoki eng yaxshi rezyumelardagi rezyume nuqtalaridan ilhom oling.
              </p>
            </div>
          </div>
          <div className="form-right">
              <Form onFinish={(value) => handleSubmit(value)}>
                  <ProFormText
                  initialValue={'azamov521o@mail.ru'}
                  name="email"
                  placeholder="Email kiriting"
                  rules={[{
                    required: true,
                    message: 'Email manzilini kiriting',
                  },
                  {
                    type: 'email',
                    message: 'Emailni togri formatda kiriting',
                  },
                  ]}
                  fieldProps={{
                    prefix: <MailOutlined/>,
                    style: { width: '100%', height: '50px' }
                  }}

                  />
                  <ProFormText.Password
                  initialValue={'@12348afk3'}
                  name='password'
                  placeholder="Parolingizni kiriting"
                  rules={[{
                    required: true,
                    message: 'Parolni kiriting',
                  }]}
                  fieldProps={{
                    prefix: <LockOutlined/>,
                    style: { width: '100%', height: '50px' }
                  }}
                  />
                  <Button onClick={() => navigate('/dashboard')} htmlType="submit">Tizimga kirish</Button>
              </Form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
