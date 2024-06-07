export interface linkType {
  name: string;
  link: string;
  logo: string;
}
export default function getLinks(): {
  urls: linkType[];
} {
  return {
    urls: [
      {
        name: "Instagram",
        link: "https://instagram.com/gagan_gulyani",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/GaganGulyani",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png",
      },
      {
        name: "GitHub",
        link: "https://github.com/GaganGulyani",
        logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      },
    ],
  };
}
