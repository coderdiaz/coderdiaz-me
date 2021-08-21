import Image from "next/image";
import { ArrowLeft } from "react-feather";

import BaseLayout from "@/layouts/BaseLayout";
import Container from "@/components/Container";

export default function ArticlePage() {
  return (
    <>
      <section className="pt-8 pb-14 md:py-14">
        <Container className="max-w-4xl">
          <a href="#" className="text-rose-500 flex space-x-3 items-center mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span className="inline-block font-bold uppercase text-sm tracking-widest text-rose-600">Go back</span>
          </a>
          <article>
            <h1 className="font-bold text-3xl md:text-6xl leading-tight mb-4 md:mb-5">Creating my portfolio with Next.js, Sanity and Planetscale.</h1>
            <div className="flex space-x-4 items-center text-gray-700 lg:text-lg mb-4 md:mb-5">
              <time dateTime="" className="inline-block">Aug 20, 2021</time>
              <div className="w-1 h-1 rounded-full bg-gray-900" />
              <span className="inline-block">5 min read</span>
            </div>
            <p className="leading-loose md:text-lg italic mb-6 md:mb-10">
              <span className="pr-2 uppercase text-sm tracking-widest not-italic font-bold text-rose-600">Quick Summary »</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <div className="relative h-56 md:h-96 lg:h-144 lg:-mx-10 mb-6 md:mb-10">
              <Image
                className="w-full h-full rounded-lg"
                layout="fill"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80" />
            </div>
            <div className="prose md:text-lg text-gray-800 flex flex-col space-y-4 md:space-y-6">
              <p className="leading-loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quia, earum sequi minima aspernatur reiciendis, similique consequatur quam harum nulla minus quod cupiditate hic nostrum nobis rerum iusto distinctio facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam numquam nisi ab labore nobis sed quidem veritatis sunt harum hic ad voluptatibus fugiat laudantium, obcaecati minima, ex aliquid tempora.</p>
              <p className="leading-loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quia, earum sequi minima aspernatur reiciendis, similique consequatur quam harum nulla minus quod cupiditate hic nostrum nobis rerum iusto distinctio facere.</p>
              <h2 className="font-bold text-2xl md:text-3xl pt-6">Technology Stack</h2>
              <p className="leading-loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quia, earum sequi minima aspernatur reiciendis, similique consequatur quam harum nulla minus quod cupiditate hic nostrum nobis rerum iusto distinctio facere.</p>
              <figure>
                <div className="relative h-56 md:h-96 lg:-mx-10 mb-4">
                  <Image
                    className="w-full h-full rounded-lg"
                    layout="fill"
                    objectFit="cover"
                    src={"https://images.unsplash.com/photo-1573496528736-cf543ba57104?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"} />
                </div>
                <figcaption className="text-base text-gray-500 flex justify-center">Overview Architecture</figcaption>
              </figure>
              <p className="leading-loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quia, earum sequi minima aspernatur reiciendis, similique consequatur quam harum nulla minus quod cupiditate hic nostrum nobis rerum iusto distinctio facere.</p>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}

ArticlePage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  );
}