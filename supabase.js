import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_PROJECT_URL,
  import.meta.env.VITE_ANON_KEY,
);

export async function login(credentials) {
  const returnLogin = await supabase.auth.signInWithPassword(credentials);
  return returnLogin;
}

export async function createUser(credentials, name) {
  const registerUser = supabase.auth.signUp({
    ...credentials,
    options: {
      data: {
        first_name: name,
      },
    },
  });
  return registerUser;
}

export async function getBoards() {
  const response = await supabase.from("board").select();
  console.log(response);
  return response;
}

export async function setBoards(data) {
  const response = await supabase.from("board").insert(data);
  return response;
}
