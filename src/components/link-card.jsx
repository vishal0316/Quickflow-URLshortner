import { Copy, Download, LinkIcon, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import useFetch from "@/hooks/use-fetch";
import { deleteUrl } from "@/db/apiUrls";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Cover } from "./ui/cover";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LinkCard = ({ url, fetchUrls }) => {
  const downloadImage = () => {
    const imageUrl = url?.qr;
    const fileName = url?.title;

    const anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = fileName;

    document.body.appendChild(anchor);

    anchor.click();

    // Remove the anchor element after the click
    setTimeout(() => document.body.removeChild(anchor), 0);
  };

  const { loading: loadingDelete, fn: fnDelete } = useFetch(deleteUrl, url?.id);

  return (
    <div className="flex flex-col mt-10 md:flex-row gap-5 border p-4 rounded-lg">
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Left - QR Image */}
      <Cover className="flex flex-wrap">
        {url?.qr && (
          <img
            src={url.qr}
            alt="QR code"
            className="h-32 object-contain mt-4 ml-3 rounded-md self-start"
          />
        )}
        {/* Right - Details and Actions */}
        <div className="flex flex-col gap-4 ml-4 flex-1 max-w-full">
          <Link to={`/link/${url?.id}`} className="flex flex-col flex-1">
            {url?.title && (
              <span className="text-2xl sm:text-3xl text-primary font-extrabold hover:underline cursor-pointer">
                {url.title}
              </span>
            )}
            <span className="text-base sm:text-lg md:text-xl text-blue-600 font-bold hover:underline cursor-pointer break-words">
              https://quickflowurl.vercel.app/
              {url?.custom_url ? url?.custom_url : url?.short_url}
            </span>
            {url?.original_url && (
              <span className="flex items-center gap-1 hover:underline cursor-pointer">
                <LinkIcon className="p-1" />
                <span className="truncate max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-sm sm:text-base md:text-lg">
                  {`${url.original_url.slice(0, 40)}...`}
                </span>
              </span>
            )}
            <span className="flex items-end font-extralight text-xs sm:text-sm flex-1">
              {new Date(url?.created_at).toLocaleString()}
            </span>
          </Link>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Copy Link */}
            <Button
              variant="ghost"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://quickflowurl.vercel.app/${url?.short_url}`
                );
                toast.success("Link Copied!");
              }}
            >
              <Copy />
            </Button>

            {/* Download Image */}
            <Button variant="ghost" onClick={downloadImage}>
              <Download />
            </Button>

            {/* Delete Confirmation */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" disable={loadingDelete}>
                  {loadingDelete ? (
                    <BeatLoader size={5} color="white" />
                  ) : (
                    <Trash />
                  )}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your link.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => fnDelete().then(() => fetchUrls())}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </Cover>
    </div>
  );
};

export default LinkCard;
