import { THE_ENTRY, db } from './db';
import { useLiveQuery } from 'dexie-react-hooks';

export const PhotoCapture = () => {
  const photoDataUrl = useLiveQuery(async () => {
    const record = await db.records.get(99);
    console.log('running photoblob live query', record?.photoDataUrl);

    return record?.photoDataUrl;
  }, []);
  console.log('🚀 ~ photoDataUrl:', photoDataUrl);

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
    // TODO - SWITCH TO BLOB, ITS MORE EFFICIENT
    fr.readAsDataURL(file);
    fr.onload = async () => {
      console.log('🚀 ~ fr.onload');
      const photoDataUrl = fr.result as string;
      try {
        await db.records.update(THE_ENTRY, { photoDataUrl });
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

        {photoDataUrl && (
          <img src={photoDataUrl} style={{ width: '100%', maxWidth: 600 }} />
        )}
      </div>
    </form>
  );
};
