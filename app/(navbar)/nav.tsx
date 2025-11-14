"use client";

import { Fragment } from "react";
import Media from "react-media";
import dynamic from "next/dynamic";

// mobile
const DynamicMobileNav = dynamic(() => import("./mobile/mobileNav"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

// desktop
const DynamicDesktopNav = dynamic(() => import("./desktopNav"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Nav = () => {
  return (
    <Media
      queries={{
        small: "(max-width: 767px)",
        large: "(min-width: 768px)",
      }}
    >
      {(matches) => (
        <Fragment>
          {/* mobile nav */}
          {matches.small && (
            <>
              <DynamicMobileNav />
            </>
          )}

          {/* tablet and desktop nav */}
          {matches.large && (
            <>
              <DynamicDesktopNav />
            </>
          )}
        </Fragment>
      )}
    </Media>
  );
};

export default Nav;
