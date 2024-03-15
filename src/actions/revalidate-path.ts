'use server'

import { revalidatePath, revalidateTag } from "next/cache"

export async function revalidatePathAction(path: string) {
  revalidatePath(path)
}

export async function revalidatePathActionWithTimeout(path: string, timeout: number) {
  setTimeout(() => {
    revalidatePath(path)
  }, timeout)
}

export async function revalidateTagAction(tag: string) {
  revalidateTag(tag)
}