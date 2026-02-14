import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/profile/banana.jpeg" alt="プロフィール画像" width={100} height={100} />
      <p>Hello</p>
    </div>
  );
}
