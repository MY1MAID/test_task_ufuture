import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import UserCard from "./ui/UserCard";
import UserForm from "./UserForm";
import ModalWindow from "./ui/ModalWindow";
import { UserContainer } from "../styles/UserContainer";
import { AddUserButton } from "../styles/AddUserButton";
import { Container } from "../styles/Container";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => setError("Ошибка при загрузке данных"));
  }, []);

  const handleAddUser = (user: {
    name: string;
    email: string;
    phone: string;
  }) => {
    const newUser = { ...user, id: users.length + 1 };
    setUsers([newUser, ...users]);
    setIsModalOpen(false);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const renderedUsers = useMemo(() => {
    return users.map((user) => (
      <UserCard key={user.id} user={user} onDelete={handleDeleteUser} />
    ));
  }, [users]);

  return (
    <Container>
      <AddUserButton onClick={() => setIsModalOpen(true)}>
        Добавить пользователя
      </AddUserButton>
      {isModalOpen && (
        <ModalWindow onClose={() => setIsModalOpen(false)}>
          <UserForm onAddUser={handleAddUser} />
        </ModalWindow>
      )}
      {error && <p>{error}</p>}
      <UserContainer>{renderedUsers}</UserContainer>
    </Container>
  );
};

export default UserList;
