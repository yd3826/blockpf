import {useForm} from "antd/es/form/Form";
import {useEffect} from "react";
import {ModalForm} from "@ant-design/pro-form";
import {message} from "antd";
import CApi from "../../../Utils/API/c-api";
import ItemUsername from './item/ItemUsername';
import ItemPassword from './item/ItemPassword';

const Register = (props: any) => {
    const [form] = useForm()

    useEffect(() => {
        if (props.token !== undefined)
            form.setFieldsValue({username: props.username})
    }, [props, form])

    return (
        <ModalForm<any>
            title={props.token !== undefined ? "注册并绑定" : "用户注册"}
            trigger={props.button}
            autoFocusFirstInput
            modalProps={{
                maskClosable: false,
                destroyOnClose: true,
                width: 500,
                okText: "提交"
            }}
            form={form}
            // onFinish={async (values) => {
            //                     if (props.token !== undefined) {
            //                         Object.assign(values, {token: props.token})
            //                         return CApi.thirdPartyRegister(values).then((res: any) => {
            //                             CApi.login(values).then(() => {
            //                                 props.history.push(UrlPrefix + "/home")
            //             })
            //             message.success('注册成功');
            //             return true;
            //         })
            //     } else {
            //         return CApi.register(values).then((res: any) => {
            //             CApi.login(values).then(() => {
            //                 props.history.push(UrlPrefix + "/home")
            //             })
            //             message.success('注册成功');
            //             return true;
            //         })
            //     }
            // }}
        >
            <ItemUsername ExistCheck={true} editable={props.token === undefined}/>
            <ItemPassword/>
            {/*<ItemEmail needVerify={true} getEmail={() => {*/}
            {/*    return form.validateFields(["email"]).then((data: any) => {*/}
            {/*        return Promise.resolve(data.email)*/}
            {/*    }).catch(() => Promise.reject())*/}
            {/*}}/>*/}
        </ModalForm>
    )
}

export default Register;
// export default withRouter(Register)