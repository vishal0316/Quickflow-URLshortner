import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Amit",
    username: "@amit",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/amit",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Raj",
    username: "@raj",
    body: "This app is a game changer! The analytics are spot on, and the QR code feature is brilliant.",
    img: "https://avatar.vercel.sh/raj",
  },
  {
    name: "Sneha",
    username: "@sneha",
    body: "Absolutely love how easy it is to create custom short links. Highly recommend!",
    img: "https://avatar.vercel.sh/sneha",
  },
  {
    name: "Rohan",
    username: "@rohan",
    body: "This is the best URL shortener I've ever used. The UI is clean and intuitive.",
    img: "https://avatar.vercel.sh/rohan",
  },
  {
    name: "Meera",
    username: "@meera",
    body: "The automatic QR code generation saved me so much time. Fantastic tool!",
    img: "https://avatar.vercel.sh/meera",
  },
  {
    name: "Vikram",
    username: "@vikram",
    body: "This app has transformed the way I share links with clients. Super reliable.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Ananya",
    username: "@ananya",
    body: "From link shortening to tracking stats, this app has everything I need in one place!",
    img: "https://avatar.vercel.sh/ananya",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <div>
          <h1 className="text-5xl font-bold">Reviews</h1>
        </div>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
}
