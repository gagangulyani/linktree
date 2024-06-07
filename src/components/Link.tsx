import { linkType } from "../util/getLinks";

export default function Link(link: linkType) {
  return (
    <a
      className="flex items-center mb-8 bg-slate-900 w-[90%] xl:w-[30%] lg:w-[40%] md:w-[50%] p-3 hover:bg-blue-200 text-white hover:text-blue-900 rounded-lg hover:shadow-lg"
      href={link.link}
      target="_blank"
    >
      <img
        className="w-10 mr-2 md:mr-0 md:w-20 bg-white p-2 rounded-lg"
        src={link.logo}
        alt={`${link.name} Logo`}
      />
      <p className="mx-auto text-4xl">{link.name}</p>
    </a>
  );
}
