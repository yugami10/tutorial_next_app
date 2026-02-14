import Image from "next/image";

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
        </div>
      </div>
    </div>
  );
}
