export const path = {
  supabase: {
    image: (id: string) => `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/picshare/${id}.png`
  },
  api: {
    upload: "/api/upload"
  }
};
