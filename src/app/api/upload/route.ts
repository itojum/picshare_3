import { supabase } from "@/lib/supabase/client"
import { generateSecureId } from "@/utils/generateImageId"

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get("file")
  if (!file) {
    return new Response("No file uploaded", { status: 400 })
  }

  const backetName = 'picshare'
  const imageId = generateSecureId()

  const { error } = await supabase.storage
    .from(backetName)
    .upload(`${imageId}.png`, file)
  if (error) {
    return new Response(error.message, { status: 500 })
  }
  return new Response(imageId, { status: 200 })
}
