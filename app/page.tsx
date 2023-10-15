
import Link from "next/link";
import Image from "next/image";

export default function Home() {

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <div className="flex justify-center">
                        <Image
                            src="/louisiana.png"
                            className=""
                            width={150}
                            height={150}
                            alt="Louisiana state district house map"
                        />
                    </div>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">GreenARMY Scorecard</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        a 2015 data visualization of the environmental voting record of Louisiana state legislators
                    </p>

                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link href="/house" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            <button className="btn btn-primary">
                                see scores
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

                            </button>
                        </Link>

                    </div>
                    <div className="">

                    </div>
                </div>
            </section>
            {/* <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">GreenARMY Scorecard</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            a 2015 data visualization of the environmental voting record of Louisiana state legislators
                        </p>
                        <Link href="/house" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            <button className="btn btn-primary">see scores</button>
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image
                            src="/louisiana.png"
                            width={150}
                            height={150}
                            alt="Louisiana state district house map"
                        />
                    </div>
                </div>
            </section> */}
        </div>
    );
}
