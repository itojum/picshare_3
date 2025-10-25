export const path = {
  supabase: {
    image: (id: string) => `${process.env.SUPABASE_URL!}/project/default/storage/buckets/picshare/${id}`
  },
};