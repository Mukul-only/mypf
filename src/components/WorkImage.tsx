import { useState, memo } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = memo(function WorkImage(props: Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {!imgError ? (
          <img
            src={props.image}
            alt={props.alt}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="work-image-fallback">
            <span>{props.alt?.charAt(0) || "?"}</span>
          </div>
        )}
      </a>
    </div>
  );
});

export default WorkImage;