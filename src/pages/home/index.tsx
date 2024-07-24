import { Header, Container } from "@components"
import './style.scss'
import { Button, Upload } from "antd"
import { SendOutlined, UploadOutlined } from "@ant-design/icons";
import Intro_img from '@images/home_img.png'
import LineSvg from '@svg/sectionn.svg'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { TabSwitch } from "@ui";
import axios from "axios";
function Home() {
  const [fileList, setFileList] = useState([]);

  const handleFileUpload = (file:any) => {
    setFileList(file)
  };

  async function handleSubmit() {
    try {
      const response = await axios.post('http://45.130.148.142:5625/api/ResumeCheck', {ResumeFile: fileList}, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response);
      if(response?.data?.isSuccess == true){
          toast.success('Resume yuborildi, Sizga email oqrali boglanamiz')
      }else{
          toast.error('Resume yuborilmadi, Iltimos qayta uruning')
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }


  return (
    <>
    <ToastContainer/>
      <Header/>
      
      <main>
          <section id="intro">
             <Container>
                <div className="intro-wrapper">
                  <div className="intro-left">
                      <h2>Resume yuboring va biz siz bilan bo'g'lanamiz</h2>
                      <p>Sizga ish kerakmi ? Resume yuboring va biz siz yuborgan resumeni ko'rib chiqib, siz bilan bo'g'lanamiz. Sizga email orqali javobni yetkazamiz.</p>
                      <div className="resume_send_btns">
                        <Upload 
                           className="upload"
                            accept=".pdf"
                            beforeUpload={file => {
                              handleFileUpload(file);
                            }}
                            showUploadList={false}
                          >
                            <Button icon={<UploadOutlined />} size="large">Yuklash</Button>
                          </Upload>
                        <Button disabled={fileList.length == 0} onClick={() => handleSubmit()} size="large" icon={<SendOutlined/>} iconPosition="end">
                          Yuborish
                        </Button>
                      </div>
                  </div>
                  <div className="intro-right">
                    <img src={Intro_img} alt="Intro_img" />
                  </div>
                </div>
             </Container>
             <img className="lineSvg" src={LineSvg} alt="" />
          </section>

          <section id="about">
               <Container>
                    <div className="about-top">
                        <h2>Shaxsiy rezyume va LinkedIn murabbiyi</h2>
                        <p>O'z martabalarida oldinga siljish uchun Resume Worded vositalari to'plamidan foydalangan 1 milliondan ortiq tajribali mutaxassislar, bitiruvchilar va talabalarga qo'shiling.</p>
                    </div>
                    <TabSwitch/>
               </Container>
          </section>
          
      </main>
    </>
  )
}

export default Home