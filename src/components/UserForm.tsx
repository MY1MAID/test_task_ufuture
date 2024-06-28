import { FC, useState, FormEvent } from "react";
import { Form } from "../styles/Form";
import { Input } from "../styles/Input";
import { AddUserButton } from "../styles/AddUserButton";

interface UserFormProps {
  onAddUser: (user: { name: string; email: string; phone: string }) => void;
}

const UserForm: FC<UserFormProps> = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAddUser({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Электронная почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <AddUserButton type="submit">Добавить пользователя</AddUserButton>
    </Form>
  );
};

export default UserForm;
