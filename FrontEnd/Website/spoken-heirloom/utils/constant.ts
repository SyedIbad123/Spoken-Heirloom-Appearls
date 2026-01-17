import NavbarLogo from "@/assets/logo_navbar.png";
import USLogo from "@/assets/US_flag.png";
import HeroSectionImage from "@/assets/Hero_Section_Image.png";
import RightArrow from "@/assets/right_arrow.png";
import LeftArrow from "@/assets/left_arrow.png";
import ProcessSectionImage from "@/assets/Process_Section_Image.png";
import ProcessFlowImage from "@/assets/Process_Flow_Image.png";
import ProcessFlowSvg from "@/assets/Process_Flow_SVG.svg";
import ProcessRightImage from "@/assets/Process_Right_Side.png";
import ProcessLeftImage from "@/assets/Process_Left_Side.png";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "#" },
  { label: "Create Your Book", href: "#" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ/Support", href: "#" },
  { label: "Contact", href: "/contact" },
];

export const images = {
  NavbarLogo,
  USLogo,
  HeroSectionImage,
  RightArrow,
  LeftArrow,
  ProcessSectionImage,
  ProcessFlowImage,
  ProcessRightImage,
  ProcessLeftImage,
  ProcessFlowSvg,
};

export const processSteps = [
  {
    step: "1.",
    title: "Upload Your Memories",
    description:
      "After creating your free account, add your photos, stories, and recordings anytime, or choose a monthly subscription to receive prompts daily, weekly, or monthly.",
  },
  {
    step: "2.",
    title: "Design with Ease",
    description:
      "Use our pre-made layouts to drag and drop your memories. QR codes are automatically generated to bring each page to life when scanned.",
  },
  {
    step: "03.",
    title: "Print & Cherish",
    description:
      "Order your professionally bound heirloom book and keep it for generations. A digital version is always included.",
  },
];
