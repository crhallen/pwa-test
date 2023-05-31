import { AudioRecorder } from 'react-audio-voice-recorder';
import { useLiveQuery } from 'dexie-react-hooks';

import { THE_ENTRY, db } from './db';

export const AudioRecording = () => {
  const audioUrl = useLiveQuery(async () => {
    const record = await db.records.get(THE_ENTRY);
    console.log('running audioblob live query', record?.audioBlob);

    return record?.audioBlob ? URL.createObjectURL(record.audioBlob) : null;
  }, []);
  console.log('🚀 ~ audioUrl:', audioUrl);

  const handleRecordingComplete = async (audioBlob: Blob) => {
    try {
      await db.records.update(THE_ENTRY, { audioBlob });
    } catch (error) {
      console.log('failed to save audioblob to db', error);
    }
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <AudioRecorder
        onRecordingComplete={handleRecordingComplete}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
      />
      <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
        {audioUrl && <audio controls src={audioUrl} key={audioUrl} />}
      </div>
    </div>
  );
};
