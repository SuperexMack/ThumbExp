import { HeroVideoDialog } from "../../components/ui/hero-video-dialog";

export function HeroVideoDialogDemoTopInBottomOut() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/9cWuEK1NkK0?si=zLg5mXMgJOj2mz-z"
        thumbnailSrc="/mainvideo.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/9cWuEK1NkK0?si=zLg5mXMgJOj2mz-z"
        thumbnailSrc="/mainvideo.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
