export type User = {
  id: number;
  name: string;
  email: string;
};

export async function fetchUser(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 45,
        name: "Віталій Іванін",
        email: "ilfcdk@gmail.com",
      });
    }, 2000);
  });
}
