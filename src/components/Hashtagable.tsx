"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useMemo } from "react";
import slugify from "slugify";

interface Props {
  children?: ReactNode;
}

export function Hashtagable(props: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const hashtag = useMemo(() => {
    if (typeof props.children !== "string") {
      return "";
    }

    return slugify(props.children, {
      lower: true,
      strict: true,
    });
  }, [props.children]);

  if (typeof props.children !== "string") {
    return props.children;
  }

  const copyToClipboard = () => {
    // update address
    router.push(`${pathname}#${hashtag}`, { scroll: true });

    // copy to clipboard
    const text = `${window.location.href}#${hashtag}`;
    navigator.clipboard.writeText(text); // TODO toast
  };

  return (
    <div id={hashtag} className="group">
      {props.children}{" "}
      <button
        className="hidden group-hover:inline text-gray-300 hover:text-gray-500 cursor-pointer"
        onClick={copyToClipboard}
      >
        #
      </button>
    </div>
  );
}
