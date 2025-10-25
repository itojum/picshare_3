export const path = {
  supabase: {
    image: (id: string) => `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/project/default/storage/buckets/picshare/${id}`
  },
  api: {
    upload: "/api/upload"
  }
};
