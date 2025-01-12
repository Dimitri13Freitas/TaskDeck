import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_PROJECT_URL,
  import.meta.env.VITE_ANON_KEY,
);

export class EndPoints {
  async login(credentials) {
    const returnLogin = await supabase.auth.signInWithPassword(credentials);
    return returnLogin;
  }
  async createUser(credentials, name) {
    const registerUser = supabase.auth.signUp({
      ...credentials,
      options: {
        data: {
          first_name: name,
        },
      },
    });

    return registerUser;
    // console.log("Cria usuário");
  }
}
