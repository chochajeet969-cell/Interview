import Link from "next/link";

export default function InterviewCard({ interview }: any) {
  return (
    <div className="card">
      <h3>{interview.title}</h3>
      <p>{interview.guest}</p>
      <Link href={`/interviews/${interview.slug.current}`}>
        View Interview →
      </Link>
    </div>
  );
}
