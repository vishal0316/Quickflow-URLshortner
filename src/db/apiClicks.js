import supabase from "./supabase";

export async function getClicksUrls(urlIds) {
  const { data, error } = await supabase
    .from("clicks")
    .select("*")
    .in("url_id", urlIds);

  if (error) throw new Error(error.message);

  if (error) {
    console.log(error.message);
    throw new Error("Failed to fetch clicks");
  }

  return data;
}
