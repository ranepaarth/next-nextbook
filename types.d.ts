import { DocumentData } from "firebase/firestore";

type Story = {
  name: string;
  src: string;
  profile: string;
};

type Contact = {
  src: string;
  name: string;
  isOnline: boolean;
};

type PostsProps = {
  posts:{
    id:string
    data?:DocumentData
  }[]
}
