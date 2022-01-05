import React from "react";
import Link from "./link";
import Password from "./password"
import Title from "./title";
import Button from "./button";
import Dialog from "./dialog";
import TextInput from "./text-input";
import Flex from "./flex";

const register = () => {
    return (
        <Dialog>
            <Title title='Регистрация'/>
            <TextInput label="Имя" placeholder='Введите имя'/>
            <TextInput label="Фамилия" placeholder='Введите фамилию'/>
            <TextInput label="E-mail" placeholder='Введите e-mail'/>
            <Password placeholder="Введите пароль" label='Пароль'/>
            <Password placeholder="Повторите пароль" label='Повторите пароль'/>
            <Flex direction='column' align='center'>
                <Button text="Зарегистрироваться"/>
                <Link to="/login" text='Вернуться'/>
            </Flex>
        </Dialog>
    );
}

export default register;