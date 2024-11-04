export type MenuProps={
    cat: string;

}
export interface Post {
    id: number;
    title?: string;
    content?: string;
    image?: string;
    userImg?: string;
    username?: string;
    date_posted?: string; // or Date if you prefer to manage date objects
    cat?: string;
    description?:string;
  }
export type User={
    id?: string;
    username?: string;
    email?: string;
}
export type AuthContextType={
    currentUser?: User | null;
    login?: (inputs: LoginInputs) => Promise<void>;
    logout?: () => Promise<void>;
}
export type LoginInputs ={
    email?: string;
    password: string;
    username?: string;

  }
  export interface RegisterInputs {
    username: string;
    email: string;
    password: string;
  }