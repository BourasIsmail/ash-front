import Province from "./Province";

interface UserInfo {
  id: number;
  name: string;
  email: string;
  roles: string;
  password: string;
  province: Province;
}

export default UserInfo;
