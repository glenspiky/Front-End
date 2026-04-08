import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="container mx-auto px4 py-32">
          <h1 className="text-black">
            A better way to track your job applications
          </h1>
          <p className="text-gray-700">
            Capture manage and organize your job search in one place
          </p>
        </section>
      </main>
    </div>
  );
}
