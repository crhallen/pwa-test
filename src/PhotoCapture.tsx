import { THE_ENTRY, db } from './db';
import { useLiveQuery } from 'dexie-react-hooks';

export const PhotoCapture = () => {
  const photoUrl = useLiveQuery(async () => {
    const record = await db.records.get(99);
    console.log('running photoblob live query', record?.photoBlob);

    return record?.photoBlob ? URL.createObjectURL(record.photoBlob) : null;
  }, []);
  console.log('🚀 ~ photoUrl:', photoUrl);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log('called onChange');
    const target = event.target as HTMLInputElement & { files: FileList };

    const file = target.files[0];
    if (!file) {
      return;
    }

    console.log('🚀 ~ file:', file);

    const fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr.onload = async () => {
      console.log('🚀 ~ fr.onload');
      const photoBlob = new Blob([fr.result as ArrayBuffer]);
      try {
        await db.records.update(THE_ENTRY, { photoBlob });
      } catch (err) {
        console.log('failed to save photoblob to db', err);
      }
    };
  };

  return (
    <form>
      <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
        <label htmlFor="imageFile">Add a photo</label>

        <input
          type="file"
          id="imageFile"
          capture="environment"
          accept="image/*"
          onChange={handleChange}
        />

        {photoUrl && (
          <img src={photoUrl} style={{ width: '100%', maxWidth: 600 }} />
        )}
      </div>
    </form>
  );
};
