/* eslint-disable react/display-name */

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-center lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base dark:text-gray-400  ">
            &copy; {new Date().getFullYear()} Alexander May. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
