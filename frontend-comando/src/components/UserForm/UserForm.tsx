import { useInputValue } from "../../hooks/useInputValue";
import { Button } from "../FavButton/styles";
import { Form, Input, Title, Error } from "./styles";

export const UserForm = ({ error, onSubmit, title, disable }: any) => {
  const email = useInputValue("");
  const password = useInputValue("");
  //   return (
  //     <form onSubmit={onSubmit}>
  //       <input
  //         type="text"
  //         placeholder="correo"
  //         {...email}
  //         // value={email.value}
  //         // onChange={email.onChange}
  //       />
  //       <input
  //         type="password"
  //         placeholder="***"
  //         {...password}
  //         // value={password.value}
  //         // onChange={password.onChange}
  //       />
  //       <button>Iniciar sesion</button>
  //     </form>
  //   );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disable={disable} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disable={disable} placeholder="Email" {...email} />
        <Input disable={disable} placeholder="Password" type="password" {...password} />
        <Button disable={disable}>{title}</Button>
        {error && <Error>{error}</Error>}
      </Form>
    </>
  );
};
