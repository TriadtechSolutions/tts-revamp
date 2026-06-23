import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ padding: "120px 0", textAlign: "center" }}>
      <div className="container">
        <h1>404</h1>
        <p>Page not found.</p>
        <Link href="/" className="btn btn-outline-primary" style={{ marginTop: "1.5rem" }}>
          Go Home
          <span className="quarter" />
        </Link>
      </div>
    </section>
  );
}
