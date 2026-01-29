import { sanity } from "@/lib/sanity";
import InterviewCard from "@/components/InterviewCard";

export default async function Home() {
  const interviews = await sanity.fetch(`
    *[_type=="interview"][0..3]{
      title, guest, slug
    }
  `);

  return (
    <>
      <h1>Conversations That Matter</h1>
      <div className="grid">
        {interviews.map((i:any) => (
          <InterviewCard key={i.slug.current} interview={i} />
        ))}
      </div>
    </>
  );
}
