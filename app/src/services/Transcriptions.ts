import type { Transcription } from '@/models/transcription'
import { sanitizeData } from '@/utils/utils'

const URL = 'https://run.mocky.io/v3/ebac0b77-a220-46d3-963c-ae8881c7e4c3'

export const getTranscriptions = async (): Promise<Transcription[]> => {
  return fetch(URL)
    .then((response) => response.text())
    .then((data) => sanitizeData(data))
    .then((data) => JSON.parse(data))
}

export const postTranscriptions = async (data: Transcription[]) => {
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(data)
  })
}



