import { defineStore } from 'pinia';
import type { Transcription } from '@/models/transcription';
import { ref } from 'vue';
import { generateRandomId } from '@/utils/utils';

export const useTranscriptionsStore = defineStore('transcriptionsStore', () => {
    const transcriptions = ref<Transcription[]>([]);

    const init = (newTranscriptions: Transcription[]) => {
        transcriptions.value.push(...newTranscriptions);
    }

    const create = () =>{
        transcriptions.value.push({ id: generateRandomId(), text: 'Click to edit...', voice: 'Click to edit...' });
    }

    const update = (transcription: Transcription) => {
        const index = transcriptions.value.findIndex((item: Transcription) => item.id === transcription.id);
        if (index !== -1) {
            transcriptions.value[index] = {...transcriptions.value[index], ...transcription};
        }
    }

    const remove = (transcriptionId: number) => {
        const index = transcriptions.value.findIndex(item => item.id === transcriptionId);
        if (index !== -1) {
            transcriptions.value.splice(index, 1);
        }
    }

    return {
        transcriptions,
        init,
        create,
        update,
        remove
    };
});
