import supabase from "./supabase";

export async function getUrls(user_id) {
  const { data, error } = await supabase
    .from("urls")
    .select("*")
    .eq("user_id", user_id);

  if (error) throw new Error(error.message);

  if (error) {
    console.log(error.message);
    throw new Error("Failed to fetch URLs");
  }

  return data;
}
