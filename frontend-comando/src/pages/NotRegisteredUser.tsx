import React from "react";
import { UserForm } from "../components/UserForm/UserForm";
import { LoginMutation } from "../containers/LoginMutation";
import { RegisterMutation } from "../containers/RegisterMutation";
import { Context } from "../Context";

export const NotRegisteredUser = () => {
  //@ts-ignore
  const { activateIsAuth } = React.useContext(Context);
  return (
    <>
      <RegisterMutation>
        {(register: any, { data, loading, error }: any) => {
          console.log(loading);
          console.log(error);
          console.log(data);
          const onSubmit = ({ email, password }: any) => {
            const input = { email, password };
            const variables = { input };
            register({ variables })
              .then(({ data }: any) => {
                console.log("response de register");
                console.log(data);
                const { signup } = data;
                activateIsAuth(signup);
              })
              .catch((e: any) => {
                console.log(e);
              });
          };
          const errorMsg = error && "El usuario ya existe o hay algun problema";
          return (
            <UserForm
              disable={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title={"Registrate"}
            />
          );
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login: any, { data, loading, error }: any) => {
          console.log(loading);
          console.log(error);
          console.log(data);
          const onSubmit = ({ email, password }: any) => {
            const input = { email, password };
            const variables = { input };
            login({ variables })
              .then(({ data }: any) => {
                console.log("response de login");
                console.log(data);
                const { login } = data;
                activateIsAuth(login);
              })
              .catch((e: any) => {
                console.log(e);
              });
          };
          const errorMsg =
            error && "El contrasena no es correcta o el usuario no existe";
          return (
            <UserForm
              error={errorMsg}
              disable={loading}
              onSubmit={onSubmit}
              title={"Iniciar sesion"}
            />
          );
        }}
      </LoginMutation>
    </>
  );
};
