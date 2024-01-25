import type { Transcription } from '@/models/transcription'
import { getTranscriptions, postTranscriptions } from '@/services/Transcriptions'
import { useTranscriptionsStore } from '@/store/transcriptions'

export const useTranscriptionService = () => {
  const transcriptionStore = useTranscriptionsStore()

  const fetchTranscriptions = () => {
    getTranscriptions()
      .then((transcriptions) => {
        console.log('Transcriptions fetched successfully');
        transcriptionStore.init(transcriptions)
      })
      .catch((error) => {
        console.error('Error fetching transcriptions:', error)
        transcriptionStore.init([])
      })
  }

  const uploadTranscriptions = () => {
    postTranscriptions(transcriptionStore.transcriptions)
      .then(() => {
        console.log('Transcriptions uploaded successfully');
      })
      .catch((error) => {
        console.error('Error uploading transcriptions:', error)
      })
  }

  const createTranscription = () => transcriptionStore.create();
  
  const deleteTranscription = (transcriptionId: number) => transcriptionStore.remove(transcriptionId);

  const updateTranscription = (transcription: Transcription) => {
    transcriptionStore.update(transcription);
  };
  
  const getAllTranscriptions = () => transcriptionStore.transcriptions

  return {
    fetchTranscriptions,
    uploadTranscriptions,
    createTranscription,
    deleteTranscription,
    updateTranscription,
    getAllTranscriptions,
  }
}
