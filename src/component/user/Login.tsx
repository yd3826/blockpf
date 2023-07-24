import React, {useRef, useState} from "react";
import {Button, Card, Space, Tabs} from "antd";
import {LoginForm, ProFormInstance, ProFormText} from "@ant-design/pro-form";
import {LockOutlined, UserOutlined,} from '@ant-design/icons';
import logo from '../../logo.svg'
import Register from "./form/Register";

type LoginType = 'SDUCAS' | 'account';

const items = [
    {label: '账号密码登录', key: 'account'}
];
export const Login = (props: any) => {
    const formRef = useRef<ProFormInstance>()
    const [loginType, setLoginType] = useState<LoginType>("account")

    return (
        <Card
            style={{width: "400px", textAlign: "center", margin: "0 auto"}}>
            <LoginForm
                formRef={formRef}
                logo={logo}
                title="用户登录"
                subTitle="山东大学在线评测系统"
                actions={
                    <></>
                }
                submitter={{
                    resetButtonProps: false,
                    render: (prop, def) => {
                        if (loginType !== 'SDUCAS')
                            return <Button type={"primary"} block>
                                Login </Button>
                        return <></>
                    },
                }}
            >
                <Tabs activeKey={loginType} onChange={(activeKey) => {
                    setLoginType(activeKey as LoginType);
                }} items={items}></Tabs>
                <ProFormText
                    name="username"
                    fieldProps={{
                        size: 'large',
                        prefix: <UserOutlined className={'prefixIcon'}/>,
                        onPressEnter: () => {
                            formRef.current?.validateFieldsReturnFormatValue?.()?.then((value) => {
                                props.login(value)
                            })
                        }
                    }}
                    placeholder={'请输入用户名'}
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名!',
                        },
                    ]}
                />
                <ProFormText.Password
                    name="password"
                    fieldProps={{
                        size: 'large',
                        prefix: <LockOutlined className={'prefixIcon'}/>,
                        onPressEnter: () => {
                            formRef.current?.validateFieldsReturnFormatValue?.()?.then((value) => {
                                props.login(value)
                            })
                        }
                    }}
                    placeholder={'请输入密码'}
                    rules={[
                        {
                            required: true,
                            message: '请输入密码！',
                        },
                    ]}
                />
                <div style={{
                    textAlign: "right", marginBottom: 10
                }}>
                    <Space size={3}>
                        <Register button={<Button type={"link"} size={"small"}>注册</Button>}/>
                        <Button type={"link"} size={"small"}>忘记密码</Button>
                    </Space>
                </div>
            </LoginForm>
        </Card>
    )
}





