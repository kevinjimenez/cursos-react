import { UserForm } from "../components/UserForm/UserForm";
import { RegisterMutation } from "../containers/RegisterMutation";
import Context from "../Context";

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        //   @ts-ignore
        ({ activateIsAuth }) => {
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
                      .then(activateIsAuth)
                      .catch((e: any) => {
                        console.log(e);
                      });
                  };
                  const errorMsg =
                    error && "El usuario ya existe o hay algun problema";
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
              <UserForm onSubmit={activateIsAuth} title={"Iniciar sesion"} />
            </>
          );
        }
      }
    </Context.Consumer>
  );
};
