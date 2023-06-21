import Image from "next/image";

const About = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl pb-2">About</h1>

        <h2 className="text-4xl ">Hiroto Yuba</h2>

        <div className="flex justify-center">
          <Image
            src="/image/profile.png"
            alt="profile"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div>
        <h3 className="text-2xl">Information</h3>
        <p className="text-lg">
          1996年生まれ。yuba4という名前で活動しています。 TypeScript React.js
          React Native GraphQLなどの技術が好きです。
          連絡などがあればTwitterやメールなどでお願いします。
        </p>
      </div>
      <div>
        <h3 className="text-2xl">Career</h3>
        <ul className="pl-4">
          <li>
            <p className="text-lg">ワスド株式会社 2021年1月 ~ 2023年3月</p>
            <li>接客DX B to Bサービスデジちゃいむの開発</li>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl">Links</h3>
        <ul className="pl-4">
          <li>
            <button className="text-blue-500 hover:underline">
              <a href="https://twitter.com/yuba_4">Twitter @yuba040</a>
            </button>
          </li>

          <li>
            <button className="text-lg text-teal-500 hover:underline">
              <a href="mailto:abyu629@gmail.com">E-mail</a>
            </button>
          </li>

          <li>
            <button className="text-gray-700 hover:underline">
              <a href="https://github.com/Yuba4">GitHub Yuba4</a>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
