import { Result } from "antd";

export default function Unauthorized() {
  return (
    <Result
      status="warning"
      title="Administrator jeszcze nie potwierdził Twojego konta"
      extra="Dostaniesz wiadomość na adres email, gdy to zrobi"
    />
  );
}
