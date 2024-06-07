import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for cannot be found.</p>
      <Link href={'/'}>Go Home</Link>
    </>
  );
}
