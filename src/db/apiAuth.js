import { supabase } from "./supabase";

export async function login({ email, password }) {
  try {
    const data = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error) throw new Error(error.message);
  }
}

export async function logout() {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentuser() {
  const { data: session, error } = await supabase.auth.getSession();
  if (!session.session) return null;
  if (error) throw new Error(error.message);
  return session.session?.user;
}

export async function signup({ email, password, name }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}
