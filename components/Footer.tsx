import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <div className="p-4  dark:bg-gray-900 bg-gray-100 border-t flex items-center justify-between h-[80px]">
      <h1 className="text-gray-500 md:ml-[100px]">
        @all rights reserved Tripper
      </h1>

      <div className="gap-3 items-center hidden md:flex md:mr-[100px] text-3xl">
        <InstagramIcon />
        <XIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}
