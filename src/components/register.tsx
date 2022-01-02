import React from "react";
import Link from "./link";
import Password from "./password"
import Title from "./title";
import Button from "./button";
import Dialog from "./dialog";
import TextInput from "./text-input";

const register = () => {
    return (
        <div className="App-header">
            <Dialog>
                <Title title='Регистрация'/>
                <TextInput label="Имя" placeholder='Введите имя'/>
                <TextInput label="Фамилия" placeholder='Введите фамилию'/>
                <TextInput label="E-mail" placeholder='Введите e-mail'/>
                <Password placeholder="Введите пароль" label='Пароль'/>
                <Password placeholder="Повторите пароль" label='Повторите пароль'/>
                <Button color={"red"} text="Зарегистрироваться"/>
                <Link to="/login" text='Вернуться' />
            </Dialog>
        </div>
    );
}

export default register;