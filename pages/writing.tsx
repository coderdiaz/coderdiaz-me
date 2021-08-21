import Image from "next/image";

import BaseLayout from "@/layouts/BaseLayout";
import Container from "@/components/Container";
import Expanish from "@/images/expanish.png";
import WebsiteRedesign from "@/images/website-redesign.png";

export default function BlogPage() {
  return (
    <>
      <section className="pt-8 md:pt-20">
        <Container className="max-w-screen-lg border-b border-gray-200">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-7xl leading-tight mb-6 md:mb-16">Writing.</h1>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-0 items-center pb-14">
            <div className="flex flex-col space-y-2 lg:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl leading-tight">Creating my portfolio with Next.js, Sanity and Planetscale.</h2>
              <div className="flex space-x-4 items-center text-gray-700 lg:text-lg">
                <time dateTime="" className="inline-block">Aug 20, 2021</time>
                <div className="w-1 h-1 rounded-full bg-gray-900" />
                <span className="inline-block">5 min read</span>
              </div>
              <p className="leading-relaxed text-gray-700 lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="relative">
              <Image
                className="rounded-lg"
                objectFit="cover"
                src={WebsiteRedesign} />
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-10 pb-14 md:py-14">
        <Container className="max-w-screen-lg">
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-7 md:gap-y-12">
            <div className="flex flex-col space-y-4">
              <div className="hidden md:block relative h-56 lg:h-72">
                <Image
                  className="rounded-lg"
                  src={Expanish}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top center" />
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold text-lg lg:text-xl">Expanish</h3>
                <div className="flex space-x-4 items-center text-gray-700">
                  <time dateTime="" className="inline-block">Aug 20, 2021</time>
                  <div className="w-1 h-1 rounded-full bg-gray-900" />
                  <span className="inline-block">5 min read</span>
                </div>
                <p className="leading-relaxed text-gray-700 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus, enim saepe aspernatur.</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="hidden md:block relative h-56 lg:h-72">
                <Image
                  className="rounded-lg"
                  src={Expanish}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top center" />
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold text-lg lg:text-xl">Expanish</h3>
                <div className="flex space-x-4 items-center text-gray-700">
                  <time dateTime="" className="inline-block">Aug 20, 2021</time>
                  <div className="w-1 h-1 rounded-full bg-gray-900" />
                  <span className="inline-block">5 min read</span>
                </div>
                <p className="leading-relaxed text-gray-700 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus, enim saepe aspernatur.</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="hidden md:block relative h-56 lg:h-72">
                <Image
                  className="rounded-lg"
                  src={Expanish}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top center" />
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold text-lg lg:text-xl">Expanish</h3>
                <div className="flex space-x-4 items-center text-gray-700">
                  <time dateTime="" className="inline-block">Aug 20, 2021</time>
                  <div className="w-1 h-1 rounded-full bg-gray-900" />
                  <span className="inline-block">5 min read</span>
                </div>
                <p className="leading-relaxed text-gray-700 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus, enim saepe aspernatur.</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="hidden md:block relative h-56 lg:h-72">
                <Image
                  className="rounded-lg"
                  src={Expanish}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top center" />
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold text-lg lg:text-xl">Expanish</h3>
                <div className="flex space-x-4 items-center text-gray-700">
                  <time dateTime="" className="inline-block">Aug 20, 2021</time>
                  <div className="w-1 h-1 rounded-full bg-gray-900" />
                  <span className="inline-block">5 min read</span>
                </div>
                <p className="leading-relaxed text-gray-700 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus, enim saepe aspernatur.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

BlogPage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  );
}