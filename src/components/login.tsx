import React from "react";
import Link from "./link";
import Password from "./password"
import Title from "./title";
import Button from "./button";
import Dialog from "./dialog";
import TextInput from "./text-input";
import Flex from "./flex";


const Login = () => {
    return (
        <div className="App-header">
            <Dialog>
                <Title title='Вход'/>
                <TextInput label="Логин" placeholder='Введите логин'/>
                <Password placeholder="Введите пароль" label='Пароль'/>
                <Flex direction={'column'} align={'center'}>
                    <Button text="Войти"/>
                    <Link to="/register" text='Зарегистрироваться'/>
                </Flex>
            </Dialog>
        </div>
    );
}
export default Login;