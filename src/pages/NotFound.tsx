import { Link } from "react-router-dom";
import { usePageTitle } from "../usePageTitle.ts";

export function NotFound() {
  usePageTitle("Not found");

  return (
    <div className="container-site py-24 md:py-36">
      <p className="kicker">TNTHCPS</p>
      <h1 className="display mt-5">This page is not on the hill.</h1>
      <p className="lede mt-6">The address does not match a page in this site.</p>
      <Link to="/" className="text-link mt-10">
        Return home
      </Link>
    </div>
  );
}
