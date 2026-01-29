export default function InterviewPlayer({ video, captions }: any) {
  return (
    <video controls width="100%">
      <source src={video} type="video/mp4" />
      <track
        kind="captions"
        src={captions}
        srcLang="en"
        label="English captions"
        default
      />
    </video>
  );
}
