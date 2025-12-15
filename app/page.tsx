import SixtyClock from "./SixtyClock";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12">
      <main className="w-full max-w-3xl">
        <SixtyClock />
      </main>
    </div>
  );
}
