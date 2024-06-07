import getLinks, { linkType } from "../util/getLinks";
import Link from "./Link";

function LinkList() {
  const links: { urls: linkType[] } = getLinks();

  return (
    <section id="links" className=" flex flex-col items-center mt-8">
      {links.urls.map((link: linkType, index) => (
        <Link {...link} key={index} />
      ))}
    </section>
  );
}

export default LinkList;
