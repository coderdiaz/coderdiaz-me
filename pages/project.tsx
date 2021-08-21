import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "react-feather";

import BaseLayout from "@/layouts/BaseLayout";
import Container from "@/components/Container";
import Expanish from "@/images/expanish.png";

export default function ProjectPage() {
  return (
    <>
      <section className="pt-8 pb-14 md:py-14">
        <Container className="max-w-4xl">
          <a href="#" className="text-rose-500 flex space-x-3 items-center mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span className="inline-block font-bold uppercase text-sm tracking-widest text-rose-600">Go back</span>
          </a>
          <article>
            <h1 className="font-bold text-3xl md:text-6xl leading-tight mb-4 md:mb-5">Increase performance: Expanish.com</h1>
            <div className="flex space-x-4 items-center text-gray-700 lg:text-lg mb-4 md:mb-5">
              <time dateTime="" className="inline-block">Aug 20, 2021</time>
              <div className="w-1 h-1 rounded-full bg-gray-900" />
              <span className="inline-block">5 min read</span>
            </div>
            <p className="leading-loose md:text-lg mb-6 md:mb-10">
              This project is a headless e-commerce application for a small start-up spice factory. It's built on top of Shopify and possesses an extra content-management layer in Dato CMS which is synced to the Shopify product data via a serverless architecture.
            </p>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20 mb-6 md:mb-10">
              <div className="flex flex-col space-y-2">
                <span className="inline-block font-bold uppercase text-sm tracking-widest text-gray-500">Project Type</span>
                <span className="inline-block text-lg">Performance</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="inline-block font-bold uppercase text-sm tracking-widest text-gray-500">Technology Stack</span>
                <nav>
                  <ul className="flex flex-col space-y-2 text-lg">
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Prismic</li>
                    <li>Wordpress API</li>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="inline-block font-bold uppercase text-sm tracking-widest text-gray-500">Live Preview</span>
                <a href="#" className="text-rose-500 flex space-x-3 items-center mb-6 text-lg">
                  <span className="inline-block">Website</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative h-56 md:h-96 lg:h-144 lg:-mx-10 mb-6 md:mb-10">
              <Image
                className="w-full h-full rounded-lg"
                layout="fill"
                objectFit="cover"
                src={Expanish} />
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

ProjectPage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  );
}