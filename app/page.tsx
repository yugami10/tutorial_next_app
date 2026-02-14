import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="content-center h-screen">
      <div className="flex justify-center gap-x-10">
        <div>
          <Image
            src="/profile/banana.jpeg"
            alt="プロフィール画像"
            width={200}
            height={200}
            objectFit="contain"
          />
        </div>
        <div>
          <p>なまえ</p>
          <p>自己紹介</p>
          <p>
            ああああああああ。
            <br />
            いいいいいいいいいいい。
            <br />
            よろしくお願いします。
          </p>
          <div className="flex gap-x-3">
            <Link href="/hobby">
              <div className="flex justify-center items-center text-center p-5 rounded-full bg-yellow-300">趣味</div>
            </Link>
            <Link href="/work">
              <div className="flex justify-center items-center text-center p-5 rounded-full bg-yellow-300">お仕事</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
