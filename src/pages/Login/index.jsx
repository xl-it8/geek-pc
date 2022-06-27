import React, { useState } from 'react'
import './index.scss'
//所有资源都可以用import方式引入 包括图片
import logo from '../../assets/logo.png'
import { useDispatch } from 'react-redux'
//编程式导航
import { useNavigate } from 'react-router-dom'
import { login } from '@/store/actions'
import { Card, Form, Input, Button, Checkbox } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const onFinish = (values) => {
    dispatch(login({ mobile: values.mobile, code: values.code }))
    navigate('/home')
  }
  return (
    <div className='login'>
      <Card className='card-wrapper'>
        <img src={logo} alt="" className='logo' />
        <Form
          onFinish={onFinish}
          footer={
            <Button block type='submit' color='primary' size='large'>
              提交
            </Button>
          }
          initialValues={
            {
              mobile: '13911111111',
              code: '246810',
              remeber: true,
            }
          }
          validateTrigger={['onBlur', 'onFocus']}
        >
          <Form.Item
            name='mobile'
            rules={[{ required: true, message: '手机号不能为空' }, {
              pattern: /^1[3-9]\d{9}$/,
              message: '手机号格式不对',
              validateTrigger: 'obBlur'
            }]}
          >
            <Input onChange={console.log} placeholder='请输入用户名' />
          </Form.Item>
          <Form.Item
            name='code'
            extra={
              <div >
                {!visible ? (
                  <EyeInvisibleOutline onClick={() => setVisible(true)} />
                ) : (
                  <EyeOutline onClick={() => setVisible(false)} />
                )}
              </div>
            }
            rules={[{ required: true, message: '验证码不能为空' }, {
              pattern: /^\d{6}$/,
              message: '验证码格式不对',
              validateTrigger: 'obBlur'
            }]}
          >
            <Input onChange={console.log} placeholder='请输入验证码' type={visible ? 'text' : 'password'} />
          </Form.Item>
          <Form.Item name='remeber' valuePropName='checked'>
            <Checkbox>我已阅读</Checkbox>
          </Form.Item>
        </Form>

      </Card>

    </div>
  )
}
