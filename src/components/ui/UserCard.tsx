import { FC } from "react";
import { Card } from "../../styles/Card";
import { Input } from "../../styles/Input";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface UserCardProps {
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
  };
  onDelete: (id: number) => void;
}

const UserCard: FC<UserCardProps> = ({ user, onDelete }) => {
  return (
    <Card>
      <IconButton
        sx={{ alignSelf: "flex-end" }}
        onClick={() => onDelete(user.id)}
      >
        <DeleteIcon />
      </IconButton>
      <img
        src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
        alt="user"
      />
      <Input value={user.name}></Input>
      <Input value={user.email}></Input>
      <Input value={user.phone}></Input>
    </Card>
  );
};

export default UserCard;
