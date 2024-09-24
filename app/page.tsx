import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={100}
        priority
        className="animate-bounce"
      />
      <h1 className="text-3xl font-bold">
        Welcome to <span className="text-green-500">RDAS</span>
      </h1>
      <p className="text-lg">
        Get started by editing{" "}
        <code className="bg-gray-100 p-1 rounded-md font-mono">
          app/page.tsx
        </code>
      </p>
      </div>
  );
}
