import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import classNames from "classnames";

export default function Hero() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { t } = useTranslation("common");

  const { locale } = useRouter();
  console.log(locale);
  const navigation = [
    { name: t("about"), href: "#about" },
    { name: t("skills"), href: "#skills" },
    { name: t("projects"), href: "#projects" },
  ];

  return (
    <div className="relative bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <nav
                  className="relative flex items-center justify-between sm:h-10 md:justify-center"
                  aria-label="Global">
                  <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:right-0">
                    <div className="flex items-center justify-end w-full md:w-auto">
                      <LanguageChanger currentLocale={locale} />
                      {mounted && (
                        <ThemeChanger theme={theme} setTheme={setTheme} />
                      )}
                      <div className="-mr-2 flex items-center md:hidden ml-2">
                        <Popover.Button className="bg-gray-50 dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">{t("open_main_menu")}</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex md:space-x-10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-500 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-end">
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">{t("close_menu")}</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">{t("hi")}</span>{" "}
              <span className="block text-indigo-600 xl:inline">
                Alexander May
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
              {t("purpose")}
            </p>
          </div>
        </main>
      </div>
    </div>
  );

  function LanguageChanger({ currentLocale }) {
    return (
      <div className="dark:text-white">
        <Link href="/" locale="de">
          <a
            className={classNames(
              "border-gray-800 dark:border-white pb-1 hover:border-b",
              {
                "border-b": currentLocale === "de",
              }
            )}>
            DE
          </a>
        </Link>{" "}
        |{" "}
        <Link href="/" locale="en">
          <a
            className={classNames(
              "border-gray-800 dark:border-white pb-1 hover:border-b",
              {
                "border-b": currentLocale === "en",
              }
            )}>
            EN
          </a>
        </Link>
      </div>
    );
  }

  function ThemeChanger({ theme, setTheme }) {
    return (
      <button
        className="text-gray-800 dark:text-white ml-4"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? (
          <MoonIcon className="h-6 w-6" />
        ) : (
          <SunIcon className="h-6 w-6" />
        )}
      </button>
    );
  }
}
