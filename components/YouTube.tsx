export default function YouTube({ id }: { id: string }) {
  return (
    <div className='relative h-96 my-7 pb-2 max-w-full '>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow='autoplay; encrypted-media'
        title='Embedded YouTube video'
        className='absolute top-0 left-0 w-full h-full border-0'
      />
    </div>
  );
}
